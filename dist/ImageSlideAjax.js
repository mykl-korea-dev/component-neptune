"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("../../../basic/Component.js"));

var _utils = require("../../../basic/utils.js");

var _SlideItem = require("../../../extended-component/slideitem/SlideItem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImageSlideAjax = /*#__PURE__*/function (_Component) {
  _inherits(ImageSlideAjax, _Component);

  var _super = _createSuper(ImageSlideAjax);

  function ImageSlideAjax() {
    _classCallCheck(this, ImageSlideAjax);

    return _super.apply(this, arguments);
  }

  _createClass(ImageSlideAjax, [{
    key: "setTemplate",
    value: function setTemplate() {
      return _toConsumableArray(Object.keys(this.$data)).map(function (el) {
        return "<li class=\"slide-item\"></li>";
      }).join("");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.$element.querySelector('.slider-group').innerHTML = this.setTemplate();
      this.$element.querySelectorAll('.slide-item').forEach(function (el) {
        return el.appendChild((0, _SlideItem.setItem)(_this.$data.data));
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;

      this.$element.querySelector('.prev').addEventListener('click', this.throttle(this.clickPrevBtn.bind(this), 500));
      this.$element.querySelector('.next').addEventListener('click', function () {
        var _this2$$element$query = _this2.$element.querySelector('.slider-group').getBoundingClientRect(),
            groupWidth = _this2$$element$query.width;

        var lastImage = _this2.$element.querySelector('.slider-group').lastElementChild;

        var _lastImage$getBoundin = lastImage.getBoundingClientRect(),
            lastImgWidth = _lastImage$getBoundin.width,
            lastImgX = _lastImage$getBoundin.x;

        if (lastImgX + lastImgWidth <= groupWidth) {
          return;
        }

        _this2.$element.querySelectorAll('.slide-item').forEach(function (el, i) {
          var currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
          el.style.transform = "translateX(".concat(Number(currentPosX) - Number(groupWidth), "px)");
        });
      });
      window.addEventListener('resize', this.setElements.bind(this));
    }
  }, {
    key: "throttle",
    value: function throttle(func, delay) {
      var lastFunc;
      var lastRan;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var context = this;

        if (!lastRan) {
          func.call.apply(func, [context].concat(args));
          lastRan = Date.now();
        } else {
          if (lastRan) clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= delay) {
              func.call.apply(func, [context].concat(args));
              lastRan = Date.now();
            }
          }, delay - (Date.now() - lastRan));
        }
      };
    }
  }, {
    key: "clickPrevBtn",
    value: function clickPrevBtn() {
      var firstImage = this.$element.querySelector('.slider-group').firstElementChild;

      var _firstImage$getBoundi = firstImage.getBoundingClientRect(),
          firstImgWidth = _firstImage$getBoundi.width,
          firstImgX = _firstImage$getBoundi.x;

      if (firstImgX <= firstImgWidth && firstImgX >= 0) {
        return;
      }

      var _this$$element$queryS = this.$element.querySelector('.slider-group').getBoundingClientRect(),
          groupWidth = _this$$element$queryS.width;

      this.$element.querySelectorAll('.slide-item').forEach(function (el, i) {
        var currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
        el.style.transform = "translateX(".concat(Number(currentPosX) + Number(groupWidth), "px)");
      });
    }
  }]);

  return ImageSlideAjax;
}(_Component2["default"]);

exports["default"] = ImageSlideAjax;
(0, _utils.getData)("http://localhost:3000/imageSlide", function (data) {
  return new ImageSlideAjax(document.querySelector('.image-slide-ajax'), {
    data: data,
    type: 'type2'
  });
});
//# sourceMappingURL=ImageSlideAjax.js.map