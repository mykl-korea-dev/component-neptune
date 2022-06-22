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
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(element) {
        return _super.call(this, element) || this;
    }
    File.prototype.setElements = function () {
        this.input = this.$element.querySelector('.form-file-input');
    };
    File.prototype.setTemplate = function () {
        this.button = document.createElement('button');
        this.button.classList.add('file-btn');
        this.button.textContent = "파일 등록";
        this.$element.appendChild(this.button);
    };
    File.prototype.setEvents = function () {
        var _this = this;
        var _a;
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var _a;
            console.log('hi');
            (_a = _this.input) === null || _a === void 0 ? void 0 : _a.click();
        });
    };
    return File;
}(Component));
export default File;
//# sourceMappingURL=file.js.map