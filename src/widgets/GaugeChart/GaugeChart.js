import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as d3 from 'd3';

import FlexText from '../../components/FlexText';

class GaugeChart extends PureComponent {
  static propTypes = {
    percentage: PropTypes.number,
  }

  static defaultProps = {
    percentage: undefined,
  }

  constructor() {
    super();
    this.createGaugeChart = this.createGaugeChart.bind(this);
    this.state = { size: 0, width: 0, height: 0 };
  }

  componentDidUpdate() {
    const { percentage } = this.props;

    /* eslint-disable arrow-body-style */
    /* istanbul ignore next */
    const arcTween = (angle) => {
      return (d) => {
        const interpolate = d3.interpolate(d.endAngle, angle);
        return (t) => {
          /* eslint-disable no-param-reassign */
          d.endAngle = interpolate(t);
          return this.arc(d);
        };
      };
    };

    this.foreground.transition().duration(750).attrTween('d', arcTween(percentage * 2 * Math.PI));
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.remove();
    }
  }

  createGaugeChart(element) {
    const { percentage } = this.props;
    if (percentage && element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      const size = Math.min(width, height);

      this.container = d3.select(element);
      this.svg = this.container.append('svg');

      this.svg.attr('width', width);
      this.svg.attr('height', height);

      const g = this.svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

      this.arc = d3.arc()
        .innerRadius(size / 2 * 0.85)
        .outerRadius(size / 2)
        .startAngle(0)
        .cornerRadius(size);

      g.append('path')
        .datum({ endAngle: 2 * Math.PI })
        .attr('d', this.arc)
        .attr('class', 'dashli-gauge-chart-background');

      this.foreground = g.append('path')
        .datum({ endAngle: percentage * 2 * Math.PI })
        .attr('d', this.arc)
        .attr('class', 'dashli-gauge-chart-foreground');

      this.setState({ size, width, height });
    }
  }

  render() {
    const { size, width, height } = this.state;

    const infoWidth = size * 0.5;
    const infoHeight = size * 0.4;

    const infoStyle = {
      width: infoWidth,
      height: infoHeight,
      marginLeft: `${(width - infoWidth) / 2}px`,
      marginTop: `${(height - infoHeight) / 2}px`,
    };

    return (
      <div className="dashli-gauge-chart">
        <div className="dashli-gauge-chart-visual" ref={this.createGaugeChart} />
        <div className="dashli-gauge-chart-info" style={infoStyle}>
          <FlexText {...this.props} style={{ width: infoWidth, height: infoHeight }} />
        </div>
      </div>
    );
  }
}

export default GaugeChart;
