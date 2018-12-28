import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const ALIGN_MAPPING = {
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end',
  left: 'flex-start',
  right: 'flex-end',
};


class FlexTextValue extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    icon: PropTypes.string,
    unit: PropTypes.string,
    additionalValue: PropTypes.string,
    /* eslint-disable react/forbid-prop-types */
    style: PropTypes.object,
    verticalAlign: PropTypes.string,
    horizontalAlign: PropTypes.string,
  }

  static defaultProps = {
    value: undefined,
    icon: undefined,
    unit: undefined,
    additionalValue: undefined,
    style: undefined,
    verticalAlign: 'center',
    horizontalAlign: 'center',
  }

  constructor() {
    super();
    this.state = {
      iconSize: undefined,
      fontSize: undefined,
      secondFontSize: undefined,
    };
    this.updateFontSize = this.updateFontSize.bind(this);
    this.iconStyle = this.iconStyle.bind(this);
    this.valueStyle = this.valueStyle.bind(this);
    this.additionalValueStyle = this.additionalValueStyle.bind(this);
  }

  componentDidUpdate() {
    this.updateFontSize(this.container);
  }

  updateFontSize(container) {
    if (container) {
      const { additionalValue } = this.props;
      const reference = container.querySelector('.reference');
      this.container = container;
      const heightFactor = container.offsetHeight / (additionalValue ? 60 : 40);
      const widthFactor = container.offsetWidth / reference.offsetWidth;

      const factor = Math.min(heightFactor, widthFactor);
      this.setState({
        iconSize: `${Math.floor(40 * factor)}px`,
        fontSize: `${Math.floor(40 * factor)}px`,
        secondFontSize: `${Math.floor(20 * factor)}px`,
      });
    }
  }

  iconStyle() {
    const {
      additionalValue,
      verticalAlign,
      horizontalAlign,
    } = this.props;
    const { iconSize, secondFontSize } = this.state;

    let style = {
      fontSize: iconSize,
      lineHeight: iconSize,
      justifyContent: ALIGN_MAPPING[horizontalAlign],
      alignItems: ALIGN_MAPPING[verticalAlign],
      marginBottom: additionalValue ? secondFontSize : 0,
    };

    if (verticalAlign === 'center' && additionalValue) {
      style = { ...style, alignItems: ALIGN_MAPPING.center, paddingTop: secondFontSize };
    }

    if (verticalAlign === 'top' && additionalValue) {
      style = { ...style, flexGrow: 0 };
    }

    return style;
  }

  valueStyle() {
    const {
      additionalValue,
      verticalAlign,
      horizontalAlign,
    } = this.props;

    const { fontSize, secondFontSize } = this.state;

    let style = {
      fontSize,
      lineHeight: fontSize,
      justifyContent: ALIGN_MAPPING[horizontalAlign],
      alignItems: ALIGN_MAPPING[verticalAlign],
    };

    if (verticalAlign === 'center' && additionalValue) {
      style = { ...style, alignItems: ALIGN_MAPPING.bottom, paddingTop: secondFontSize };
    }

    if (verticalAlign === 'top' && additionalValue) {
      style = { ...style, flexGrow: 0 };
    }

    return style;
  }

  additionalValueStyle() {
    const {
      verticalAlign,
      horizontalAlign,
    } = this.props;

    const { secondFontSize } = this.state;

    let style = {
      fontSize: secondFontSize,
      justifyContent: ALIGN_MAPPING[horizontalAlign],
      alignItems: ALIGN_MAPPING[verticalAlign],
    };

    if (verticalAlign === 'center') {
      style = { ...style, alignItems: ALIGN_MAPPING.top };
    }

    if (verticalAlign === 'bottom') {
      style = { ...style, flexGrow: 0 };
    }

    return style;
  }

  render() {
    const {
      value,
      icon,
      unit,
      additionalValue,
      style,
    } = this.props;
    const { iconSize, fontSize, secondFontSize } = this.state;
    return (
      <div className="flex-text-value" style={style} ref={this.updateFontSize}>
        { icon && iconSize ? (
          <div className="icon" style={this.iconStyle()}>
            <i className={icon} />
          </div>
        ) : undefined }
        <div className="values">
          { fontSize ? (
            <div className="value" style={this.valueStyle()}>
              <div>
                <span>{value}</span>
                <span className="unit" style={{ fontSize: secondFontSize, lineHeight: secondFontSize }}>{unit}</span>
              </div>
            </div>
          ) : undefined }
          { additionalValue && secondFontSize ? (
            <div className="additional-value" style={this.additionalValueStyle()}>{additionalValue}</div>
          ) : undefined }
        </div>
        <div className="reference">
          { icon ? (
            <div className="icon">
              <i className={icon} />
            </div>
          ) : undefined }
          <div className="values">
            <div className="value">
              <div>
                <span>{value}</span>
                <span className="unit">{unit}</span>
              </div>
            </div>
            { additionalValue ? (
              <div className="additional-value">{additionalValue}</div>
            ) : undefined }
          </div>
        </div>
      </div>
    );
  }
}

export default FlexTextValue;
