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
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = "\n        <p class=\"selected-time\"><span>".concat(this.setTwoDigits(new Date().getHours()), "</span> : <span>").concat(this.setTwoDigits(new Date().getMinutes()), "</span></p>\n        <div class=\"time-wrapper\">\n            <div class=\"hour-box\">\n                <button class=\"hour-selected\">").concat(this.setTwoDigits(new Date().getHours()), "</button>\n                <div class=\"hour\">\n                </div>\n            </div>\n            <span>:</span>\n            <div class=\"minute-box\">\n                <button class=\"minute-selected\">").concat(this.setTwoDigits(new Date().getMinutes()), "</button>\n                <div class=\"minute\">\n                </div>\n            </div>\n        </div>\n        <button class=\"toggle-button\">\uC2DC\uAC04</button>\n        ");
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
        var timeWrapper = this.$element.querySelector('.time-wrapper');
        var _a = this.$element.dataset, start = _a.start, end = _a.end, min = _a.min, hour = _a.hour;
        var _b = start.split(':').map(function (el) { return parseInt(el, 10); }), startHour = _b[0], startMin = _b[1];
        var _c = end.split(':').map(function (el) { return parseInt(el, 10); }), endHour = _c[0], endMin = _c[1];
        var hourDiv = document.createElement('div');
        for (var i = startHour; i <= endHour; i += parseInt(hour, 10)) {
            var template_1 = document.createElement('template');
            template_1.innerHTML = "<div>".concat(this.setTwoDigits(i), "</div>");
            hourDiv.appendChild(template_1.content);
        }
        timeWrapper.querySelector('.hour').innerHTML = hourDiv.innerHTML;
        var minDiv = document.createElement('div');
        for (var i = 0; i < 60; i += parseInt(min, 10)) {
            var template_2 = document.createElement('template');
            template_2.innerHTML = "<div>".concat(this.setTwoDigits(i), "</div>");
            minDiv.appendChild(template_2.content);
        }
        timeWrapper.querySelector('.minute').innerHTML = minDiv.innerHTML;
    };
    Time.prototype.setEvents = function () {
        var _a;
        var timeWrapper = this.$element.querySelector('.time-wrapper');
        var selectedTime = this.$element.querySelector('.selected-time');
        var hourSelector = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.hour-selected');
        var minuteSelector = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.minute-selected');
        var hourBox = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.hour');
        var minuteBox = timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.querySelector('.minute');
        (_a = this.$element.querySelector('.toggle-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            timeWrapper === null || timeWrapper === void 0 ? void 0 : timeWrapper.classList.toggle('show');
            selectedTime === null || selectedTime === void 0 ? void 0 : selectedTime.classList.toggle('hide');
            hourBox === null || hourBox === void 0 ? void 0 : hourBox.classList.add('show');
            minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.classList.add('show');
        });
        hourBox === null || hourBox === void 0 ? void 0 : hourBox.addEventListener('click', function (_a) {
            var target = _a.target;
            target.classList.add('selected');
            hourSelector.textContent = target.textContent;
            hourBox === null || hourBox === void 0 ? void 0 : hourBox.classList.remove('show');
        });
        minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.addEventListener('click', function (_a) {
            var target = _a.target;
            target.classList.add('selected');
            minuteSelector.textContent = target.textContent;
            minuteBox === null || minuteBox === void 0 ? void 0 : minuteBox.classList.remove('show');
        });
    };
    Time.prototype.setTwoDigits = function (num) {
        return num < 10 ? '0' + num : num;
    };
    return Time;
}(Component));
export default Time;
//# sourceMappingURL=time.js.map