"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _DashboardContext = _interopRequireDefault(require("./DashboardContext"));

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

var Dashboard =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dashboard, _PureComponent);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this));
    _this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenResizing: false
    };
    _this.handleScreenResizing = _this.handleScreenResizing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScreenResized = _this.handleScreenResized.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      window.addEventListener('resize', this.handleScreenResizing);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleScreenResizing);
    }
  }, {
    key: "handleScreenResized",
    value: function handleScreenResized() {
      this.setState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        screenResizing: false
      });
    }
  }, {
    key: "handleScreenResizing",
    value: function handleScreenResizing() {
      this.setState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        screenResizing: true
      });
      clearTimeout(this.screenResizeTimeout);
      this.screenResizeTimeout = setTimeout(this.handleScreenResized, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          locale = _this$props.locale,
          layouts = _this$props.layouts;
      var _this$state = this.state,
          screenWidth = _this$state.screenWidth,
          screenHeight = _this$state.screenHeight,
          screenResizing = _this$state.screenResizing;
      var context = {
        locale: locale,
        layouts: layouts,
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        screenResizing: screenResizing
      };
      return _react.default.createElement("div", {
        className: "dashli-dashboard dashli-theme-".concat(theme)
      }, _react.default.createElement(_DashboardContext.default.Provider, {
        value: context
      }, children));
    }
  }]);

  return Dashboard;
}(_react.PureComponent);

_defineProperty(Dashboard, "propTypes", {
  theme: _propTypes.default.string,
  locale: _propTypes.default.string,
  children: _propTypes.default.node,

  /* eslint-disable react/forbid-prop-types */
  layouts: _propTypes.default.object
});

_defineProperty(Dashboard, "defaultProps", {
  theme: 'light',
  locale: 'en_GB',
  children: undefined,
  layouts: {
    tv: 1920,
    desktop: 1280,
    tablet: 1024,
    phone: 0
  }
});

var _default = Dashboard;
exports.default = _default;