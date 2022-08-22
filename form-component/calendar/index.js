import Calendar from "./Calendar.js";
import Time from "./Time.js";

document.querySelectorAll('.form-calendar').forEach(el => new Calendar(el));
document.querySelectorAll('.form-time').forEach(el => new Time(el))