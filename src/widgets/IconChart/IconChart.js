import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class IconChart extends PureComponent {
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

  renderItem(value, index, itemWidth, totalHeight, factor, total) {
    return (
      <div
        /* eslint-disable react/no-array-index-key */
        key={index}
        className={`dashli-icon-chart-item dashli-icon-chart-item-${index}`}
        style={{ width: itemWidth }}
      >
        <div
          className={`dashli-icon-chart-item-visual dashli-icon-chart-item-visual-${value.status ? value.status : 'neutral'}`}
          style={{ width: itemWidth }}
        >
          <div className="dashli-icon-chart-item-value">{value.value}</div>
          <div className="dashli-icon-chart-item-icon"><i className={value.icon} style={{ fontSize: Math.max(15, (value.value / total * factor * totalHeight * 0.6)) }} /></div>
        </div>
        <div className="dashli-icon-chart-item-label" style={{ width: itemWidth }}>{value.label}</div>
      </div>
    );
  }

  render() {
    const { values } = this.props;
    const { height, width } = this.state;

    const total = values.reduce((count, value) => count + value.value, 0);
    const max = values.reduce((current, value) => Math.max(current, value.value), 0);
    const factor = 1 / (max / total);

    const itemWidth = width / values.length * 0.9;

    return (
      <div className="dashli-icon-chart" ref={this.handleContainer}>
        { width ? values.map((value, index) => (this.renderItem(value, index, itemWidth, height, factor, total))) : undefined }
      </div>
    );
  }
}

export default IconChart;
