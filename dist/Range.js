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

var _Component2 = _interopRequireDefault(require("../../basic/Component.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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
      var _this$$element;

      var _this$$element$datase = this.$element.dataset,
          min = _this$$element$datase.min,
          max = _this$$element$datase.max,
          value = _this$$element$datase.value,
          step = _this$$element$datase.step;
      var template = document.createElement('template');
      var fragment = new DocumentFragment();
      template.innerHTML = "\n            <input type=\"range\" class=\"input-left\" name=\"max\" min=".concat(min, " max=").concat(max, " value=").concat(value, " step=").concat(step, ">\n            <input type=\"range\" class=\"input-right\" name=\"max\" min=").concat(min, " max=").concat(max, " value=").concat(parseInt(max, 10) - parseInt(value, 10), " step=").concat(step, ">\n\n            <div class=\"slider\">\n                <div class=\"track\"></div>\n                <div class=\"range\"></div>\n                <div class=\"thumb left\"></div>\n                <div class=\"thumb right\"></div>\n            </div>");
      fragment.appendChild(template.content);
      (_this$$element = this.$element) === null || _this$$element === void 0 ? void 0 : _this$$element.appendChild(fragment);

      if (min && max && step && value) {
        for (var i = parseInt(min, 10) + parseInt(step, 10); i < parseInt(max, 10); i += parseInt(step, 10)) {
          var _this$$element$queryS;

          var span = document.createElement('span');
          span.classList.add('step');
          span.style.left = "".concat(i, "%");
          (_this$$element$queryS = this.$element.querySelector('.slider')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.appendChild(span);
        }
      }

      var slider = document.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      thumbLeft.style.left = "".concat(value, "%");
      range.style.left = "".concat(value, "%");
      range.style.right = "".concat(parseInt(value, 10) - 3, "%");
      thumbRight.style.right = "".concat(parseInt(value, 10) - 3, "%");
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var slider = document.querySelector('.slider');
      var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
      var thumbLeft = slider.querySelector('.slider .thumb.left');
      var thumbRight = slider.querySelector('.thumb.right');
      var inputLeft = document.querySelector('.input-left');
      var inputRight = document.querySelector('.input-right');
      inputLeft === null || inputLeft === void 0 ? void 0 : inputLeft.addEventListener('input', function (e) {
        var _ref = [parseInt(inputLeft.min), parseInt(inputLeft.max)],
            min = _ref[0],
            max = _ref[1];
        inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();
        var inputValue = parseInt(inputLeft.value, 10);
        var percent = (inputValue - min) / (max - min) * 100;
        thumbLeft.style.left = "".concat(percent, "%");
        range.style.left = "".concat(percent, "%");
      });
      inputRight === null || inputRight === void 0 ? void 0 : inputRight.addEventListener('input', function (e) {
        var _ref2 = [parseInt(inputRight.min), parseInt(inputRight.max)],
            min = _ref2[0],
            max = _ref2[1];
        inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();
        var inputValue = parseInt(inputRight.value, 10);
        var percent = (inputValue - min) / (max - min) * 100;
        thumbRight.style.right = "".concat(100 - percent - 3, "%");
        range.style.right = "".concat(100 - percent - 2, "%");
      });
    }
  }]);

  return Range;
}(_Component2["default"]);

exports["default"] = Range;
//# sourceMappingURL=Range.js.map