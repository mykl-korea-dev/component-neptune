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
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.setEvents = function () {
        var _this = this;
        var _a, _b;
        (_a = this.$element.querySelector('.dropdown-toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseover', function (_a) {
            var target = _a.target;
            _this.$element.querySelector('.dropdown-menu').style.opacity = '1';
        });
        (_b = this.$element.querySelector('.dropdown-toggle')) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseout', function (_a) {
            var target = _a.target;
            _this.$element.querySelector('.dropdown-menu').style.opacity = '0';
        });
    };
    return Dropdown;
}(Component));
export default Dropdown;
document.querySelectorAll('.dropdown').forEach(function (el) { return new Dropdown(el); });
//# sourceMappingURL=dropdown.js.map