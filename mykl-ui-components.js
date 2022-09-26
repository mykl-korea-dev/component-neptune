import CalendarComponent from './form-component/calendar/Calendar.js';
import TimeComponent from './form-component/calendar/Time.js';
import FileComponent from './form-component/file/File.js';
import RangeComponent from './form-component/range/Range.js';
import SelectComponent from "./form-component/select/Select.js";
import TextareaComponent from "./form-component/textarea/Textarea.js";
// import "./form-component/select/select.css";
import "./basic/common.css";
import "./form-component/range/range.css";
import "./ui-component/dropdown/dropdown.css";

export function Calendar(el) {
    return new CalendarComponent(el);
}

export function Time(el) {
    return new TimeComponent(el);
}

export function File(el) {
    return new FileComponent(el);
}

export function Select(el) {
    return new SelectComponent(el);
}

export function Range(el) {
    return new RangeComponent(el);
}

export function Textarea(el) {
    return new TextareaComponent(el);
}