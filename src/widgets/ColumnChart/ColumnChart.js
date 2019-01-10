import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class ColumnChart extends PureComponent {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      status: PropTypes.string,
      value: PropTypes.number,
    })),
  }

  static defaultProps = {
    values: [],
  }

  constructor() {
    super();
    this.handleContainer = this.handleContainer.bind(this);
    this.state = { height: undefined, width: undefined };
  }

  handleContainer(element) {
    /* istanbul ignore next */
    if (element) {
      this.setState({ height: element.offsetHeight, width: element.offsetWidth });
    }
  }

  render() {
    const { values } = this.props;
    const { height, width } = this.state;

    const total = values.reduce((count, value) => count + value.value, 0);
    const max = values.reduce((current, value) => Math.max(current, value.value), 0);
    const factor = 1 / (max / total);

    const itemWidth = width / values.length * 0.9;

    return (
      <div className="dashli-column-chart" ref={this.handleContainer}>
        { width ? values.map((value, index) => (
          <div
            /* eslint-disable react/no-array-index-key */
            key={index}
            className={`dashli-column-chart-item dashli-column-chart-item-${index}`}
            style={{ width: itemWidth }}
          >
            <div className="dashli-column-chart-item-value">{value.value}</div>
            <div
              className={`dashli-column-chart-item-visual dashli-column-chart-item-visual-${value.status ? value.status : 'neutral'}`}
              style={{ height: (value.value / total * factor * height * 0.7), width: itemWidth }}
            />
            <div className="dashli-column-chart-item-label" style={{ width: itemWidth }}>{value.label}</div>
          </div>
        )) : undefined }
      </div>
    );
  }
}

export default ColumnChart;
