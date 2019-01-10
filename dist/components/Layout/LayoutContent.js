"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

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

var LayoutContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LayoutContent, _PureComponent);

  function LayoutContent() {
    var _this;

    _classCallCheck(this, LayoutContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutContent).call(this));
    _this.updateVisibility = _this.updateVisibility.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    window.addEventListener('resize', _this.updateVisibility);
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(LayoutContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateVisibility();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateVisibility);
    }
  }, {
    key: "updateVisibility",
    value: function updateVisibility() {
      var _this$props = this.props,
          layouts = _this$props.layouts,
          target = _this$props.target;
      var layout = layouts ? Object.keys(layouts).find(function (key) {
        return window.innerWidth >= layouts[key];
      }) : undefined;
      var visible = target && target.split(',').map(function (t) {
        return t.trim();
      }).find(function (t) {
        return t === layout;
      });
      this.setState({
        visible: visible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var visible = this.state.visible;
      return visible ? children : null;
    }
  }]);

  return LayoutContent;
}(_react.PureComponent);

_defineProperty(LayoutContent, "propTypes", {
  /* eslint-disable react/forbid-prop-types */
  layouts: _propTypes.default.object,
  target: _propTypes.default.string,
  children: _propTypes.default.node
});

_defineProperty(LayoutContent, "defaultProps", {
  layouts: undefined,
  target: undefined,
  children: undefined
});

var _default = LayoutContent;
exports.default = _default;