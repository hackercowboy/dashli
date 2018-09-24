import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './ValueWidget.css';

class ValueWidget extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    unit: PropTypes.string,
    additionalValue: PropTypes.string,
  }

  static defaultProps = {
    value: undefined,
    unit: undefined,
    additionalValue: undefined,
  }

  constructor() {
    super();
    this.state = {
      referenceWidth: undefined,
      referenceHeight: undefined,
      fontSize: '0px',
      secondFontSize: '0px',
    };
    this.updateFontSize = this.updateFontSize.bind(this);
  }

  componentDidUpdate() {
    this.updateFontSize(this.container);
  }

  updateFontSize(container) {
    if (container) {
      const { referenceWidth, referenceHeight } = this.state;
      const reference = container.querySelector('.dashboard-value-widget-reference');

      this.container = container;

      if (container && (reference.offsetWidth !== referenceWidth || reference.offsetHeight !== referenceHeight)) {
        const heightFactor = container.offsetHeight / reference.offsetHeight;
        const widthFactor = container.offsetWidth / reference.offsetWidth;
        const factor = Math.min(heightFactor, widthFactor);

        this.setState({
          referenceWidth: reference.offsetWidth,
          referenceHeight: reference.offsetHeight,
          fontSize: `${factor * 40}px`,
          secondFontSize: `${factor * 25}px`,
        });
      }
    }
  }

  render() {
    const { value, unit, additionalValue } = this.props;
    const { fontSize, secondFontSize } = this.state;

    return (
      <div className="dashboard-value-widget" ref={this.updateFontSize}>
        <div className="dashboard-value-widget-value" style={{ fontSize, lineHeight: fontSize }}>
          <div>
            <span>{value}</span>
            <span className="dashboard-value-widget-unit" style={{ fontSize: secondFontSize, lineHeight: secondFontSize }}>{unit}</span>
          </div>
        </div>
        { additionalValue ? (
          <div className="dashboard-value-widget-additional-value" style={{ fontSize: secondFontSize }}>{additionalValue}</div>
        ) : undefined }
        <div className="dashboard-value-widget-reference">
          <div className="dashboard-value-widget-value">
            <span>{value}</span>
            <span className="dashboard-value-widget-unit">{unit}</span>
          </div>
          { additionalValue ? (
            <div className="dashboard-value-widget-additional-value">{additionalValue}</div>
          ) : undefined }
        </div>
      </div>
    );
  }
}

export default ValueWidget;
