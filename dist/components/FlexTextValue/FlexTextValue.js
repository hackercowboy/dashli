"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ALIGN_MAPPING = {
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end',
  left: 'flex-start',
  right: 'flex-end'
};

var FlexTextValue =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FlexTextValue, _PureComponent);

  function FlexTextValue() {
    var _this;

    _classCallCheck(this, FlexTextValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlexTextValue).call(this));
    _this.state = {
      iconSize: undefined,
      fontSize: undefined,
      secondFontSize: undefined
    };
    _this.updateFontSize = _this.updateFontSize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.iconStyle = _this.iconStyle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.valueStyle = _this.valueStyle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.additionalValueStyle = _this.additionalValueStyle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FlexTextValue, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateFontSize(this.container);
    }
  }, {
    key: "updateFontSize",
    value: function updateFontSize(container) {
      if (container) {
        var additionalValue = this.props.additionalValue;
        var reference = container.querySelector('.dashli-flex-text-value-reference');
        this.container = container;
        var heightFactor = container.offsetHeight / (additionalValue ? 60 : 40);
        var widthFactor = container.offsetWidth / reference.offsetWidth;
        var factor = Math.min(heightFactor, widthFactor);
        this.setState({
          iconSize: "".concat(Math.floor(40 * factor), "px"),
          fontSize: "".concat(Math.floor(40 * factor), "px"),
          secondFontSize: "".concat(Math.floor(20 * factor), "px")
        });
      }
    }
  }, {
    key: "iconStyle",
    value: function iconStyle() {
      var _this$props = this.props,
          additionalValue = _this$props.additionalValue,
          verticalAlign = _this$props.verticalAlign,
          horizontalAlign = _this$props.horizontalAlign;
      var _this$state = this.state,
          iconSize = _this$state.iconSize,
          secondFontSize = _this$state.secondFontSize;
      var style = {
        fontSize: iconSize,
        lineHeight: iconSize,
        justifyContent: ALIGN_MAPPING[horizontalAlign],
        alignItems: ALIGN_MAPPING[verticalAlign],
        marginBottom: additionalValue ? secondFontSize : 0
      };

      if (verticalAlign === 'center' && additionalValue) {
        style = _objectSpread({}, style, {
          alignItems: ALIGN_MAPPING.center,
          paddingTop: secondFontSize
        });
      }

      if (verticalAlign === 'top' && additionalValue) {
        style = _objectSpread({}, style, {
          flexGrow: 0
        });
      }

      return style;
    }
  }, {
    key: "valueStyle",
    value: function valueStyle() {
      var _this$props2 = this.props,
          additionalValue = _this$props2.additionalValue,
          verticalAlign = _this$props2.verticalAlign,
          horizontalAlign = _this$props2.horizontalAlign;
      var _this$state2 = this.state,
          fontSize = _this$state2.fontSize,
          secondFontSize = _this$state2.secondFontSize;
      var style = {
        fontSize: fontSize,
        lineHeight: fontSize,
        justifyContent: ALIGN_MAPPING[horizontalAlign],
        alignItems: ALIGN_MAPPING[verticalAlign]
      };

      if (verticalAlign === 'center' && additionalValue) {
        style = _objectSpread({}, style, {
          alignItems: ALIGN_MAPPING.bottom,
          paddingTop: secondFontSize
        });
      }

      if (verticalAlign === 'top' && additionalValue) {
        style = _objectSpread({}, style, {
          flexGrow: 0
        });
      }

      return style;
    }
  }, {
    key: "additionalValueStyle",
    value: function additionalValueStyle() {
      var _this$props3 = this.props,
          verticalAlign = _this$props3.verticalAlign,
          horizontalAlign = _this$props3.horizontalAlign;
      var secondFontSize = this.state.secondFontSize;
      var style = {
        fontSize: secondFontSize,
        justifyContent: ALIGN_MAPPING[horizontalAlign],
        alignItems: ALIGN_MAPPING[verticalAlign]
      };

      if (verticalAlign === 'center') {
        style = _objectSpread({}, style, {
          alignItems: ALIGN_MAPPING.top
        });
      }

      if (verticalAlign === 'bottom') {
        style = _objectSpread({}, style, {
          flexGrow: 0
        });
      }

      return style;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          value = _this$props4.value,
          icon = _this$props4.icon,
          unit = _this$props4.unit,
          additionalValue = _this$props4.additionalValue,
          style = _this$props4.style;
      var _this$state3 = this.state,
          iconSize = _this$state3.iconSize,
          fontSize = _this$state3.fontSize,
          secondFontSize = _this$state3.secondFontSize;
      return _react.default.createElement("div", {
        className: "dashli-flex-text-value",
        style: style,
        ref: this.updateFontSize
      }, icon && iconSize ? _react.default.createElement("div", {
        className: "dashli-flex-text-value-icon",
        style: this.iconStyle()
      }, _react.default.createElement("i", {
        className: icon
      })) : undefined, _react.default.createElement("div", {
        className: "dashli-flex-text-value-values"
      }, fontSize ? _react.default.createElement("div", {
        className: "dashli-flex-text-value-value",
        style: this.valueStyle()
      }, _react.default.createElement("div", null, _react.default.createElement("span", null, value), _react.default.createElement("span", {
        className: "dashli-flex-text-value-unit",
        style: {
          fontSize: secondFontSize,
          lineHeight: secondFontSize
        }
      }, unit))) : undefined, additionalValue && secondFontSize ? _react.default.createElement("div", {
        className: "dashli-flex-text-value-additional-value",
        style: this.additionalValueStyle()
      }, additionalValue) : undefined), _react.default.createElement("div", {
        className: "dashli-flex-text-value-reference"
      }, icon ? _react.default.createElement("div", {
        className: "dashli-flex-text-value-icon"
      }, _react.default.createElement("i", {
        className: icon
      })) : undefined, _react.default.createElement("div", {
        className: "dashli-flex-text-value-values"
      }, _react.default.createElement("div", {
        className: "dashli-flex-text-value-value"
      }, _react.default.createElement("div", null, _react.default.createElement("span", null, value), _react.default.createElement("span", {
        className: "dashli-flex-text-value-unit"
      }, unit))), additionalValue ? _react.default.createElement("div", {
        className: "dashli-flex-text-value-additional-value"
      }, additionalValue) : undefined)));
    }
  }]);

  return FlexTextValue;
}(_react.PureComponent);

_defineProperty(FlexTextValue, "propTypes", {
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  unit: _propTypes.default.string,
  additionalValue: _propTypes.default.string,

  /* eslint-disable react/forbid-prop-types */
  style: _propTypes.default.object,
  verticalAlign: _propTypes.default.string,
  horizontalAlign: _propTypes.default.string
});

_defineProperty(FlexTextValue, "defaultProps", {
  value: undefined,
  icon: undefined,
  unit: undefined,
  additionalValue: undefined,
  style: undefined,
  verticalAlign: 'center',
  horizontalAlign: 'center'
});

var _default = FlexTextValue;
exports.default = _default;