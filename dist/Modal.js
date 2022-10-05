"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("../../basic/Component.js"));

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

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _super.apply(this, arguments);
  }

  _createClass(Modal, [{
    key: "setEvents",
    value: function setEvents() {
      var _this$$element$queryS,
          _this = this,
          _this$$element$queryS2,
          _this$$element$queryS4,
          _this$$element$queryS5;

      (_this$$element$queryS = this.$element.querySelector('.modal-btn')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.addEventListener('click', function () {
        _this.$element.querySelector('.modal-dialog').classList.add('show');

        document.body.style.overflow = 'hidden';
      });
      (_this$$element$queryS2 = this.$element.querySelector('.modal-dialog')) === null || _this$$element$queryS2 === void 0 ? void 0 : _this$$element$queryS2.addEventListener('click', function (e) {
        if (_this.$element.querySelector('.modal-dialog').classList.contains('show')) {
          var _this$$element$queryS3;

          (_this$$element$queryS3 = _this.$element.querySelector('.modal-dialog.show')) === null || _this$$element$queryS3 === void 0 ? void 0 : _this$$element$queryS3.classList.remove('show');
          document.body.style.overflow = 'auto';
        }
      });
      (_this$$element$queryS4 = this.$element.querySelector('.modal-content')) === null || _this$$element$queryS4 === void 0 ? void 0 : _this$$element$queryS4.addEventListener('click', function (e) {
        e.stopPropagation();
        return;
      });
      (_this$$element$queryS5 = this.$element.querySelector('[data-func="modal"]')) === null || _this$$element$queryS5 === void 0 ? void 0 : _this$$element$queryS5.addEventListener('click', function () {
        _this.$element.querySelector('.modal-dialog').classList.remove('show');

        document.body.style.overflow = 'auto';
      });
    }
  }]);

  return Modal;
}(_Component2["default"]);

exports["default"] = Modal;
new Modal(document.querySelector('.modal'));
//# sourceMappingURL=Modal.js.map