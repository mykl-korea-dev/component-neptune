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
var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    function Time(element) {
        return _super.call(this, element) || this;
    }
    Time.prototype.setTemplate = function () {
        console.log(this.$element);
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = "\n        <div class=\"time-wrapper\">\n            <div class=\"hour\">\n                <button class=\"hour-up\">Up</button>\n                <div class=\"hour-selected\">12</div>\n                <button class=\"hour-down\">Down</button>\n            </div>\n            <div class=\"minute\">\n                <button class=\"minute-up\">Up</button>\n                <div class=\"minute-selected\">00</div>\n                <button class=\"minute-down\">Down</button>\n            </div>\n        </div>\n            ";
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    };
    Time.prototype.setEvents = function () {
        var timeWrapper = this.$element.querySelector('.time-wrapper');
        var hour = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.hour');
        var hourUpBtn = hour === null || hour === void 0 ? void 0 : hour.querySelector('.hour-up');
        var hourDownBtn = hour === null || hour === void 0 ? void 0 : hour.querySelector('.hour-up');
        var hourValue = hour === null || hour === void 0 ? void 0 : hour.querySelector('.hour-selected');
        var minute = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.minute');
        var minuteUpBtn = minute === null || minute === void 0 ? void 0 : minute.querySelector('.minute-up');
        var minuteDownBtn = minute === null || minute === void 0 ? void 0 : minute.querySelector('.minute-up');
        hourUpBtn === null || hourUpBtn === void 0 ? void 0 : hourUpBtn.addEventListener('click', function () {
            var selectedHour = parseInt(hourValue.textContent, 10);
            selectedHour++;
            console.log(selectedHour);
            if (selectedHour > 24) {
                selectedHour = 0;
            }
            hourValue.textContent = selectedHour.toString();
        });
    };
    return Time;
}(Component));
export default Time;
//# sourceMappingURL=time.js.map