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

var IconChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(IconChart, _PureComponent);

  function IconChart() {
    var _this;

    _classCallCheck(this, IconChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IconChart).call(this));
    _this.handleContainer = _this.handleContainer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      height: undefined,
      width: undefined
    };
    return _this;
  }

  _createClass(IconChart, [{
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
    key: "renderItem",
    value: function renderItem(value, index, itemWidth, totalHeight, factor, total) {
      return _react.default.createElement("div", {
        /* eslint-disable react/no-array-index-key */
        key: index,
        className: "dashli-icon-chart-item dashli-icon-chart-item-".concat(index),
        style: {
          width: itemWidth
        }
      }, _react.default.createElement("div", {
        className: "dashli-icon-chart-item-visual dashli-icon-chart-item-visual-".concat(value.status ? value.status : 'neutral'),
        style: {
          width: itemWidth
        }
      }, _react.default.createElement("div", {
        className: "dashli-icon-chart-item-value"
      }, value.value), _react.default.createElement("div", {
        className: "dashli-icon-chart-item-icon"
      }, _react.default.createElement("i", {
        className: value.icon,
        style: {
          fontSize: Math.max(15, value.value / total * factor * totalHeight * 0.6)
        }
      }))), _react.default.createElement("div", {
        className: "dashli-icon-chart-item-label",
        style: {
          width: itemWidth
        }
      }, value.label));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
        className: "dashli-icon-chart",
        ref: this.handleContainer
      }, width ? values.map(function (value, index) {
        return _this2.renderItem(value, index, itemWidth, height, factor, total);
      }) : undefined);
    }
  }]);

  return IconChart;
}(_react.PureComponent);

_defineProperty(IconChart, "propTypes", {
  values: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    status: _propTypes.default.string,
    value: _propTypes.default.number
  }))
});

_defineProperty(IconChart, "defaultProps", {
  values: []
});

var _default = IconChart;
exports.default = _default;