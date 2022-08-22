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

var _utils = require("../../basic/utils.js");

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "select", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    return _this;
  }

  _createClass(Select, [{
    key: "setElements",
    value: function setElements() {
      var _this$select, _this$options;

      this.select = this.$element.querySelector('select');
      console.log(this.select, this.$data);
      this.select.innerHTML = "".concat(this.$data.map(function (el) {
        return "<option value=\"".concat(el.value, "\">").concat(el.text, "</option>");
      }).join(''));
      this.options = Array.from(this.$element.querySelectorAll('option'));
      var template = document.createElement('template');
      var fragment = new DocumentFragment();
      template.innerHTML = "\n            <div class=\"select-selected\">\n                ".concat((_this$select = this.select) === null || _this$select === void 0 ? void 0 : _this$select.options[this.select.selectedIndex].textContent, "\n            </div>\n            <div class=\"select-items select-hide\">\n                ").concat((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.map(function (el, i) {
        return i === 0 ? '' : "<div>".concat(el.textContent, "</div>");
      }).join(''), "\n            </div>\n            ");
      fragment.appendChild(template.content);
      this.$element.appendChild(fragment);
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;

      var selectedDiv = this.$element.querySelector('.select-selected');
      var selectDiv = this.$element.querySelector('.select-items');
      document.addEventListener('click', function (e) {
        return (0, _utils.closeAllSelect)(e.target);
      });
      selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.addEventListener('click', function () {
        selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('select-hide');
        selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('select-arrow-active');
      });
      selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.addEventListener('click', function (e) {
        var _this2$$element$query;

        (_this2$$element$query = _this2.$element.querySelector('.same-as-selected')) === null || _this2$$element$query === void 0 ? void 0 : _this2$$element$query.removeAttribute('class');
        var target = e.target;

        for (var i = 0; i < _this2.options.length; i++) {
          var _this2$select;

          if (((_this2$select = _this2.select) === null || _this2$select === void 0 ? void 0 : _this2$select.options[i].innerHTML) === (target === null || target === void 0 ? void 0 : target.textContent)) {
            _this2.select.selectedIndex = i;
            selectedDiv.textContent = target.textContent;
            target.classList.add('same-as-selected');
            selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('select-hide');
            selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('select-arrow-active');
            break;
          }
        }
      });
    }
  }]);

  return Select;
}(_Component2["default"]);

exports["default"] = Select;
//# sourceMappingURL=Select.js.map