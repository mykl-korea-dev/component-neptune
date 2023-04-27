import Component from "../../basic/Component.js";
import errorMessage from "../../basic/Error.js";

export default class Progress extends Component {
    setElements() {
        const inputEl = this.$element.querySelector('input');
        this.min = parseFloat(inputEl.getAttribute('min')) || 0;
        this.max = parseFloat(inputEl.getAttribute('max')) || 100;

        try {
            this.value = parseFloat(inputEl.getAttribute('value'));
        } catch (e) {
            errorMessage({
                message: "invalid progress value",
                component: "Progress",
                element: this.$element.id
            })
        }

        if(this.value !== 0 && !this.value) {
            errorMessage({
                message: "missing progress value",
                component: "Progress",
                element: this.$element.id
            });
            return;
        }

        this.$element.style.width = `100%`;
    }

    setTemplate() {
        // TODO : if) min = 5, max = 10, value = 6인 경우 progress value 정하기
        const value = (this.value).toFixed(1);
        const [intValue, checkFirstFloat] = value.split('.');

        return `
            <div class="progress-bar">
                <span class="progress-value">${+checkFirstFloat === 0 ? intValue : value}</span>    
            </div>
        `
    }

    render() {
        this.$element.innerHTML += this.setTemplate();
        this.init();
    }

    change({min=this.min, max=this.max, value = this.value}) {
        const inputEl = this.$element.querySelector('input')
        inputEl.setAttribute('min', min);
        inputEl.setAttribute('max', max);
        inputEl.setAttribute('value', value);
        this.min = min;
        this.max = max;
        this.value = value;
        this.init();
    }

    init() {
        this.$element.querySelector('.progress-bar').style.width = `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
        const value = this.value.toFixed(1);
        const [intValue, checkFirstFloat] = value.split('.');
        this.$element.querySelector('.progress-value').textContent = +checkFirstFloat === 0 ? intValue : value;
        const [progressWidth, barWidth, valueWidth] = [this.$element, this.$element.querySelector('.progress-bar'), this.$element.querySelector('.progress-value')].map((el) => Math.round(el.getBoundingClientRect().width));
        if(barWidth + valueWidth >= progressWidth) {
            this.$element.querySelector('.progress-value').style.left = 'auto';
            this.$element.querySelector('.progress-value').style.right = '0';
        }
    }
}


