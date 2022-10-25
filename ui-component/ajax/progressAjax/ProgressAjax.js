import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import Progress from '../../progress/Progress.js';

export default class ProgressAjax extends Progress {
    setElements() {
        this.$element.classList.add("mykl-progress");
        let {min, max, value} = this.$data;
        min = parseFloat(min) || 0;
        max = parseFloat(max) || 100;
        value = parseFloat(value) || null;

        this.$element.style.width = `100%`;
        this.$element.querySelector('.progress-bar').style.width = `${Number(value) / (Number(max)-Number(min))* 100}%`;
    }

    setTemplate() {
        const value = parseFloat(this.$data.value).toFixed(1);
        const [intValue, checkFirstFloat] = value.split('.');
        return `<span class="progress-value">${checkFirstFloat == 0 ? intValue : value}</span>`
    }

    render() {
        super.render();
    }
}

// getData("http://localhost:3000/progress", (data) => new ProgressAjax(document.querySelector('.progress-ajax'), data));

