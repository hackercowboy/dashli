import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as d3 from 'd3';

class DonutChart extends PureComponent {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })),
  }

  static defaultProps = {
    values: undefined,
  }

  constructor() {
    super();
    this.createDonutChart = this.createDonutChart.bind(this);
    this.state = { size: 0, width: 0, height: 0 };
  }

  componentDidUpdate() {
    const { values } = this.props;

    this.svg.selectAll('.dashli-donut-chart-value').remove();
    const arcValues = this.convertValues(values);
    this.arcs = [];
    let currentAngle = 0;
    arcValues.forEach((value, index) => {
      this.arcs.push(this.g.append('path')
        .datum({ startAngle: currentAngle, endAngle: value + currentAngle })
        .attr('d', this.arc)
        .attr('class', `dashli-donut-chart-value dashli-donut-chart-value-${index}`));
      currentAngle += value;
    });
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.remove();
    }
  }

  convertValues(values) {
    const total = values.reduce((count, value) => count + value.value, 0);
    return values.map(value => value.value / total * 2 * Math.PI).sort().reverse();
  }

  createDonutChart(element) {
    const { values } = this.props;
    if (values && element) {
      const arcValues = this.convertValues(values);
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      const size = Math.min(width, height);

      this.container = d3.select(element);
      this.svg = this.container.append('svg');

      this.svg.attr('width', width);
      this.svg.attr('height', height);

      this.g = this.svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

      this.arc = d3.arc()
        .innerRadius(size / 2 * 0.8)
        .outerRadius(size / 2);

      this.arcs = [];
      let currentAngle = 0;
      arcValues.forEach((value, index) => {
        this.arcs.push(this.g.append('path')
          .datum({ startAngle: currentAngle, endAngle: value + currentAngle })
          .attr('d', this.arc)
          .attr('class', `dashli-donut-chart-value dashli-donut-chart-value-${index}`));
        currentAngle += value;
      });

      this.setState({ size, width, height });
    }
  }

  renderLegend() {
    const { values } = this.props;
    const { size } = this.state;
    if (values && size) {
      const valueHeight = Math.min(Math.floor(size * 0.5 / values.length * 0.8), Math.floor(size * 0.5 / 5 * 0.8));
      return (
        <ul>
          {values.sort((a, b) => b.value - a.value).map((value, index) => (
            /* eslint-disable react/no-array-index-key */
            <li key={index}>
              <div
                className={`dashli-donut-chart-legend-color dashli-donut-chart-legend-color-${index}`}
                style={{ width: Math.floor(valueHeight * 0.9), height: Math.floor(valueHeight * 0.9) }}
              />
              <div className="dashli-donut-chart-legend-text" style={{ fontSize: Math.floor(valueHeight * 0.65), lineHeight: `${valueHeight}px` }}>{value.label}</div>
            </li>
          ))}
        </ul>
      );
    }

    return undefined;
  }

  render() {
    const { size, width, height } = this.state;

    const legendWidth = size * 0.55;
    const legendHeight = size * 0.55;

    const legendStyle = {
      width: legendWidth,
      height: legendHeight,
      marginLeft: `${(width - legendWidth) / 2}px`,
      marginTop: `${(height - legendHeight) / 2}px`,
    };

    return (
      <div className="dashli-donut-chart">
        <div className="dashli-donut-chart-visual" ref={this.createDonutChart} />
        <div className="dashli-donut-chart-legend" style={legendStyle}>
          {this.renderLegend()}
        </div>
      </div>
    );
  }
}

export default DonutChart;
