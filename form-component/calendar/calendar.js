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
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.setElements = function () {
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
        var template = document.createElement('template');
        var fragment = new DocumentFragment();
        template.innerHTML = "\n            <div class=\"clickedDate\">\n                <span>\n                    <span class=\"selected-year\">".concat(new Date().getFullYear(), "</span>\n                    -\n                    <span class=\"selected-month\">").concat(this.setTwoDigits(new Date().getMonth() + 1), "</span>\n                    -\n                    <span class=\"selected-day\">").concat(this.setTwoDigits(new Date().getDate()), "</span>\n                </span>\n                <button class=\"calendar-btn\">\uAE30\uAC04</button>\n            </div>                \n            <div class=\"calendar\">\n            </div>\n        ");
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    };
    Calendar.prototype.setTemplate = function () {
        var firstDay = new Date(this.year, this.month - 1, 1, 0, 0, 0).getDay();
        var lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
        var weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
        return "\n            <div class=\"yearMonth\">\n                <div class=\"year\">".concat(this.year, "</div>\n                <div class=\"month\">").concat(this.month, "</div>\n                <div class=\"calendar-button-group\">\n                    <button class=\"prev\">Prev</button>\n                    <button class=\"next\">Next</button>\n                </div>\n                </div>\n                <div class=\"weekday\">\n                  <div>\uC77C</div>\n                  <div>\uC6D4</div>\n                  <div>\uD654</div>\n                  <div>\uC218</div>\n                  <div>\uBAA9</div>\n                  <div>\uAE08</div>\n                  <div>\uD1A0</div>\n                </div>\n                ").concat(__spreadArray([], Array(weekSeq), true).map(function (_, i) {
            return "<div class=\"week".concat(i, "\">\n                        ").concat(__spreadArray([], Array(7), true).map(function (_, j) {
                var date = i * 7 + j - firstDay + 1;
                if (date < 1 || date > lastDate)
                    return "<div class=\"day\"></div>";
                return "<div class=\"day\">".concat(date, "</div>");
            }).join(''), "\n                    </div>");
        }).join(''));
    };
    Calendar.prototype.render = function () {
        this.$element.querySelector('.calendar').innerHTML = this.setTemplate();
    };
    Calendar.prototype.setEvents = function () {
        var _this = this;
        var _a;
        (_a = this.$element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (_a) {
            var _b;
            var target = _a.target;
            if (target.classList.contains('prev')) {
                console.log(_this.month);
                if (_this.month && _this.year) {
                    --_this.month;
                    if (_this.month === 0) {
                        _this.month = 12;
                        --_this.year;
                    }
                }
                _this.render();
            }
            if (target.classList.contains('next')) {
                if (_this.month && _this.year) {
                    ++_this.month;
                    if (_this.month === 13) {
                        _this.month = 1;
                        ++_this.year;
                    }
                }
                _this.render();
            }
            if (target.classList.contains('day')) {
                var formInput = document.querySelector('.form-input');
                console.log('hi', formInput);
                var day = target.textContent;
                formInput.value = "".concat(_this.year, "-").concat(_this.month < 10 ? "0".concat(_this.month) : _this.month, "-").concat(parseInt(day, 10) < 10 ? "0".concat(day) : day);
                _this.$element.querySelector('.selected-day').textContent = _this.setTwoDigits(parseInt(day, 10)).toString();
            }
            if (target.classList.contains('calendar-btn')) {
                (_b = _this.$element.querySelector('.calendar')) === null || _b === void 0 ? void 0 : _b.classList.toggle('show');
            }
        });
    };
    Calendar.prototype.setTwoDigits = function (value) {
        return value < 10 ? "0".concat(value) : value;
    };
    return Calendar;
}(Component));
export default Calendar;
//# sourceMappingURL=calendar.js.map