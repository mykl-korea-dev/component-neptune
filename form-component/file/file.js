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
        this.dataTransfer = new DataTransfer();
        this.input = this.$element.querySelector('.form-file-input');
    };
    File.prototype.setTemplate = function () {
        this.button = document.createElement('button');
        this.button.classList.add('file-btn');
        this.button.textContent = "파일 등록";
        this.$element.appendChild(this.button);
        var ul = document.createElement('ul');
        this.$element.appendChild(ul);
    };
    File.prototype.render = function () {
        this.$element.querySelector('ul').innerHTML = Array.from(this.input.files).reverse().map(function (file, idx) { return "\n            <li>".concat(file.name, "<button type=\"button\"  class=\"deleteFileBtn\" data-idx=").concat(file.lastModified, ">\uC0AD\uC81C</button></li>\n        "); }).join('');
    };
    File.prototype.setEvents = function () {
        var _this = this;
        var _a, _b;
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var _a;
            (_a = _this.input) === null || _a === void 0 ? void 0 : _a.click();
        });
        (_b = this.input) === null || _b === void 0 ? void 0 : _b.addEventListener('change', function () {
            var _a, _b, _c, _d;
            Array.from(_this.input.files).forEach(function (file) { var _a; return (_a = _this.dataTransfer) === null || _a === void 0 ? void 0 : _a.items.add(file); });
            console.log((_a = _this.dataTransfer) === null || _a === void 0 ? void 0 : _a.files, (_b = _this.input) === null || _b === void 0 ? void 0 : _b.files);
            _this.input.files = _this.dataTransfer.files;
            console.log((_c = _this.dataTransfer) === null || _c === void 0 ? void 0 : _c.files, (_d = _this.input) === null || _d === void 0 ? void 0 : _d.files);
            _this.render();
        });
        this.$element.addEventListener('click', function (_a) {
            var _b;
            var target = _a.target;
            if (target.classList.contains('deleteFileBtn')) {
                (_b = _this.dataTransfer) === null || _b === void 0 ? void 0 : _b.items.remove(Array.from(_this.dataTransfer.files).findIndex(function (file, idx) { return (file.lastModified == parseInt(target.dataset.idx, 10)); }));
                _this.input.files = _this.dataTransfer.files;
                _this.render();
            }
        });
    };
    return File;
}(Component));
export default File;
//# sourceMappingURL=file.js.map