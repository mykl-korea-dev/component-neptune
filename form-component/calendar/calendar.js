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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Component from "../../basic/component.js";
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(element) {
        var _this = _super.call(this, element) || this;
        _this.year = new Date().getFullYear();
        _this.month = new Date().getMonth() + 1;
        _this.setTemplate();
        _this.setEvents();
        return _this;
    }
    Calendar.prototype.setTemplate = function () {
        if (typeof this.year === "undefined") {
            var buttonEl = document.createElement('button');
            buttonEl.classList.add('calendar-btn');
            buttonEl.textContent = '기간';
            this.$element.appendChild(buttonEl);
            return;
        }
        var firstDay = new Date(this.year, this.month - 1, 1, 0, 0, 0).getDay();
        var lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
        var weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
        console.log(firstDay, weekSeq);
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = "\n            <div class=\"calendar show\">\n                <div class=\"yearMonth\">\n                  <div class=\"year\">".concat(this.year, "</div>\n                  <div class=\"month\">").concat(this.month, "</div>\n                  <div class=\"calendar-button-group\">\n                    <button class=\"prev\">Prev</button>\n                    <button class=\"next\">Next</button>\n                  </div>\n                </div>\n                <div class=\"weekday\">\n                  <div class=\"sunday\">\uC77C</div>\n                  <div>\uC6D4</div>\n                  <div>\uD654</div>\n                  <div>\uC218</div>\n                  <div>\uBAA9</div>\n                  <div>\uAE08</div>\n                  <div class=\"saturday\">\uD1A0</div>\n                </div>\n                ").concat(__spreadArray([], Array(weekSeq), true).map(function (_, i) {
            return "<div class=\"week".concat(i, "\">\n                        ").concat(__spreadArray([], Array(7), true).map(function (_, j) {
                var date = i * 7 + j - firstDay + 1;
                if (date < 1 || date > lastDate)
                    return "<div class=\"day\"></div>";
                return "<div class=\"day\">".concat(date, "</div>");
            }).join(''), "\n                    </div>");
        }).join(''), "\n              </div>\n            ");
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    };
    Calendar.prototype.setEvents = function () {
        var _this = this;
        if (typeof this.year === "undefined") {
            return;
        }
        var parent = this.$element.parentElement;
        var calendar = parent === null || parent === void 0 ? void 0 : parent.querySelector('.calendar');
        var calendarBtn = this.$element.querySelector('.calendar-btn');
        var calendarButtonGroup = parent === null || parent === void 0 ? void 0 : parent.querySelector('.calendar-button-group');
        var prevBtn = calendarButtonGroup === null || calendarButtonGroup === void 0 ? void 0 : calendarButtonGroup.querySelector('.prev');
        var nextBtn = calendarButtonGroup === null || calendarButtonGroup === void 0 ? void 0 : calendarButtonGroup.querySelector('.next');
        calendarBtn === null || calendarBtn === void 0 ? void 0 : calendarBtn.addEventListener('click', function (e) {
            calendar === null || calendar === void 0 ? void 0 : calendar.classList.toggle('show');
        });
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
            var _a;
            --_this.month;
            if (_this.month === 0) {
                _this.month = 12;
                --_this.year;
            }
            (_a = calendar === null || calendar === void 0 ? void 0 : calendar.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(calendar);
            _this.setTemplate();
            _this.setEvents();
        });
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function () {
            var _a;
            ++_this.month;
            if (_this.month === 13) {
                _this.month = 1;
                ++_this.year;
            }
            (_a = calendar === null || calendar === void 0 ? void 0 : calendar.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(calendar);
            _this.setTemplate();
            _this.setEvents();
        });
        parent === null || parent === void 0 ? void 0 : parent.addEventListener('click', function (e) {
            if (e.target.classList.contains('day')) {
                var formInput = document.querySelector('.form-input');
                // console.log('hi', formInput)
                var day = e.target.textContent;
                formInput.value = "".concat(_this.year, "-").concat(_this.month < 10 ? "0".concat(_this.month) : _this.month, "-").concat(parseInt(day, 10) < 10 ? "0".concat(day) : day);
            }
        });
    };
    return Calendar;
}(Component));
export default Calendar;
//# sourceMappingURL=calendar.js.map