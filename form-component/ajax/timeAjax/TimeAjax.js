import Time from "../../js/Time.js";

export default class TimeAjax extends Time {
    setElements() {
        this.$element.classList.add("mykl-time");
        this.key = this.$element.querySelector('input').getAttribute("value").replace("$", "");
        const { options = {} } = this.$data;
        const { separator = ":"} = options;
        const [hour, minute] = this.key ? this.$data[this.key].split(separator) : this.$data.data.split(separator) || ["", ""];

        this.currentHour = hour || new Date().getHours();
        this.currentMin = minute || new Date().getMinutes();
        const div = document.createElement('div');
        div.classList.add('time-container');
        this.$element.appendChild(div);
    }
}