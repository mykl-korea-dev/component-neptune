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
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(element) {
        return _super.call(this, element) || this;
    }
    Textarea.prototype.setEvents = function () {
        var textarea = this.$element.querySelector('.textarea-smart');
        textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener('keyup', function () {
            // @ts-ignore
            textarea === null || textarea === void 0 ? void 0 : textarea.style.height = 'auto';
            textarea.style.height = "".concat(textarea.scrollHeight, "px");
        });
    };
    return Textarea;
}(Component));
export default Textarea;
document.querySelectorAll('.form-textarea').forEach(function (el) { return new Textarea(el); });
//# sourceMappingURL=textarea.js.map