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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
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

var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    _classCallCheck(this, Calendar);

    return _super.apply(this, arguments);
  }

  _createClass(Calendar, [{
    key: "setElements",
    value: function setElements() {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth() + 1;
      var template = document.createElement('template');
      var fragment = new DocumentFragment();
      template.innerHTML = "\n            <div class=\"clickedDate\">\n                <span>\n                    <span class=\"selected-year\">".concat(new Date().getFullYear(), "</span>\n                    -\n                    <span class=\"selected-month\">").concat(this.setTwoDigits(new Date().getMonth() + 1), "</span>\n                    -\n                    <span class=\"selected-day\">").concat(this.setTwoDigits(new Date().getDate()), "</span>\n                </span>\n                <button class=\"calendar-btn\">\uAE30\uAC04</button>\n            </div>                \n            <div class=\"calendar\">\n            </div>\n        ");
      fragment.appendChild(template.content);
      this.$element.appendChild(fragment);
    }
  }, {
    key: "setTemplate",
    value: function setTemplate() {
      var firstDay = new Date(this.year, this.month - 1, 1, 0, 0, 0).getDay();
      var lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
      var weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
      return "\n        <div class=\"yearMonth\">\n              <div class=\"year\">".concat(this.year, "</div>\n              <div class=\"month\">").concat(this.month, "</div>\n              <div class=\"calendar-button-group\">\n                <button class=\"prev\">Prev</button>\n                <button class=\"next\">Next</button>\n              </div>\n            </div>\n            <div class=\"weekday\">\n              <div>\uC77C</div>\n              <div>\uC6D4</div>\n              <div>\uD654</div>\n              <div>\uC218</div>\n              <div>\uBAA9</div>\n              <div>\uAE08</div>\n              <div>\uD1A0</div>\n            </div>\n            ").concat(_toConsumableArray(Array(weekSeq)).map(function (_, i) {
        return "<div class=\"week".concat(i, "\">\n                    ").concat(_toConsumableArray(Array(7)).map(function (_, j) {
          var date = i * 7 + j - firstDay + 1;
          if (date < 1 || date > lastDate) return "<div class=\"day\"></div>";
          return "<div class=\"day\">".concat(date, "</div>");
        }).join(''), "\n                </div>");
      }).join(''));
    }
  }, {
    key: "render",
    value: function render() {
      this.$element.querySelector('.calendar').innerHTML = this.setTemplate();
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this$$element,
          _this = this;

      (_this$$element = this.$element) === null || _this$$element === void 0 ? void 0 : _this$$element.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.classList.contains('prev')) {
          --_this.month;

          if (_this.month === 0) {
            _this.month = 12;
            --_this.year;
          }

          _this.render();
        }

        if (target.classList.contains('next')) {
          ++_this.month;

          if (_this.month === 13) {
            _this.month = 1;
            ++_this.year;
          }

          _this.render();
        }

        if (target.classList.contains('day')) {
          var formInput = document.querySelector('.form-input');
          console.log('hi', formInput);
          var day = target.textContent;
          formInput.value = "".concat(_this.year, "-").concat(_this.month < 10 ? "0".concat(_this.month) : _this.month, "-").concat(parseInt(day, 10) < 10 ? "0".concat(day) : day);
          _this.$element.querySelector('.selected-day').textContent = _this.setTwoDigits(parseInt(day, 10)).toString();
        }

        if (target.classList.contains('calendar-btn')) {
          var _this$$element$queryS;

          (_this$$element$queryS = _this.$element.querySelector('.calendar')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.classList.toggle('show');
        }
      });
    }
  }, {
    key: "setTwoDigits",
    value: function setTwoDigits(value) {
      return value < 10 ? "0".concat(value) : value;
    }
  }]);

  return Calendar;
}(_Component2["default"]); // new Calendar(document.querySelector('.form-calendar'));


exports["default"] = Calendar;
//# sourceMappingURL=Calendar2.js.map