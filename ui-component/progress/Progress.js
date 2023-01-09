import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class Progress extends Component {
    setElements() {
        const [strMin, strMax, strValue] = ['min', 'max', 'value'].map(v => getDataset(this.$element, v));
        const min = parseFloat(strMin) || 0;
        const max = parseFloat(strMax) || 100;
        const value = parseFloat(strValue) >= 0 ? parseFloat(strValue) : null;

        if(value !== 0 && !value) {
            throw new Error('data-value is not defined');
        }

        this.$element.style.width = `100%`;
        this.$element.querySelector('.progress-bar').style.width = `${(value / (max-min))* 100}%`;
    }

    setTemplate() {
        const value = parseFloat(getDataset(this.$element, 'value')).toFixed(1);
        const [intValue, checkFirstFloat] = value.split('.');
        return `<span class="progress-value">${checkFirstFloat == 0 ? intValue : value}</span>`
    }

    render() {
        this.$element.querySelector('.progress-bar').innerHTML = this.setTemplate();
        const [progressWidth, barWidth, valueWidth] = [this.$element, this.$element.querySelector('.progress-bar'), this.$element.querySelector('.progress-value')].map((el) => Math.round(el.getBoundingClientRect().width));
        if(barWidth + valueWidth >= progressWidth) {
            this.$element.querySelector('.progress-value').style.left = 'auto';
            this.$element.querySelector('.progress-value').style.right = 0;
        }
    }
}


