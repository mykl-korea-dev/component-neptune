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

var Process = /*#__PURE__*/function (_Component) {
  _inherits(Process, _Component);

  var _super = _createSuper(Process);

  function Process() {
    _classCallCheck(this, Process);

    return _super.apply(this, arguments);
  }

  _createClass(Process, [{
    key: "setElements",
    value: function setElements() {// this.$element.querySelectorAll('.active ~ .process-item').forEach((el) => {
      //     console.log(el)
      // })
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.$element.addEventListener('click', function (_ref) {
        var _this$$element$queryS;

        var target = _ref.target;

        if (!target.classList.contains('active') && !target.classList.contains('done')) {
          return;
        }

        (_this$$element$queryS = _this.$element.querySelector('.active')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.classList.remove('active');
        target.classList.add('active');
        target.classList.remove('done');
      });
      this.$element.querySelector('.next').addEventListener('click', function () {
        var currentEl = _this.$element.querySelector('.active');

        var nextSiblings = _this.$element.querySelectorAll('.active ~ .process-item');

        var nextEl = null;

        for (var i = 0; i < nextSiblings.length; i++) {
          if (!nextSiblings[i].classList.contains('disabled')) {
            nextEl = nextSiblings[i];
            break;
          }
        }

        if (nextEl) {
          currentEl.classList.remove('active');
          currentEl.classList.add('done');
          nextEl.classList.add('active');
        }
      });
      this.$element.querySelector('.prev').addEventListener('click', function () {
        var currentEl = _this.$element.querySelector('.active');

        var prevSiblings = _this.$element.querySelectorAll('.done');

        var prevEl = null;

        for (var i = prevSiblings.length - 1; i >= 0; i--) {
          if (!prevSiblings[i].classList.contains('disabled')) {
            prevEl = prevSiblings[i];
            break;
          }
        }

        if (prevEl) {
          currentEl.classList.remove('active');
          prevEl.classList.add('active');
          prevEl.classList.remove('done');
        }
      });
    }
  }]);

  return Process;
}(_Component2["default"]); // new Process(document.querySelector('.process'));


exports["default"] = Process;
//# sourceMappingURL=Process.js.map