import Calendar from "./calendar.js";
import Time from "./time.js";

document.querySelectorAll('.form-calendar').forEach(el => new Calendar(el));
document.querySelectorAll('.form-time').forEach(el => new Time(el))