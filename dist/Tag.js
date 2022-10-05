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

var Tag = /*#__PURE__*/function (_Component) {
  _inherits(Tag, _Component);

  var _super = _createSuper(Tag);

  function Tag() {
    _classCallCheck(this, Tag);

    return _super.apply(this, arguments);
  }

  _createClass(Tag, [{
    key: "setElements",
    value: function setElements() {}
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.$element.querySelector('.tag-input').addEventListener('focus', function () {
        _this.$element.querySelector('.tag-input-box').classList.add('focus');

        _this.$element.querySelector('.tag-input').setAttribute('placeholder', '');

        _this.$element.querySelector('.tag-input').style.width = '9px';
      });
      this.$element.querySelector('.tag-input').addEventListener('input', function () {
        var input = _this.$element.querySelector('.tag-input').value;

        _this.$element.querySelector('.tag-input').style.width = input.length * 13 + 'px';

        var inputItemLength = _this.$element.querySelectorAll('.tag-item').length;

        if (inputItemLength > 10) {
          console.log('태그는 10개까지 입력할 수 있습니다.');
        }
      });
      this.$element.querySelector('.tag-input').addEventListener('keydown', function (e) {
        var input = _this.$element.querySelector('.tag-input');

        if (input.value.length <= 0) {
          if (e.key === 'Backspace') {
            var inputItemLength = _this.$element.querySelectorAll('.tag-item').length;

            if (inputItemLength === 0) {
              return;
            }

            var lastItem = _this.$element.querySelectorAll('.tag-item')[inputItemLength - 1];

            lastItem.parentElement.removeChild(lastItem);

            var _input = _this.$element.querySelector('.tag-input');

            _input.value = '';
            _input.style.width = '9px';
          }
        } else {
          if (e.key === 'Enter') {
            _this.addInputItem();
          }

          if (input.value.length >= 20) {
            console.log('20넘음');
            e.preventDefault();
            e.stopPropagation();
            return false;

            if (e.key != 'Enter') {
              return;
            }
          }
        }
      });
      this.$element.querySelector('.tag-input').addEventListener('blur', function (e) {
        if (_this.$element.querySelector('.tag-input').value.length > 0) {
          _this.addInputItem();
        }

        if (!_this.$element.querySelector('.tag-item')) {
          _this.$element.querySelector('.tag-input').setAttribute('placeholder', '태그를 입력해주세요 (최대 10개...?)');

          _this.$element.querySelector('.tag-input').style.width = "200px";
          return;
        }

        console.log(_this.$element.querySelector('.tag-input').value.length);
      });
    }
  }, {
    key: "addInputItem",
    value: function addInputItem() {
      var input = this.$element.querySelector('.tag-input');
      var inputBox = this.$element.querySelector('.tag-input-box');
      var tag = document.createElement('div');
      tag.classList.add('tag-item');
      tag.innerHTML = "<em class=\"tag-text\">".concat('#' + input.value, "</em>");
      input.value = '';
      input.classList.remove('focus');
      input.style.width = '9px';
      this.$element.querySelector('.tag-inner').insertBefore(tag, inputBox);
    }
  }]);

  return Tag;
}(_Component2["default"]); // new Tag(document.querySelector('.tag'));


exports["default"] = Tag;
//# sourceMappingURL=Tag.js.map