"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _timeagoReact = _interopRequireDefault(require("timeago-react"));

var _DashboardContext = _interopRequireDefault(require("../Dashboard/DashboardContext"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

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

var WidgetContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(WidgetContent, _PureComponent);

  function WidgetContent() {
    var _this;

    _classCallCheck(this, WidgetContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WidgetContent).call(this));
    _this.handleContentRef = _this.handleContentRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScreenResizing = _this.handleScreenResizing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScreenResized = _this.handleScreenResized.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    window.addEventListener('resize', _this.handleScreenResizing);
    _this.state = {
      initialized: false,
      resizing: false
    };
    return _this;
  }

  _createClass(WidgetContent, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleScreenResizing);
    }
  }, {
    key: "handleScreenResized",
    value: function handleScreenResized() {
      this.setState({
        resizing: false
      });
    }
  }, {
    key: "handleScreenResizing",
    value: function handleScreenResizing() {
      this.setState({
        resizing: true
      });
      clearTimeout(this.screenResizeTimeout);
      this.screenResizeTimeout = setTimeout(this.handleScreenResized, 500);
    }
  }, {
    key: "handleContentRef",
    value: function handleContentRef(element) {
      var _this2 = this;

      // FIXME: hack to fix resizing problems
      if (element) {
        setTimeout(function () {
          _this2.setState({
            initialized: true
          });
        }, 10);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          tooltip = _this$props.tooltip,
          component = _this$props.component,
          updated = _this$props.updated,
          weight = _this$props.weight;
      var _this$state = this.state,
          initialized = _this$state.initialized,
          resizing = _this$state.resizing;
      return _react.default.createElement(_DashboardContext.default.Consumer, null, function () {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var locale = context.locale;
        /* eslint-disable react/destructuring-assignment */

        var status = resizing ? undefined : _this3.props.status;
        return _react.default.createElement("div", {
          className: "dashli-widget dashli-widget-".concat(status).concat(className ? " ".concat(className) : ''),
          style: {
            flex: weight
          }
        }, title ? _react.default.createElement("div", {
          className: "dashli-widget-title"
        }, title) : undefined, _react.default.createElement("div", {
          className: "dashli-widget-content",
          ref: _this3.handleContentRef
        }, component && status && initialized ? _react.default.createElement(component, _this3.props) : undefined), updated && status ? _react.default.createElement("div", {
          className: "dashli-widget-updated"
        }, _react.default.createElement(_timeagoReact.default, {
          datetime: updated,
          locale: locale
        })) : undefined, tooltip ? _react.default.createElement("div", {
          className: "dashli-widget-tooltip"
        }, _react.default.createElement(_Tooltip.default, null, tooltip)) : undefined);
      });
    }
  }]);

  return WidgetContent;
}(_react.PureComponent);

_defineProperty(WidgetContent, "propTypes", {
  status: _propTypes.default.string,
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  tooltip: _propTypes.default.node,
  component: _propTypes.default.func,
  updated: _propTypes.default.instanceOf(Date),
  weight: _propTypes.default.number
});

_defineProperty(WidgetContent, "defaultProps", {
  status: undefined,
  title: undefined,
  className: undefined,
  tooltip: undefined,
  updated: undefined,
  component: undefined,
  weight: 1
});

var _default = WidgetContent;
exports.default = _default;