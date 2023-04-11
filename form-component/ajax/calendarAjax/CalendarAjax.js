import Calendar from "../../calendar/Calendar.js";

export default class CalendarAjax extends Calendar {
    setElements() {
        this.$element.classList.add("mykl-calendar");
        this.key = this.$element.querySelector('input').getAttribute("value").replace("$", "");
        const { options = {} } = this.$data;
        const { separator="-" } = options;
        const [year, month, date] = this.key ? this.$data[this.key].split(separator) : this.$data.data.split(separator) || ["", "", ""];
        this.year = year || new Date().getFullYear();
        this.month = month || this.setTwoDigits(new Date().getMonth() + 1);
        this.date =  date || this.setTwoDigits(new Date().getDate());
        this.mark = this.date;
        this.$element.querySelector('input').value = `${this.year}-${this.month}-${this.date}`;
        this.state = {}
        const div = document.createElement('div');
        div.classList.add('calendar-wrapper');
        this.$element.appendChild(div);
        this.$element.querySelector('input').setAttribute('value',`${this.year}-${this.month}-${new Date().getDate()}`);
        this.isShow = false;
    }
}
