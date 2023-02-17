import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import Progress from '../../progress/Progress.js';

export default class ProgressAjax extends Progress {
    setElements() {
        this.$element.classList.add("mykl-progress");
        const {data, options} = this.$data;
        let { min: minKey = "min", max: maxKey ="max", value: valueKey="value" } = options;
        const [min = 0, max = 100, value = 0] = [minKey, maxKey, valueKey].map(key => parseFloat(data[key]));
        this.$element.style.width = `100%`;
        this.$element.querySelector('.progress-bar').style.width = `${Number(value) / (Number(max)-Number(min))* 100}%`;
    }

    setTemplate() {
        const value = parseFloat(this.$data.data[this.$data.options.value]).toFixed(1);
        const [intValue, checkFirstFloat] = value.split('.');
        return `<span class="progress-value">${checkFirstFloat == 0 ? intValue : value}</span>`
    }

    render() {
        super.render();
    }
}


