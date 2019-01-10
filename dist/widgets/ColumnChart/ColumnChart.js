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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColumnChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ColumnChart, _PureComponent);

  function ColumnChart() {
    var _this;

    _classCallCheck(this, ColumnChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnChart).call(this));
    _this.handleContainer = _this.handleContainer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      height: undefined,
      width: undefined
    };
    return _this;
  }

  _createClass(ColumnChart, [{
    key: "handleContainer",
    value: function handleContainer(element) {
      /* istanbul ignore next */
      if (element) {
        this.setState({
          height: element.offsetHeight,
          width: element.offsetWidth
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var values = this.props.values;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var total = values.reduce(function (count, value) {
        return count + value.value;
      }, 0);
      var max = values.reduce(function (current, value) {
        return Math.max(current, value.value);
      }, 0);
      var factor = 1 / (max / total);
      var itemWidth = width / values.length * 0.9;
      return _react.default.createElement("div", {
        className: "dashli-column-chart",
        ref: this.handleContainer
      }, width ? values.map(function (value, index) {
        return _react.default.createElement("div", {
          /* eslint-disable react/no-array-index-key */
          key: index,
          className: "dashli-column-chart-item dashli-column-chart-item-".concat(index),
          style: {
            width: itemWidth
          }
        }, _react.default.createElement("div", {
          className: "dashli-column-chart-item-value"
        }, value.value), _react.default.createElement("div", {
          className: "dashli-column-chart-item-visual dashli-column-chart-item-visual-".concat(value.status ? value.status : 'neutral'),
          style: {
            height: value.value / total * factor * height * 0.7,
            width: itemWidth
          }
        }), _react.default.createElement("div", {
          className: "dashli-column-chart-item-label",
          style: {
            width: itemWidth
          }
        }, value.label));
      }) : undefined);
    }
  }]);

  return ColumnChart;
}(_react.PureComponent);

_defineProperty(ColumnChart, "propTypes", {
  values: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    status: _propTypes.default.string,
    value: _propTypes.default.number
  }))
});

_defineProperty(ColumnChart, "defaultProps", {
  values: []
});

var _default = ColumnChart;
exports.default = _default;