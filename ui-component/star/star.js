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
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Star.prototype.setTemplate = function () {
        var _a = this.$element.dataset, min = _a.min, max = _a.max, value = _a.value;
        var starValue = Number(value);
        var fragment = new DocumentFragment();
        for (var i = parseInt(min, 10); i < parseInt(max, 10); i++) {
            var template = document.createElement('template');
            template.innerHTML = "\n                ".concat(starValue >= 1 ? "<div class=\"star-fill\"></div>" : '', "\n                ").concat(starValue == 0.5 ? "<div class=\"star-half\"></div>" : '', "\n                ").concat(starValue <= 0 ? "<div class=\"star-empty\"></div>" : '', "\n            ");
            fragment.appendChild(template.content);
            starValue -= 1;
        }
        this.$element.appendChild(fragment);
    };
    Star.prototype.setEvents = function () {
        _super.prototype.setEvents.call(this);
    };
    return Star;
}(Component));
export default Star;
document.querySelectorAll('.star.ajax').forEach(function (el) { return new Star(el); });
//# sourceMappingURL=star.js.map