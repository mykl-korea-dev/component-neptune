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

var SelectAjax = /*#__PURE__*/function (_Component) {
  _inherits(SelectAjax, _Component);

  var _super = _createSuper(SelectAjax);

  function SelectAjax() {
    _classCallCheck(this, SelectAjax);

    return _super.apply(this, arguments);
  }

  _createClass(SelectAjax, [{
    key: "setElements",
    value: function setElements() {
      var _this$select, _this$options;

      this.select = this.$element.querySelector('selectAjax');
      console.log(this.select, this.$data);
      this.select.innerHTML = "".concat(this.$data.map(function (el) {
        return "<option value=\"".concat(el.value, "\">").concat(el.text, "</option>");
      }).join(''));
      this.options = Array.from(this.$element.querySelectorAll('option'));
      var template = document.createElement('template');
      var fragment = new DocumentFragment();
      template.innerHTML = "\n            <div class=\"select-group\">\n                <div class=\"select-selected\">\n                    ".concat((_this$select = this.select) === null || _this$select === void 0 ? void 0 : _this$select.options[this.select.selectedIndex].textContent, "\n                </div>\n                <div class=\"select-items select-hide\">\n                    ").concat((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.map(function (el, i) {
        return i === 0 ? '' : "<div>".concat(el.textContent, "</div>");
      }).join(''), "\n                </div>\n            </div>\n            ");
      fragment.appendChild(template.content);
      this.$element.appendChild(fragment);
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      var selectedDiv = this.$element.querySelector('.selectAjax-selected');
      var selectDiv = this.$element.querySelector('.selectAjax-items');
      document.addEventListener('click', function (e) {
        return (0, _utils.closeAllSelect)(e.target);
      });
      selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.addEventListener('click', function () {
        selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('selectAjax-hide');
        selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('selectAjax-arrow-active');
      });
      selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.addEventListener('click', function (e) {
        var _this$$element$queryS;

        (_this$$element$queryS = _this.$element.querySelector('.same-as-selected')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.removeAttribute('class');
        var target = e.target;

        for (var i = 0; i < _this.options.length; i++) {
          var _this$select2;

          if (((_this$select2 = _this.select) === null || _this$select2 === void 0 ? void 0 : _this$select2.options[i].innerHTML) === (target === null || target === void 0 ? void 0 : target.textContent)) {
            _this.select.selectedIndex = i;
            selectedDiv.textContent = target.textContent;
            target.classList.add('same-as-selected');
            selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('selectAjax-hide');
            selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('selectAjax-arrow-active');
            break;
          }
        }
      });
    }
  }]);

  return SelectAjax;
}(_Component2["default"]);

exports["default"] = SelectAjax;
//# sourceMappingURL=SelectAjax.js.map