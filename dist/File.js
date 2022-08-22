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

var File = /*#__PURE__*/function (_Component) {
  _inherits(File, _Component);

  var _super = _createSuper(File);

  function File(element) {
    var _this;

    _classCallCheck(this, File);

    _this = _super.call(this, element);

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "button", void 0);

    _defineProperty(_assertThisInitialized(_this), "dataTransfe", void 0);

    return _this;
  }

  _createClass(File, [{
    key: "setElements",
    value: function setElements() {
      this.dataTransfer = new DataTransfer();
      this.input = this.$element.querySelector('.form-file-input');
    }
  }, {
    key: "setTemplate",
    value: function setTemplate() {
      this.button = document.createElement('button');
      this.button.classList.add('file-btn');
      this.button.textContent = "파일 등록";
      this.$element.appendChild(this.button);
      var ul = document.createElement('ul');
      this.$element.appendChild(ul);
    }
  }, {
    key: "render",
    value: function render() {
      this.$element.querySelector('ul').innerHTML = Array.from(this.input.files).reverse().map(function (file, idx) {
        return "\n            <li>".concat(file.name, "<button type=\"button\"  class=\"deleteFileBtn\" data-idx=").concat(file.lastModified, ">\uC0AD\uC81C</button></li>\n        ");
      }).join('');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this$button,
          _this2 = this,
          _this$input;

      (_this$button = this.button) === null || _this$button === void 0 ? void 0 : _this$button.addEventListener('click', function () {
        var _this2$input;

        (_this2$input = _this2.input) === null || _this2$input === void 0 ? void 0 : _this2$input.click();
      });
      (_this$input = this.input) === null || _this$input === void 0 ? void 0 : _this$input.addEventListener('change', function () {
        var _this2$dataTransfer2, _this2$input2, _this2$dataTransfer3, _this2$input3;

        console.log(_this2.input.files[0]);
        Array.from(_this2.input.files).forEach(function (file) {
          var _this2$dataTransfer;

          return (_this2$dataTransfer = _this2.dataTransfer) === null || _this2$dataTransfer === void 0 ? void 0 : _this2$dataTransfer.items.add(file);
        });
        console.log((_this2$dataTransfer2 = _this2.dataTransfer) === null || _this2$dataTransfer2 === void 0 ? void 0 : _this2$dataTransfer2.files, (_this2$input2 = _this2.input) === null || _this2$input2 === void 0 ? void 0 : _this2$input2.files);
        _this2.input.files = _this2.dataTransfer.files;
        console.log((_this2$dataTransfer3 = _this2.dataTransfer) === null || _this2$dataTransfer3 === void 0 ? void 0 : _this2$dataTransfer3.files, (_this2$input3 = _this2.input) === null || _this2$input3 === void 0 ? void 0 : _this2$input3.files);

        _this2.render();
      });
      this.$element.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.classList.contains('deleteFileBtn')) {
          var _this2$dataTransfer4;

          (_this2$dataTransfer4 = _this2.dataTransfer) === null || _this2$dataTransfer4 === void 0 ? void 0 : _this2$dataTransfer4.items.remove(Array.from(_this2.dataTransfer.files).findIndex(function (file, idx) {
            return file.lastModified == parseInt(target.dataset.idx, 10);
          }));
          _this2.input.files = _this2.dataTransfer.files;

          _this2.render();
        }
      });
    }
  }]);

  return File;
}(_Component2["default"]);

exports["default"] = File;
//# sourceMappingURL=File.js.map