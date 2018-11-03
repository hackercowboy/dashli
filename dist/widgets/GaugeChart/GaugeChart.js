"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

var _FlexText = _interopRequireDefault(require("../../components/FlexText"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GaugeChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GaugeChart, _PureComponent);

  function GaugeChart() {
    var _this;

    _classCallCheck(this, GaugeChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GaugeChart).call(this));
    _this.createGaugeChart = _this.createGaugeChart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      size: 0,
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(GaugeChart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var percentage = this.props.percentage;
      /* istanbul ignore next */

      if (this.foreground) {
        /* eslint-disable arrow-body-style */

        /* istanbul ignore next */
        var arcTween = function arcTween(angle) {
          return function (d) {
            var interpolate = d3.interpolate(d.endAngle, angle);
            return function (t) {
              /* eslint-disable no-param-reassign */
              d.endAngle = interpolate(t);
              return _this2.arc(d);
            };
          };
        };

        this.foreground.transition().duration(750).attrTween('d', arcTween(percentage * 2 * Math.PI));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.container) {
        this.container.remove();
      }
    }
  }, {
    key: "createGaugeChart",
    value: function createGaugeChart(element) {
      var percentage = this.props.percentage;

      if (percentage && element) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var size = Math.min(width, height);
        this.container = d3.select(element);
        this.svg = this.container.append('svg');
        this.svg.attr('width', width);
        this.svg.attr('height', height);
        var g = this.svg.append('g').attr('transform', "translate(".concat(width / 2, ", ").concat(height / 2, ")"));
        this.arc = d3.arc().innerRadius(size / 2 * 0.85).outerRadius(size / 2).startAngle(0).cornerRadius(size);
        g.append('path').datum({
          endAngle: 2 * Math.PI
        }).attr('d', this.arc).attr('class', 'dashli-gauge-chart-background');
        this.foreground = g.append('path').datum({
          endAngle: percentage * 2 * Math.PI
        }).attr('d', this.arc).attr('class', 'dashli-gauge-chart-foreground');
        this.setState({
          size: size,
          width: width,
          height: height
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          size = _this$state.size,
          width = _this$state.width,
          height = _this$state.height;
      var infoWidth = size * 0.5;
      var infoHeight = size * 0.4;
      var infoStyle = {
        width: infoWidth,
        height: infoHeight,
        marginLeft: "".concat((width - infoWidth) / 2, "px"),
        marginTop: "".concat((height - infoHeight) / 2, "px")
      };
      return _react.default.createElement("div", {
        className: "dashli-gauge-chart"
      }, _react.default.createElement("div", {
        className: "dashli-gauge-chart-visual",
        ref: this.createGaugeChart
      }), _react.default.createElement("div", {
        className: "dashli-gauge-chart-info",
        style: infoStyle
      }, _react.default.createElement(_FlexText.default, _extends({}, this.props, {
        style: {
          width: infoWidth,
          height: infoHeight
        }
      }))));
    }
  }]);

  return GaugeChart;
}(_react.PureComponent);

_defineProperty(GaugeChart, "propTypes", {
  percentage: _propTypes.default.number
});

_defineProperty(GaugeChart, "defaultProps", {
  percentage: undefined
});

var _default = GaugeChart;
exports.default = _default;