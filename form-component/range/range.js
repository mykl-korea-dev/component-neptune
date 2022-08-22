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
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(element) {
        return _super.call(this, element) || this;
    }
    Range.prototype.setElements = function () {
        var _a, _b;
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        var _c = this.$element.dataset, min = _c.min, max = _c.max, value = _c.value, step = _c.step;
        template.innerHTML = "\n            <input type=\"range\" class=\"input-left\" name=\"max\" min=".concat(min, " max=").concat(max, " value=").concat(value, " step=").concat(step, ">\n            <input type=\"range\" class=\"input-right\" name=\"max\" min=").concat(min, " max=").concat(max, " value=").concat(parseInt(max, 10) - parseInt(value, 10), " step=").concat(step, ">\n\n            <div class=\"slider\">\n                <div class=\"track\"></div>\n                <div class=\"range\"></div>\n                <div class=\"thumb left\"></div>\n                <div class=\"thumb right\"></div>\n            </div>");
        fragment.appendChild(template.content);
        (_a = this.$element) === null || _a === void 0 ? void 0 : _a.appendChild(fragment);
        console.log(min, max, step, value);
        if (min && max && step && value) {
            for (var i = parseInt(min, 10) + parseInt(step, 10); i < parseInt(max, 10); i += parseInt(step, 10)) {
                var span = document.createElement('span');
                span.classList.add('step');
                span.style.left = "".concat(i, "%");
                (_b = this.$element.querySelector('.slider')) === null || _b === void 0 ? void 0 : _b.appendChild(span);
            }
        }
        var slider = document.querySelector('.slider');
        var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
        var thumbLeft = slider.querySelector('.slider .thumb.left');
        var thumbRight = slider.querySelector('.thumb.right');
        thumbLeft.style.left = "".concat(value, "%");
        range.style.left = "".concat(value, "%");
        range.style.right = "".concat(parseInt(value, 10) - 3, "%");
        thumbRight.style.right = "".concat(parseInt(value, 10) - 3, "%");
    };
    Range.prototype.setEvents = function () {
        var slider = document.querySelector('.slider');
        var range = slider === null || slider === void 0 ? void 0 : slider.querySelector('.range');
        var thumbLeft = slider.querySelector('.slider .thumb.left');
        var thumbRight = slider.querySelector('.thumb.right');
        var inputLeft = document.querySelector('.input-left');
        var inputRight = document.querySelector('.input-right');
        inputLeft === null || inputLeft === void 0 ? void 0 : inputLeft.addEventListener('input', function (e) {
            var _a = [parseInt(inputLeft.min), parseInt(inputLeft.max)], min = _a[0], max = _a[1];
            inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();
            var inputValue = parseInt(inputLeft.value, 10);
            var percent = ((inputValue - min) / (max - min)) * 100;
            thumbLeft.style.left = "".concat(percent, "%");
            range.style.left = "".concat(percent, "%");
        });
        inputRight === null || inputRight === void 0 ? void 0 : inputRight.addEventListener('input', function (e) {
            var _a = [parseInt(inputRight.min), parseInt(inputRight.max)], min = _a[0], max = _a[1];
            inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();
            var inputValue = parseInt(inputRight.value, 10);
            var percent = ((inputValue - min) / (max - min)) * 100;
            thumbRight.style.right = "".concat(100 - percent - 3, "%");
            range.style.right = "".concat(100 - percent - 2, "%");
        });
    };
    return Range;
}(Component));
export default Range;
//# sourceMappingURL=range.js.map