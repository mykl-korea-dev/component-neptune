var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Component from "../../basic/component.js";
import { closeAllSelect } from "../../basic/utils.js";
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(component, data) {
        return _super.call(this, component, data) || this;
    }
    Select.prototype.setElements = function () {
        var _a, _b;
        this.select = this.$element.querySelector('select');
        console.log(this.select, this.$data);
        this.select.innerHTML = "".concat(this.$data.map(function (el) { return "<option value=\"".concat(el.value, "\">").concat(el.text, "</option>"); }).join(''));
        this.options = Array.from(this.$element.querySelectorAll('option'));
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = "\n            <div class=\"select-selected\">\n                ".concat((_a = this.select) === null || _a === void 0 ? void 0 : _a.options[this.select.selectedIndex].textContent, "\n            </div>\n            <div class=\"select-items select-hide\">\n                ").concat((_b = this.options) === null || _b === void 0 ? void 0 : _b.map(function (el, i) { return i === 0 ? '' : "<div>".concat(el.textContent, "</div>"); }).join(''), "\n            </div>\n            ");
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    };
    Select.prototype.setEvents = function () {
        var _this = this;
        var selectedDiv = this.$element.querySelector('.select-selected');
        var selectDiv = this.$element.querySelector('.select-items');
        document.addEventListener('click', function (e) { return closeAllSelect(e.target); });
        selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.addEventListener('click', function () {
            selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('select-hide');
            selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('select-arrow-active');
        });
        selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.addEventListener('click', function (e) {
            var _a, _b;
            (_a = _this.$element.querySelector('.same-as-selected')) === null || _a === void 0 ? void 0 : _a.removeAttribute('class');
            var target = e.target;
            for (var i = 0; i < _this.options.length; i++) {
                if (((_b = _this.select) === null || _b === void 0 ? void 0 : _b.options[i].innerHTML) === (target === null || target === void 0 ? void 0 : target.textContent)) {
                    _this.select.selectedIndex = i;
                    selectedDiv.textContent = target.textContent;
                    target.classList.add('same-as-selected');
                    selectDiv === null || selectDiv === void 0 ? void 0 : selectDiv.classList.toggle('select-hide');
                    selectedDiv === null || selectedDiv === void 0 ? void 0 : selectedDiv.classList.toggle('select-arrow-active');
                    break;
                }
            }
        });
    };
    return Select;
}(Component));
export default Select;
//# sourceMappingURL=select.js.map