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

var AutoComplete = /*#__PURE__*/function (_Component) {
  _inherits(AutoComplete, _Component);

  var _super = _createSuper(AutoComplete);

  function AutoComplete() {
    _classCallCheck(this, AutoComplete);

    return _super.apply(this, arguments);
  }

  _createClass(AutoComplete, [{
    key: "setElements",
    value: function setElements() {
      this.originVal = null;
      var button = document.createElement("button");
      button.classList.add('directly');
      button.innerHTML = '직접입력';
      this.$element.appendChild(button);
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this,
          _this$$element$queryS3,
          _this$$element$queryS4;

      this.$element.querySelector('input').addEventListener('focus', function () {
        var _this$$element$queryS, _this$$element$queryS2;

        (_this$$element$queryS = _this.$element.querySelector('.disabled')) === null || _this$$element$queryS === void 0 ? void 0 : _this$$element$queryS.classList.remove('disabled');
        (_this$$element$queryS2 = _this.$element.querySelector('.selected')) === null || _this$$element$queryS2 === void 0 ? void 0 : _this$$element$queryS2.classList.remove('selected');
      });
      (_this$$element$queryS3 = this.$element.querySelector('.add-item')) === null || _this$$element$queryS3 === void 0 ? void 0 : _this$$element$queryS3.addEventListener('click', function (e) {
        var div = document.createElement('div');
        div.classList.add('auto-completes');
        div.innerHTML = "\n                <input type=\"text\" name=\"\" id=\"\" class=\"search-input\">\n                <div class=\"auto-complete-group\"></div>\n                <button type=\"button\" class=\"add-item\">\uCD94\uAC00</button>\n                <button type=\"button\" class=\"remove-item\">\uC0AD\uC81C</button>\n            ";

        _this.$element.parentElement.appendChild(div);

        new AutoComplete(div);
      });
      (_this$$element$queryS4 = this.$element.querySelector('.remove-item')) === null || _this$$element$queryS4 === void 0 ? void 0 : _this$$element$queryS4.addEventListener('click', function (e) {
        var childCount = _this.$element.parentElement.childElementCount;
        childCount > 1 && _this.$element.remove();
      });
      this.$element.addEventListener('keyup', this.throttle(this.keyUpHandler.bind(this), 100));
      this.$element.addEventListener('keydown', this.throttle(this.keyDownHandler.bind(this), 300));
      this.$element.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.classList.contains('directly')) {
          _this.$element.querySelector('.auto-complete-group').classList.add('disabled');
        }

        if (target.classList.contains('auto-complete')) {
          _this.$element.querySelector('input').value = target.dataset.val;

          _this.$element.querySelector('.auto-complete-group').classList.add('disabled');
        }
      });
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
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      if (e.key === 'Process') {
        return;
      }

      if (e.key === 'ArrowDown') {
        var _this$$element$queryS5;

        console.log('keyup', this.originVal, e);
        var selectedEl = this.$element.querySelector('.auto-complete.selected');

        if (selectedEl) {
          var _selectedEl;

          selectedEl.classList.remove('selected');
          selectedEl = selectedEl.nextElementSibling;
          (_selectedEl = selectedEl) === null || _selectedEl === void 0 ? void 0 : _selectedEl.classList.add('selected');
        } else {
          selectedEl = this.$element.querySelector('.auto-complete');
          selectedEl.classList.add('selected');
        }

        this.$element.querySelector('input').value = selectedEl ? (_this$$element$queryS5 = this.$element.querySelector('.auto-complete.selected')) === null || _this$$element$queryS5 === void 0 ? void 0 : _this$$element$queryS5.dataset.val : this.originVal;
        return;
      }

      if (e.key === 'ArrowUp') {
        var _this$$element$queryS6;

        var _selectedEl2 = this.$element.querySelector('.auto-complete.selected');

        if (_selectedEl2) {
          var _selectedEl3, _selectedEl4;

          (_selectedEl3 = _selectedEl2) === null || _selectedEl3 === void 0 ? void 0 : _selectedEl3.classList.remove('selected');
          _selectedEl2 = _selectedEl2.previousElementSibling;
          (_selectedEl4 = _selectedEl2) === null || _selectedEl4 === void 0 ? void 0 : _selectedEl4.classList.add('selected');
        } else {
          _selectedEl2 = this.$element.querySelector('.auto-complete-group').lastElementChild;

          _selectedEl2.classList.add('selected');
        }

        this.$element.querySelector('input').value = _selectedEl2 ? (_this$$element$queryS6 = this.$element.querySelector('.auto-complete.selected')) === null || _this$$element$queryS6 === void 0 ? void 0 : _this$$element$queryS6.dataset.val : this.originVal;
        return;
      }
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(e) {
      var _this2 = this;

      if (this.$element.querySelector('.auto-complete-group').classList.contains('disabled')) {
        return;
      }

      if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
        return;
      }

      if (e.key === 'Enter') {
        if (!this.$element.querySelector('.auto-complete.selected')) {
          return;
        }

        this.$element.querySelector('input').value = e.target.value;
        this.$element.querySelector('.auto-complete-group').classList.add('disabled');
        this.$element.querySelector('input').blur();
        return;
      }

      console.log('keydown', e);
      fetch("http://localhost:3000/autoComplete").then(function (response) {
        return response.json();
      }).then(function (datas) {
        console.log('fetch');
        _this2.$element.querySelector('.auto-complete-group').innerHTML = '';
        _this2.originVal = _this2.$element.querySelector('input').value;
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = datas.map(function (data) {
          return "\n                        <div class=\"auto-complete\" data-val=\"".concat(data, "\">").concat(data.replace(_this2.originVal, "<b>".concat(_this2.originVal, "</b>")), "</div> \n                    ");
        }).join("");
        fragment.appendChild(template.content);

        _this2.$element.querySelector('.auto-complete-group').appendChild(fragment);
      });
    }
  }]);

  return AutoComplete;
}(_Component2["default"]);

exports["default"] = AutoComplete;
document.querySelectorAll('.auto-completes').forEach(function (el) {
  return new AutoComplete(el);
});
//# sourceMappingURL=AutoComplete.js.map