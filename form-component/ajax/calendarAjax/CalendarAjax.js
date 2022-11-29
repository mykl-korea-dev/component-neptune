import Component from "../../../basic/Component.js";
import Calendar from "../../calendar/Calendar.js";

export default class CalendarAjax extends Calendar {
    setElements() {
        this.$element.classList.add("mykl-calendar");
        const [year, month, date] = this.$data.date?.split("-") || ["" ,"" ,""];
        this.year = year || new Date().getFullYear();
        this.month = month || this.setTwoDigits(new Date().getMonth() + 1);
        this.date =  date || this.setTwoDigits(new Date().getDate());
        this.mark = this.date;
        this.$data.date && (this.$element.querySelector('input').value = this.$data.date);
        this.state = {}
        const div = document.createElement('div');
        div.classList.add('calendar-wrapper');
        this.$element.appendChild(div);
        this.$element.querySelector('input').value = `${this.year}-${this.month}-${new Date().getDate()}`;
        this.isShow = false;
    }
}
