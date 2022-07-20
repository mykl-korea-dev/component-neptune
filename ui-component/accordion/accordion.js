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
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accordion.prototype.setTemplate = function () {
        _super.prototype.setTemplate.call(this);
    };
    Accordion.prototype.setEvents = function () {
        // this.$element.querySelector('.accordion-toggle')?.addEventListener('click', ({target}) => {
        //
        // })
        this.$element.addEventListener('click', function (_a) {
            var _b;
            var target = _a.target;
            if (target.classList.contains('accordion-toggle')) {
                var el = target.closest('.accordion-item');
                console.log(target, el);
                // el !== this.$element.querySelector('.accordion-body.show') && this.$element.querySelector('.accordion-body.show')?.classList.remove('show');
                (_b = el === null || el === void 0 ? void 0 : el.querySelector('.accordion-body')) === null || _b === void 0 ? void 0 : _b.classList.toggle('show');
            }
        });
    };
    return Accordion;
}(Component));
export default Accordion;
document.querySelectorAll(".accordion").forEach(function (el) { return new Accordion(el); });
//# sourceMappingURL=accordion.js.map