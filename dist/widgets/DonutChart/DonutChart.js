"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DonutChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DonutChart, _PureComponent);

  function DonutChart() {
    var _this;

    _classCallCheck(this, DonutChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DonutChart).call(this));
    _this.createDonutChart = _this.createDonutChart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      size: 0,
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(DonutChart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var values = this.props.values;
      this.svg.selectAll('.dashli-donut-chart-value').remove();
      var arcValues = this.convertValues(values);
      this.arcs = [];
      var currentAngle = 0;
      arcValues.forEach(function (value, index) {
        _this2.arcs.push(_this2.g.append('path').datum({
          startAngle: currentAngle,
          endAngle: value + currentAngle
        }).attr('d', _this2.arc).attr('class', "dashli-donut-chart-value dashli-donut-chart-value-".concat(index)).style('fill', values[index].color));

        currentAngle += value;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.container) {
        this.container.remove();
      }
    }
  }, {
    key: "convertValues",
    value: function convertValues(values) {
      var total = values.reduce(function (count, value) {
        return count + value.value;
      }, 0);
      return values.map(function (value) {
        return value.value / total * 2 * Math.PI;
      });
    }
  }, {
    key: "createDonutChart",
    value: function createDonutChart(element) {
      var _this3 = this;

      var values = this.props.values;

      if (values && element) {
        var arcValues = this.convertValues(values);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var size = Math.min(width, height);
        this.container = d3.select(element);
        this.svg = this.container.append('svg');
        this.svg.attr('width', width);
        this.svg.attr('height', height);
        this.g = this.svg.append('g').attr('transform', "translate(".concat(width / 2, ", ").concat(height / 2, ")"));
        this.arc = d3.arc().innerRadius(size / 2 * 0.8).outerRadius(size / 2);
        this.arcs = [];
        var currentAngle = 0;
        arcValues.forEach(function (value, index) {
          _this3.arcs.push(_this3.g.append('path').datum({
            startAngle: currentAngle,
            endAngle: value + currentAngle
          }).attr('d', _this3.arc).attr('class', "dashli-donut-chart-value dashli-donut-chart-value-".concat(index)).style('fill', values[index].color));

          currentAngle += value;
        });
        this.setState({
          size: size,
          width: width,
          height: height
        });
      }
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {
      var values = this.props.values;
      var size = this.state.size;

      if (values && size) {
        var valueHeight = Math.min(Math.floor(size * 0.5 / values.length * 0.8), Math.floor(size * 0.5 / 5 * 0.8));
        return _react.default.createElement("ul", null, values.map(function (value, index) {
          return (
            /* eslint-disable react/no-array-index-key */
            _react.default.createElement("li", {
              key: index
            }, _react.default.createElement("div", {
              className: "dashli-donut-chart-legend-color dashli-donut-chart-legend-color-".concat(index),
              style: {
                width: Math.floor(valueHeight * 0.9),
                height: Math.floor(valueHeight * 0.9)
              }
            }), _react.default.createElement("div", {
              className: "dashli-donut-chart-legend-text",
              style: {
                fontSize: Math.floor(valueHeight * 0.65),
                lineHeight: "".concat(valueHeight, "px")
              }
            }, value.label))
          );
        }));
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          size = _this$state.size,
          width = _this$state.width,
          height = _this$state.height;
      var legendWidth = size * 0.55;
      var legendHeight = size * 0.55;
      var legendStyle = {
        width: legendWidth,
        height: legendHeight,
        marginLeft: "".concat((width - legendWidth) / 2, "px"),
        marginTop: "".concat((height - legendHeight) / 2, "px")
      };
      return _react.default.createElement("div", {
        className: "dashli-donut-chart"
      }, _react.default.createElement("div", {
        className: "dashli-donut-chart-visual",
        ref: this.createDonutChart
      }), _react.default.createElement("div", {
        className: "dashli-donut-chart-legend",
        style: legendStyle
      }, this.renderLegend()));
    }
  }]);

  return DonutChart;
}(_react.PureComponent);

_defineProperty(DonutChart, "propTypes", {
  values: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    color: _propTypes.default.string,
    value: _propTypes.default.number
  }))
});

_defineProperty(DonutChart, "defaultProps", {
  values: undefined
});

var _default = DonutChart;
exports.default = _default;