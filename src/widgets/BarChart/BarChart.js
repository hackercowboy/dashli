import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class BarChart extends PureComponent {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
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

    const itemHeight = height / values.length;
    const itemPadding = Math.floor(itemHeight / 3);
    const fontSize = Math.min(height / values.length * 0.4, 30);

    const style = {
      height: height / values.length,
      fontSize,
      lineHeight: fontSize,
      margin: `${Math.floor(itemHeight * 0.1)}px 0`,
      padding: `0 ${itemPadding}px`,
    };

    return (
      <div className="dashli-bar-chart" ref={this.handleContainer}>
        { height ? values.map((value, index) => (
          <div
            /* eslint-disable react/no-array-index-key */
            key={index}
            className={`dashli-bar-chart-item dashli-bar-chart-item-${index}`}
            style={{ ...style, width: `${(value.value / total * factor * width) - itemPadding * 2}px` }}
          >
            <div className="dashli-bar-chart-item-label">{value.label}</div>
            <div className="dashli-bar-chart-item-value">{value.value}</div>
          </div>
        )) : undefined }
      </div>
    );
  }
}

export default BarChart;
