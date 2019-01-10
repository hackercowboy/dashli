"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

var _FlexTextValue = _interopRequireDefault(require("../../components/FlexTextValue"));

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

var AreaChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AreaChart, _PureComponent);

  function AreaChart() {
    var _this;

    _classCallCheck(this, AreaChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AreaChart).call(this));
    _this.createAreaChart = _this.createAreaChart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AreaChart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var values = this.props.values;
      var data = values.map(function (value, index) {
        return {
          index: index,
          value: value
        };
      });
      var svg = this.svg.transition();
      this.x.domain(d3.extent(data, function (d) {
        return d.index;
      }));
      this.y.domain([0, d3.max(data, function (d) {
        return d.value;
      })]);
      svg.select('.dashli-area-chart-line').duration(100).attr('d', this.line(data));
      svg.select('.dashli-area-chart-area').duration(100).attr('d', this.area(data));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.container) {
        this.container.remove();
      }
    }
  }, {
    key: "createAreaChart",
    value: function createAreaChart(element) {
      var _this2 = this;

      var values = this.props.values;

      if (values && element) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var data = values.map(function (value, index) {
          return {
            index: index,
            value: value
          };
        });
        this.container = d3.select(element);
        this.svg = this.container.append('svg');
        this.svg.attr('width', width);
        this.svg.attr('height', height);
        var g = this.svg.append('g').attr('transform', 'translate(0, 0)');
        this.x = d3.scaleLinear().range([0, width]);
        this.y = d3.scaleLinear().range([height, 0]);
        this.area = d3.area().x(function (d) {
          return _this2.x(d.index);
        }).y0(height).y1(function (d) {
          return _this2.y(d.value);
        });
        this.line = d3.line().x(function (d) {
          return _this2.x(d.index);
        }).y(function (d) {
          return _this2.y(d.value);
        });
        this.x.domain(d3.extent(data, function (d) {
          return d.index;
        }));
        this.y.domain([0, d3.max(data, function (d) {
          return d.value;
        })]);
        g.append('path').data([data]).attr('class', 'dashli-area-chart-area').attr('d', this.area);
        g.append('path').data([data]).attr('class', 'dashli-area-chart-line').attr('d', this.line);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "dashli-area-chart"
      }, _react.default.createElement(_FlexTextValue.default, _extends({}, this.props, {
        verticalAlign: "bottom",
        horizontalAlign: "right"
      })), _react.default.createElement("div", {
        className: "dashli-area-chart-visual",
        ref: this.createAreaChart
      }));
    }
  }]);

  return AreaChart;
}(_react.PureComponent);

_defineProperty(AreaChart, "propTypes", {
  values: _propTypes.default.arrayOf(_propTypes.default.number)
});

_defineProperty(AreaChart, "defaultProps", {
  values: undefined
});

var _default = AreaChart;
exports.default = _default;