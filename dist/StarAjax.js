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

var StarAjax = /*#__PURE__*/function (_Component) {
  _inherits(StarAjax, _Component);

  var _super = _createSuper(StarAjax);

  function StarAjax() {
    _classCallCheck(this, StarAjax);

    return _super.apply(this, arguments);
  }

  _createClass(StarAjax, [{
    key: "setElements",
    value: function setElements() {
      var _this$$data = this.$data,
          min = _this$$data.min,
          max = _this$$data.max,
          value = _this$$data.value;
      var starValue = Number(value);
      var starGroupEl = document.createElement('div');
      starGroupEl.classList.add('star-group');

      for (var i = parseInt(min, 10); i < parseInt(max, 10); i++) {
        var template = document.createElement('template'); // const fragment = new DocumentFragment();

        template.innerHTML = "\n                ".concat(starValue >= 1 ? "<div class=\"star-item star-fill\" data-point=\"".concat(i + 1, "\"></div>") : '', "\n                ").concat(starValue >= 0.5 && starValue < 1 ? "<div class=\"star-item star-half\" data-point=\"".concat(i + 1, "\"></div>") : '', "\n                ").concat(starValue < 0.5 ? "<div class=\"star-item star-empty\" data-point=\"".concat(i + 1, "\"></div>") : '', "\n            ");
        starGroupEl.appendChild(template.content);
        starValue -= 1;
      }

      this.$element.appendChild(starGroupEl);

      if (this.$element.classList.contains('eval')) {
        var button = document.createElement('button');
        button.classList.add("reset-btn");
        button.textContent = "취소";
        this.$element.appendChild(button);
      }

      this.lockedStar = false;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.$element.addEventListener('mousemove', function (e) {
        if (!_this.$element.classList.contains('eval') || _this.lockedStar) {
          return;
        }

        var offsetX = e.offsetX,
            target = e.target;
        var index = parseInt(target.dataset.point, 10) - 1;
        var width = target.getClientRects()[0].width;
        var isOverHalf = offsetX > width / 2;

        _this.renderStar({
          clientIndex: index,
          isOverHalf: isOverHalf
        });
      });
      this.$element.addEventListener('click', function (_ref) {
        var target = _ref.target;
        _this.lockedStar = true;

        if (target.classList.contains("reset-btn")) {
          _this.lockedStar = false;
        }
      });
    }
  }, {
    key: "renderStar",
    value: function renderStar() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _payload$clientIndex = payload.clientIndex,
          clientIndex = _payload$clientIndex === void 0 ? -1 : _payload$clientIndex,
          _payload$isOverHalf = payload.isOverHalf,
          isOverHalf = _payload$isOverHalf === void 0 ? false : _payload$isOverHalf;
      var regex = /star-fill|star-half|star-empty/g;

      _toConsumableArray(this.$element.querySelectorAll('.star-item')).forEach(function (el, idx) {
        el.className = idx < clientIndex ? el.className.replace(regex, 'star-fill') : el.className.replace(regex, 'star-empty');

        if (clientIndex === idx) {
          el.className = isOverHalf ? el.className.replace(regex, 'star-fill') : el.className.replace(regex, 'star-half');
        }
      });
    }
  }]);

  return StarAjax;
}(_Component2["default"]);

exports["default"] = StarAjax;
(0, _utils.getData)("http://localhost:3000/progress", function (data) {
  return new StarAjax(document.querySelector('.star-ajax'), data);
});
//# sourceMappingURL=StarAjax.js.map