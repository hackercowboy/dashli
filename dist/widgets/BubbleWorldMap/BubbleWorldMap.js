"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

var _miller = _interopRequireDefault(require("projections/miller"));

var _pointInPolygon = _interopRequireDefault(require("point-in-polygon"));

var _worldMapShapes = _interopRequireDefault(require("./worldMapShapes"));

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

var statuses = ['danger', 'warning', 'info', 'success', 'neutral'];

var BubbleWorldMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BubbleWorldMap, _PureComponent);

  function BubbleWorldMap() {
    var _this;

    _classCallCheck(this, BubbleWorldMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BubbleWorldMap).call(this));
    _this.createBubbleWorldMap = _this.createBubbleWorldMap.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BubbleWorldMap, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var values = this.props.values;
      var worldMapValues = this.convertValues(values, this.width, this.dotShift);
      this.svg.selectAll('.dashli-bubble-world-map-active-dot').remove();
      var g = this.svg.append('g').attr('transform', 'translate(0, 0)');
      g.selectAll('circle').data(worldMapValues).enter().append('circle').attr('cx', function (d) {
        return d.x;
      }).attr('cy', function (d) {
        return d.y;
      }).attr('r', this.dotDiameter / 2).attr('class', function (d) {
        return "dashli-bubble-world-map-active-dot dashli-bubble-world-map-active-dot-".concat(d.status);
      });
      this.svg.selectAll('.dashli-bubble-world-map-active-circle').remove();
      g = this.svg.append('g').attr('transform', 'translate(0, 0)');
      g.selectAll('circle').data(worldMapValues).enter().append('circle').attr('cx', function (d) {
        return d.x;
      }).attr('cy', function (d) {
        return d.y;
      }).attr('r', function (d) {
        return Math.max(_this2.dotDiameter, d.percent * (_this2.width / 10));
      }).attr('class', function (d) {
        return "dashli-bubble-world-map-active-circle dashli-bubble-world-map-active-circle-".concat(d.status);
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
    key: "convertShapes",
    value: function convertShapes() {
      var _this3 = this;

      var mapData = [];

      var pixelShapes = _worldMapShapes.default.map(function (shape) {
        return shape.map(function (coordinate) {
          var _projection = (0, _miller.default)(coordinate),
              x = _projection.x,
              y = _projection.y;

          return [x * _this3.width, y * _this3.width];
        });
      });

      var _loop = function _loop(x) {
        var _loop2 = function _loop2(y) {
          var point = {
            x: x + _this3.dotShift / 2,
            y: y + _this3.dotShift / 2
          };

          if (pixelShapes.find(function (shape) {
            return (0, _pointInPolygon.default)([x, y], shape);
          })) {
            mapData.push(point);
          }
        };

        for (var y = 0; y < _this3.width * 0.5; y += _this3.dotShift) {
          _loop2(y);
        }
      };

      for (var x = 0; x < this.width; x += this.dotShift) {
        _loop(x);
      }

      return mapData;
    }
  }, {
    key: "convertValues",
    value: function convertValues(values) {
      var _this4 = this;

      var totalCount = 0;
      return values.map(function (item) {
        var _projection2 = (0, _miller.default)(item),
            x = _projection2.x,
            y = _projection2.y;

        var cx = x * _this4.width;
        var cy = y * _this4.width;
        cx = cx - cx % _this4.dotShift + _this4.dotShift / 2;
        cy = cy - cy % _this4.dotShift + _this4.dotShift / 2;
        totalCount += item.count;
        return {
          x: cx,
          y: cy,
          count: item.count,
          status: item.status
        };
      }).reduce(function (result, item) {
        var existing = result.find(function (i) {
          return i.x === item.x && i.y === item.y;
        });

        if (existing) {
          var itemStatus = item.status || 'neutral';
          var status = statuses.indexOf(existing.status) > statuses.indexOf(itemStatus) ? itemStatus : existing.status;
          result.push(_objectSpread({}, existing, {
            count: existing.count + item.count,
            status: status
          }));
        } else {
          var _status = item.status || 'neutral';

          result.push(_objectSpread({}, item, {
            status: _status
          }));
        }

        return result;
      }, []).map(function (item) {
        return _objectSpread({}, item, {
          percent: item.count / totalCount
        });
      });
    }
  }, {
    key: "createBubbleWorldMap",
    value: function createBubbleWorldMap(element) {
      var _this5 = this;

      var values = this.props.values;

      if (element) {
        var ratio = Math.min(element.offsetWidth / 1.9, element.offsetHeight);
        this.dotDiameter = Math.max(Math.floor(Math.sqrt(element.offsetWidth) / 5), 2);
        this.dotDiameter = Math.max(Math.floor(ratio / 100), 3);
        var dotSpace = Math.max(Math.floor(this.dotDiameter / 2.5), 1);
        this.dotShift = this.dotDiameter + dotSpace;
        this.width = Math.ceil(1.9 * ratio / this.dotShift) * this.dotShift;
        var height = Math.ceil(ratio / this.dotShift) * this.dotShift;
        var worldMapPoints = this.convertShapes(this.width, this.dotShift);
        var worldMapValues = this.convertValues(values, this.width, this.dotShift);
        this.container = d3.select(element);
        this.svg = this.container.append('svg');
        this.svg.attr('width', this.width);
        this.svg.attr('height', height);
        var g = this.svg.append('g').attr('transform', 'translate(0, 0)');
        g.selectAll('circle').data(worldMapPoints).enter().append('circle').attr('cx',
        /* istanbul ignore next */
        function (d) {
          return d.x;
        }).attr('cy',
        /* istanbul ignore next */
        function (d) {
          return d.y;
        }).attr('r', this.dotDiameter / 2).attr('class', 'dashli-bubble-world-map-dot');
        g = this.svg.append('g').attr('transform', 'translate(0, 0)');
        g.selectAll('circle').data(worldMapValues).enter().append('circle').attr('cx', function (d) {
          return d.x;
        }).attr('cy', function (d) {
          return d.y;
        }).attr('r', this.dotDiameter / 2).attr('class', function (d) {
          return "dashli-bubble-world-map-active-dot dashli-bubble-world-map-active-dot-".concat(d.status);
        });
        g = this.svg.append('g').attr('transform', 'translate(0, 0)');
        g.selectAll('circle').data(worldMapValues).enter().append('circle').attr('cx', function (d) {
          return d.x;
        }).attr('cy', function (d) {
          return d.y;
        }).attr('r', function (d) {
          return Math.max(_this5.dotDiameter, d.percent * (_this5.width / 10));
        }).attr('class', function (d) {
          return "dashli-bubble-world-map-active-circle dashli-bubble-world-map-active-circle-".concat(d.status);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "dashli-bubble-world-map"
      }, _react.default.createElement("div", {
        className: "dashli-bubble-world-map-visual",
        ref: this.createBubbleWorldMap
      }));
    }
  }]);

  return BubbleWorldMap;
}(_react.PureComponent);

_defineProperty(BubbleWorldMap, "propTypes", {
  values: _propTypes.default.arrayOf(_propTypes.default.shape({
    lat: _propTypes.default.number,
    lon: _propTypes.default.number,
    count: _propTypes.default.number,
    status: _propTypes.default.string
  }))
});

_defineProperty(BubbleWorldMap, "defaultProps", {
  values: []
});

var _default = BubbleWorldMap;
exports.default = _default;