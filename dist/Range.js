"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("./Component.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var Range = /*#__PURE__*/function (_Component) {
  _inherits(Range, _Component);

  var _super = _createSuper(Range);

  function Range() {
    _classCallCheck(this, Range);

    return _super.apply(this, arguments);
  }

  _createClass(Range, [{
    key: "setElements",
    value: function setElements() {
      var _this$$element$datase = this.$element.dataset,
          strMin = _this$$element$datase.min,
          strMax = _this$$element$datase.max,
          strMinVal = _this$$element$datase.minValue,
          strMaxVal = _this$$element$datase.maxValue,
          strStep = _this$$element$datase.step;

      var _map = [strMin, strMax, strMinVal, strMaxVal, strStep].map(function (val) {
        return parseInt(val, 10);
      }),
          _map2 = _slicedToArray(_map, 5),
          min = _map2[0],
          max = _map2[1],
          minValue = _map2[2],
          maxValue = _map2[3],
          step = _map2[4];

      this.$element.innerHTML = "\n            <input type=\"range\" class=\"input-left\" name=\"max\" min=".concat(min, " max=").concat(max, " value=").concat(minValue, " step=").concat(step, ">\n            <input type=\"range\" class=\"input-right\" name=\"max\" min=").concat(min, " max=").concat(max, " value=").concat(maxValue, " step=").concat(step, ">\n\n            <div class=\"slider\">\n                <div class=\"track\"></div>\n                <div class=\"range\"></div>\n                <div class=\"thumb left\"><span class=\"thumb-min\"></span></div>\n                <div class=\"thumb right\"><span class=\"thumb-max\"></span></div>\n            </div>");

      var _map3 = [this.$element, this.$element.querySelector('.thumb')].map(function (el) {
        return el.getBoundingClientRect().width;
      }),
          _map4 = _slicedToArray(_map3, 2),
          rangeWidth = _map4[0],
          thumbWidth = _map4[1];

      var trackWidth = rangeWidth - thumbWidth;
      var totalSize = (max - min) / step;

      if (min >= 0 && max && step && minValue) {
        for (var i = 1; i < totalSize; i += 1) {
          var _this$$element$queryS;

          var span = document.createElement('span');
          span.classList.add('step');
          span.style.left = "".concat(trackWidth * ((max - min) / step * i) / 100, "px");
          (_this$$element$queryS = this.$element.querySelector('.slider')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.appendChild(span);
        }
      }

      var slider = this.$element.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
      slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
      thumbLeft.style.left = "".concat(trackWidth * ((max - min) / step * (minValue / step)) / 100, "px");
      range.style.left = "".concat(trackWidth * ((max - min) / step * (minValue / step)) / 100, "px");
      range.style.right = "".concat(trackWidth * ((max - min) / step * ((max - maxValue) / step)) / 100, "px");
      thumbRight.style.left = "".concat(trackWidth * ((max - min) / step * (maxValue / step)) / 100, "px");
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      var _map5 = [this.$element, this.$element.querySelector('.thumb')].map(function (el) {
        return el.getBoundingClientRect().width;
      }),
          _map6 = _slicedToArray(_map5, 2),
          rangeWidth = _map6[0],
          thumbWidth = _map6[1];

      var trackWidth = rangeWidth - thumbWidth;
      var slider = this.$element.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      var inputLeft = this.$element.querySelector('.input-left');
      var inputRight = this.$element.querySelector('.input-right');
      inputLeft === null || inputLeft === void 0 ? void 0 : inputLeft.addEventListener('input', function () {
        var _ref = [parseInt(inputLeft.min), parseInt(inputLeft.max), parseInt(inputLeft.step)],
            min = _ref[0],
            max = _ref[1],
            step = _ref[2];
        inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();
        var inputValue = parseInt(inputLeft.value, 10);
        thumbLeft.style.left = "".concat(trackWidth * ((max - min) / step * (inputValue / step)) / 100, "px");
        range.style.left = "".concat(trackWidth * ((max - min) / step * (inputValue / step)) / 100, "px");
        slider.querySelector('.thumb-min').textContent = _this.$element.querySelector(".input-left").value;
      });
      inputRight === null || inputRight === void 0 ? void 0 : inputRight.addEventListener('input', function () {
        var _ref2 = [parseInt(inputRight.min), parseInt(inputRight.max), parseInt(inputRight.step)],
            min = _ref2[0],
            max = _ref2[1],
            step = _ref2[2];
        inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();
        var inputValue = parseInt(inputRight.value, 10);
        thumbRight.style.left = "".concat(trackWidth * ((max - min) / step * (inputValue / step)) / 100, "px");
        range.style.right = "".concat(trackWidth - trackWidth * ((max - min) / step * (inputValue / step)) / 100, "px");
        slider.querySelector('.thumb-max').textContent = _this.$element.querySelector(".input-right").value;
      });
    }
  }, {
    key: "setThumbLeft",
    value: function setThumbLeft() {
      var _map7 = [this.$element, this.$element.querySelector('.thumb')].map(function (el) {
        return el.getBoundingClientRect().width;
      }),
          _map8 = _slicedToArray(_map7, 2),
          rangeWidth = _map8[0],
          thumbWidth = _map8[1];

      var trackWidth = rangeWidth - thumbWidth;
      return "".concat(trackWidth * ((max - min) / step * (inputValue / step)) / 100, "px");
    }
  }, {
    key: "setThumbRight",
    value: function setThumbRight() {}
  }]);

  return Range;
}(_Component2["default"]);

exports["default"] = Range;
//# sourceMappingURL=Range.js.map