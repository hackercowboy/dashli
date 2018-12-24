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

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this));
    _this.toggleTooltip = _this.toggleTooltip.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleButton = _this.handleButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScrollAndResize = _this.handleScrollAndResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updatePosition = _this.updatePosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    document.addEventListener('mousedown', _this.handleMouseDown);
    window.addEventListener('scroll', _this.handleScrollAndResize);
    window.addEventListener('resize', _this.handleScrollAndResize);
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleScrollAndResize);
      window.removeEventListener('scroll', this.handleScrollAndResize);
      document.removeEventListener('mousedown', this.handleMouseDown);
    }
  }, {
    key: "toggleTooltip",
    value: function toggleTooltip(e) {
      var visible = this.state.visible;
      e.stopPropagation();

      if (visible) {
        this.setState({
          visible: false
        });
      } else {
        this.updatePosition();
      }
    }
  }, {
    key: "handleButton",
    value: function handleButton(button) {
      this.button = button;
    }
  }, {
    key: "handleContent",
    value: function handleContent(content) {
      this.content = content;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var visible = this.state.visible;

      if (visible && e.target !== this.button) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "handleScrollAndResize",
    value: function handleScrollAndResize() {
      var visible = this.state.visible;

      if (visible) {
        this.updatePosition();
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (this.button) {
        var top = this.button.getBoundingClientRect().top + 35;
        var width = Math.min(window.innerWidth, 375) - 60;
        var left = window.innerWidth < 376 ? 15 : Math.max(15, this.button.getBoundingClientRect().left - width);
        this.setState({
          top: top,
          width: width,
          left: left,
          visible: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          visible = _this$state.visible,
          top = _this$state.top,
          left = _this$state.left,
          width = _this$state.width;
      return _react.default.createElement("div", {
        className: "dashli-tooltip"
      }, _react.default.createElement("button", {
        type: "button",
        onClick: this.toggleTooltip,
        ref: this.handleButton
      }, "i"), visible ? _react.default.createElement("div", {
        className: "dashli-tooltip-content",
        style: {
          top: top,
          left: left,
          width: width
        }
      }, children) : null, visible ? _react.default.createElement("div", {
        className: "dashli-tooltip-arrow"
      }) : null);
    }
  }]);

  return Tooltip;
}(_react.PureComponent);

_defineProperty(Tooltip, "propTypes", {
  children: _propTypes.default.node
});

_defineProperty(Tooltip, "defaultProps", {
  children: undefined
});

var _default = Tooltip;
exports.default = _default;