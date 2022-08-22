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

var Time = /*#__PURE__*/function (_Component) {
  _inherits(Time, _Component);

  var _super = _createSuper(Time);

  function Time() {
    _classCallCheck(this, Time);

    return _super.apply(this, arguments);
  }

  _createClass(Time, [{
    key: "setElements",
    value: function setElements() {
      var template = document.createElement('template');
      var fragment = new DocumentFragment();
      template.innerHTML = "\n        <p class=\"selected-time\"><span>".concat(this.setTwoDigits(new Date().getHours()), "</span> : <span>").concat(this.setTwoDigits(new Date().getMinutes()), "</span></p>\n        <div class=\"time-wrapper\">\n            <div class=\"hour-box\">\n                <button class=\"hour-selected\">").concat(this.setTwoDigits(new Date().getHours()), "</button>\n                <div class=\"hour\">\n                </div>\n            </div>\n            <span>:</span>\n            <div class=\"minute-box\">\n                <button class=\"minute-selected\">").concat(this.setTwoDigits(new Date().getMinutes()), "</button>\n                <div class=\"minute\">\n                </div>\n            </div>\n        </div>\n        <button class=\"toggle-button\">\uC2DC\uAC04</button>\n        ");
      fragment.appendChild(template.content);
      this.$element.appendChild(fragment);
      var timeWrapper = this.$element.querySelector('.time-wrapper');
      var _this$$element$datase = this.$element.dataset,
          start = _this$$element$datase.start,
          end = _this$$element$datase.end,
          min = _this$$element$datase.min,
          hour = _this$$element$datase.hour;

      var _start$split$map = start.split(':').map(function (el) {
        return parseInt(el, 10);
      }),
          _start$split$map2 = _slicedToArray(_start$split$map, 2),
          startHour = _start$split$map2[0],
          startMin = _start$split$map2[1];

      var _end$split$map = end.split(':').map(function (el) {
        return parseInt(el, 10);
      }),
          _end$split$map2 = _slicedToArray(_end$split$map, 2),
          endHour = _end$split$map2[0],
          endMin = _end$split$map2[1];

      var hourDiv = document.createElement('div');

      for (var i = startHour; i <= endHour; i += parseInt(hour, 10)) {
        var _template = document.createElement('template');

        _template.innerHTML = "<div>".concat(this.setTwoDigits(i), "</div>");
        hourDiv.appendChild(_template.content);
      }

      timeWrapper.querySelector('.hour').innerHTML = hourDiv.innerHTML;
      var minDiv = document.createElement('div');

      for (var _i2 = 0; _i2 < 60; _i2 += parseInt(min, 10)) {
        var _template2 = document.createElement('template');

        _template2.innerHTML = "<div>".concat(this.setTwoDigits(_i2), "</div>");
        minDiv.appendChild(_template2.content);
      }

      timeWrapper.querySelector('.minute').innerHTML = minDiv.innerHTML;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this$$element$queryS;

      var timeWrapper = this.$element.querySelector('.time-wrapper');
      var selectedTime = this.$element.querySelector('.selected-time');
      var hourSelector = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.hour-selected');
      var minuteSelector = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.minute-selected');
      var hourBox = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.hour');
      var minuteBox = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.minute');
      (_this$$element$queryS = this.$element.querySelector('.toggle-button')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.addEventListener('click', function () {
        timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.classList.toggle('show');
        selectedTime === null || selectedTime === void 0 ? void 0 : selectedTime.classList.toggle('hide');
        hourBox === null || hourBox === void 0 ? void 0 : hourBox.classList.add('show');
        minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.classList.add('show');
      });
      hourBox === null || hourBox === void 0 ? void 0 : hourBox.addEventListener('click', function (_ref) {
        var target = _ref.target;
        target.classList.add('selected');
        hourSelector.textContent = target.textContent;
        hourBox === null || hourBox === void 0 ? void 0 : hourBox.classList.remove('show');
      });
      minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.addEventListener('click', function (_ref2) {
        var target = _ref2.target;
        target.classList.add('selected');
        minuteSelector.textContent = target.textContent;
        minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.classList.remove('show');
      });
    }
  }, {
    key: "setTwoDigits",
    value: function setTwoDigits(num) {
      return num < 10 ? '0' + num : num;
    }
  }]);

  return Time;
}(_Component2["default"]);

exports["default"] = Time;
//# sourceMappingURL=Time.js.map