"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("../../../basic/Component.js"));

var _utils = require("../../../basic/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var AccordionAjax = /*#__PURE__*/function (_Component) {
  _inherits(AccordionAjax, _Component);

  var _super = _createSuper(AccordionAjax);

  function AccordionAjax() {
    _classCallCheck(this, AccordionAjax);

    return _super.apply(this, arguments);
  }

  _createClass(AccordionAjax, [{
    key: "setTemplate",
    value: function setTemplate() {
      console.log(this.$data);
      return this.$data.map(function (list) {
        return "\n            <div class=\"accordion-item\">\n                <h2 class=\"accordion-header\">\n                    <button class=\"accordion-toggle\">".concat(list.title, "</button>\n                </h2>\n                <ul class=\"accordion-body\">\n                    ").concat(list.items.map(function (item) {
          return "\n                        <li class=\"accordion-body-item\">".concat(item.link ? "<a href=".concat(item.link, ">").concat(item.text, "</a>") : item.text, "</li>\n                    ");
        }).join(''), "\n                </ul>\n            </div>\n        ");
      }).join('');
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

      this.$element.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.classList.contains('accordion-toggle')) {
          var _el$querySelector;

          var el = target.closest('.accordion-item');

          if (!_this.$element.classList.contains('showAlways')) {
            var _this$$element$queryS;

            (el === null || el === void 0 ? void 0 : el.querySelector('.accordion-body.show')) !== _this.$element.querySelector('.accordion-body.show') && ((_this$$element$queryS = _this.$element.querySelector('.accordion-body.show')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.classList.remove('show'));
          }

          el === null || el === void 0 ? void 0 : (_el$querySelector = el.querySelector('.accordion-body')) === null || _el$querySelector === void 0 ? void 0 : _el$querySelector.classList.toggle('show');
        }
      });
    }
  }]);

  return AccordionAjax;
}(_Component2["default"]);

exports["default"] = AccordionAjax;
(0, _utils.getData)('http://localhost:3000/accordion', function (data) {
  return new AccordionAjax(document.querySelector('.accordion-ajax'), data);
});
//# sourceMappingURL=AccordionAjax.js.map