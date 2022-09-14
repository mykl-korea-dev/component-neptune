import Component from "./Component.js";

export default class Range extends Component {
    setElements() {
        const {min: strMin, max: strMax, minValue: strMinVal, maxValue: strMaxVal, step: strStep} = this.$element.dataset;
        const [min, max, minValue, maxValue, step] = [strMin, strMax, strMinVal, strMaxVal, strStep].map(val => parseInt(val, 10));
        this.$element.innerHTML = `
            <input type="range" class="input-left" name="max" min=${min} max=${max} value=${minValue} step=${step}>
            <input type="range" class="input-right" name="max" min=${min} max=${max} value=${maxValue} step=${step}>

            <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"><span class="thumb-min"></span></div>
                <div class="thumb right"><span class="thumb-max"></span></div>
            </div>`;

        const [ rangeWidth, thumbWidth ] = [this.$element, this.$element.querySelector('.thumb')].map(el => el.getBoundingClientRect().width);
        const trackWidth = rangeWidth - thumbWidth;
        const totalSize = (max - min) / step;
        if((min >= 0) &&  max && step && minValue) {
            for (let i = 1; i < totalSize; i += 1) {
                const span = document.createElement('span');
                span.classList.add('step');
                span.style.left = `${trackWidth * ((max - min) / step * i)/ 100}px`;
                this.$element.querySelector('.slider')?.appendChild(span)
            }
        }

        const slider = this.$element.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
        slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        thumbLeft.style.left = `${trackWidth * ((max - min) / step * (minValue / step)) / 100}px`;
        range.style.left = `${trackWidth * ((max - min) / step * (minValue / step)) / 100}px`;
        range.style.right = `${trackWidth * ((max - min) / step * ((max - maxValue) / step)) / 100}px`;
        thumbRight.style.left = `${trackWidth * ((max - min) / step * (maxValue / step)) / 100}px`;
    }

    setEvents() {
        const [ rangeWidth, thumbWidth ] = [this.$element, this.$element.querySelector('.thumb')].map(el => el.getBoundingClientRect().width);
        const trackWidth = rangeWidth - thumbWidth;
        const slider = this.$element.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');
        inputLeft?.addEventListener('input', () => {
            const [min, max, step] = [parseInt(inputLeft.min), parseInt(inputLeft.max), parseInt(inputLeft.step)];
            inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();

            const inputValue = parseInt(inputLeft.value, 10)
            thumbLeft.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;

        })

        inputRight?.addEventListener('input', () => {
            const [min, max, step] = [parseInt(inputRight.min), parseInt(inputRight.max), parseInt(inputRight.step)];
            inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();

            const inputValue = parseInt(inputRight.value, 10)
            thumbRight.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.right = `${trackWidth - (trackWidth * ((max - min) / step * (inputValue / step)) / 100)}px`;
            slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        })
    }

    setThumbLeft() {
        const [ rangeWidth, thumbWidth ] = [this.$element, this.$element.querySelector('.thumb')].map(el => el.getBoundingClientRect().width);
        const trackWidth = rangeWidth - thumbWidth;
        return `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
    }

    setThumbRight() {

    }
}

