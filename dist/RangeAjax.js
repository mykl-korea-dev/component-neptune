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

var _Component2 = _interopRequireDefault(require("../../../basic/Component.js"));

var _utils = require("../../../basic/utils.js");

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

var RangeAjax = /*#__PURE__*/function (_Component) {
  _inherits(RangeAjax, _Component);

  var _super = _createSuper(RangeAjax);

  function RangeAjax() {
    _classCallCheck(this, RangeAjax);

    return _super.apply(this, arguments);
  }

  _createClass(RangeAjax, [{
    key: "setElements",
    value: function setElements() {
      var _this$$data = this.$data,
          strMin = _this$$data.min,
          strMax = _this$$data.max,
          strMinVal = _this$$data.minValue,
          strMaxVal = _this$$data.maxValue,
          strStep = _this$$data.step;

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
      var totalSize = (max - min) / step;

      if (min >= 0 && max && step && minValue) {
        for (var i = 1; i < totalSize; i += 1) {
          var _this$$element$queryS;

          var span = document.createElement('span');
          span.classList.add('step');
          console.log(max, min, step, (max - min) / step * i);
          span.style.left = "".concat((max - min) / step * i, "%");
          (_this$$element$queryS = this.$element.querySelector('.slider')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.appendChild(span);
        }
      }

      var slider = this.$element.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
      slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
      thumbLeft.style.left = "".concat((max - min) / step * (minValue / step), "%");
      range.style.left = "".concat((max - min) / step * (minValue / step), "%");
      range.style.right = "".concat((max - min) / step * ((max - maxValue) / step), "%");
      thumbRight.style.left = "".concat((max - min) / step * (maxValue / step), "%"); // range.style.right = `${parseInt(minValue, 10) -3}%`;
      // thumbRight.style.right = `${parseInt(minValue, 10)  -3}%`;
      // range.style.right = `${parseInt(max, 10) - parseInt(maxValue, 10)}%`;
      // thumbRight.style.right = `${parseInt(max, 10) - parseInt(maxValue, 10)}%`;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      var slider = this.$element.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      var inputLeft = this.$element.querySelector('.input-left');
      var inputRight = this.$element.querySelector('.input-right');
      inputLeft === null || inputLeft === void 0 ? void 0 : inputLeft.addEventListener('input', function () {
        var _ref = [parseInt(inputLeft.min), parseInt(inputLeft.max)],
            min = _ref[0],
            max = _ref[1];
        inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();
        var inputValue = parseInt(inputLeft.value, 10);
        var percent = (inputValue - min) / (max - min) * 100;
        thumbLeft.style.left = "".concat(percent, "%");
        range.style.left = "".concat(percent, "%");
        slider.querySelector('.thumb-min').textContent = _this.$element.querySelector(".input-left").value;
      });
      inputRight === null || inputRight === void 0 ? void 0 : inputRight.addEventListener('input', function () {
        var _ref2 = [parseInt(inputRight.min), parseInt(inputRight.max)],
            min = _ref2[0],
            max = _ref2[1];
        inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();
        var inputValue = parseInt(inputRight.value, 10);
        var percent = (inputValue - min) / (max - min) * 100;
        thumbRight.style.left = "".concat(percent, "%");
        range.style.right = "".concat(100 - percent, "%");
        slider.querySelector('.thumb-max').textContent = _this.$element.querySelector(".input-right").value;
      });
    }
  }]);

  return RangeAjax;
}(_Component2["default"]);

exports["default"] = RangeAjax;
(0, _utils.getData)('http://localhost:3000/range', function (data) {
  return new RangeAjax(document.querySelector('.form-range-ajax'), data);
});
//# sourceMappingURL=RangeAjax.js.map