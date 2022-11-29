import Time from "../../time/Time.js";

export default class TimeAjax extends Time {
    setElements() {
        const typeHourStart = [...this.$data?.type||[]].findIndex(v => v === "h");
        const typeMinStart = [...this.$data?.type||[]].findIndex(v => v === "m");
        const hour = this.$data.time ? this.$data.type ? this.$data.time.slice(typeHourStart, typeHourStart + 2) : this.$data.time.split(":")[0] : "";
        const minute = this.$data.time ? this.$data.type ? this.$data.time.slice(typeMinStart, typeMinStart + 2) : this.$data.time.split(":")[1] : "";
        this.currentHour = hour || new Date().getHours();
        this.currentMin = minute || new Date().getMinutes();
        const div = document.createElement('div');
        div.classList.add('time-container');
        this.$element.appendChild(div);
    }
}