import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as d3 from 'd3';

import FlexText from '../../components/FlexText';

import './AreaChart.css';

class AreaChart extends PureComponent {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    values: undefined,
  }

  constructor() {
    super();
    this.createAreaChart = this.createAreaChart.bind(this);
  }

  componentDidUpdate() {
    const { values } = this.props;
    const data = values.map((value, index) => ({ index, value }));
    const svg = this.svg.transition();
    this.x.domain(d3.extent(data, d => d.index));
    this.y.domain([0, d3.max(data, d => d.value)]);
    svg.select('.dashli-area-chart-line').duration(100).attr('d', this.line(data));
    svg.select('.dashli-area-chart-area').duration(100).attr('d', this.area(data));
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.remove();
    }
  }

  createAreaChart(element) {
    const { values } = this.props;
    if (values && element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      const data = values.map((value, index) => ({ index, value }));

      this.container = d3.select(element);
      this.svg = this.container.append('svg');

      this.svg.attr('width', width);
      this.svg.attr('height', height);

      const g = this.svg.append('g').attr('transform', 'translate(0, 0)');
      this.x = d3.scaleLinear().range([0, width]);
      this.y = d3.scaleLinear().range([height, 0]);

      this.area = d3.area()
        .x(d => this.x(d.index))
        .y0(height)
        .y1(d => this.y(d.value));

      this.line = d3.line()
        .x(d => this.x(d.index))
        .y(d => this.y(d.value));

      this.x.domain(d3.extent(data, d => d.index));
      this.y.domain([0, d3.max(data, d => d.value)]);

      g.append('path')
        .data([data])
        .attr('class', 'dashli-area-chart-area')
        .attr('d', this.area);

      g.append('path')
        .data([data])
        .attr('class', 'dashli-area-chart-line')
        .attr('d', this.line);
    }
  }

  render() {
    return (
      <div className="dashli-area-chart">
        <FlexText {...this.props} />
        <div className="dashli-area-chart-chart" ref={this.createAreaChart} />
      </div>
    );
  }
}

export default AreaChart;
