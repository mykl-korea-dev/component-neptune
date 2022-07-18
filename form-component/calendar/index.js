import Calendar from "./calendar.js";
import Time from "./time.js";
document.querySelectorAll('.form-calendar').forEach(function (el) { return new Calendar(el); });
document.querySelectorAll('.form-time').forEach(function (el) { return new Time(el); });
//# sourceMappingURL=index.js.map