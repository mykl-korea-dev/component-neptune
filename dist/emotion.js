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

var Emotion = /*#__PURE__*/function (_Component) {
  _inherits(Emotion, _Component);

  var _super = _createSuper(Emotion);

  function Emotion() {
    _classCallCheck(this, Emotion);

    return _super.apply(this, arguments);
  }

  _createClass(Emotion, [{
    key: "setTemplate",
    value: function setTemplate() {
      return "   \n            <div class=\"clicked-emotion\">+</div> \n            <div class=\"emotion-group\">\n                <div class=\"emotion-good\"></div>\n                <div class=\"emotion-sad\"></div>\n                <div class=\"emotion-like\"></div>\n                <div class=\"emotion-bad\"></div>\n                <div class=\"emotion-thumbsUp\"></div>\n                <div class=\"emotion-thumbsDown\"></div>\n            </div>\n        ";
    }
  }, {
    key: "render",
    value: function render() {
      this.$element.innerHTML = this.setTemplate();
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.$element.querySelector('.clicked-emotion').addEventListener('click', function () {
        _this.$element.querySelector('.emotion-group').style.display = "block";
      });
      this.$element.querySelector('.emotion-group').addEventListener('click', function (_ref) {
        var target = _ref.target;
        var regex = /emotion-good|emotion-sad|emotion-like|emotion-bad|emotion-thumbsUp|emotion-thumbsDown/g;

        var clickedEl = _this.$element.querySelector('.clicked-emotion');

        clickedEl.className = clickedEl.className.replace(regex, '');
        clickedEl.classList.add(target.classList);
        clickedEl.textContent = '';
        clickedEl.style.verticalAlign = "middle";
        _this.$element.querySelector('.emotion-group').style.display = "none";
      });
    }
  }]);

  return Emotion;
}(_Component2["default"]);

exports["default"] = Emotion;
document.querySelectorAll('.emotion').forEach(function (el) {
  return new Emotion(el);
});
//# sourceMappingURL=emotion.js.map