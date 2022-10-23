import Component from "../../basic/Component.js";

export default class Range extends Component {
    setElements() {
        // const {min: strMin, max: strMax, minValue: strMinVal, maxValue: strMaxVal, step: strStep} = this.$element.dataset;
        // let [min, max, minValue, maxValue, step] = [strMin, strMax, strMinVal, strMaxVal, strStep].map(val => Number(val));
        // for (let i in [min, max, minValue, maxValue, step]) {
        //     return `str${i}` = this.getDataset(this.$element, i);
        //
        // }
        let [min, max, minValue, maxValue, step] = ["min", "max", "minValue", "maxValue", "step"].map(val => Number(this.getDataset(this.$element, val)));

        console.log(min, max, minValue, maxValue, step);
        this.$element.innerHTML = `
            <input type="range" class="input-left" name="max" min=${min} max=${max} value=${minValue} step=${step}>
            <input type="range" class="input-right" name="max" min=${min} max=${max} value=${maxValue} step=${step}>

            <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"><span class="thumb-min"></span></div>
                <div class="thumb right"><span class="thumb-max"></span></div>
            </div>`;

        const { width } = this.$element.getBoundingClientRect();
        const trackWidth = width - 15;
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
        this.locked = false;
    }

    setEvents() {
        const { width } = this.$element.getBoundingClientRect();
        const trackWidth = width - 15;
        const slider = this.$element.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');

        inputLeft?.addEventListener('input', () => {
            const [min, max, step] = [Number(inputLeft.min), Number(inputLeft.max), Number(inputLeft.step)];
            inputLeft.value = Math.min(Number(inputLeft.value), Number(inputRight.value) - Number(inputLeft.step)).toString();

            const inputValue = Number(inputLeft.value, 10)
            thumbLeft.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;

        })

        inputRight?.addEventListener('input', () => {
            const [min, max, step] = [Number(inputRight.min), Number(inputRight.max), Number(inputRight.step)];
            inputRight.value = Math.max(Number(inputRight.value), Number(inputLeft.value) + Number(inputRight.step)).toString();

            const inputValue = Number(inputRight.value, 10)
            thumbRight.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.right = `${trackWidth - (trackWidth * ((max - min) / step * (inputValue / step)) / 100)}px`;
            slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        })

        inputLeft?.addEventListener('change', () => {
            const [min, max, step] = [Number(inputLeft.min), Number(inputLeft.max), Number(inputLeft.step)];
            inputLeft.value = Math.min(Number(inputLeft.value), Number(inputRight.value) - Number(inputLeft.step)).toString();

            const inputValue = Number(inputLeft.value, 10)
            thumbLeft.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;

        })

        inputRight?.addEventListener('change', () => {
            const [min, max, step] = [Number(inputRight.min), Number(inputRight.max), Number(inputRight.step)];
            inputRight.value = Math.max(Number(inputRight.value), Number(inputLeft.value) + Number(inputRight.step)).toString();

            const inputValue = Number(inputRight.value, 10)
            thumbRight.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
            range.style.right = `${trackWidth - (trackWidth * ((max - min) / step * (inputValue / step)) / 100)}px`;
            slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        })

        this.$element.addEventListener('mousemove', (e) => {
            this.findClosestRange(e);
        })

    }

    setThumbLeft() {
        const { width } = this.$element.getBoundingClientRect();
        const trackWidth = width - 15;
        return `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
    }

    setThumbRight() {

    }

    findClosestRange(e) {
        const { width } = this.$element.getBoundingClientRect();
        const slider = this.$element.querySelector('.slider');
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');

        const max = this.getDataset(this.$element, 'max');
        const bounds = e.target.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const minValue = inputLeft.value;
        const maxValue = inputRight.value;
        const minX = width * ( minValue / max );
        const maxX = width * ( maxValue / max );
        const minXDiff = Math.abs( x - minX );
        const maxXDiff = Math.abs( x - maxX );
        console.log(minXDiff, maxXDiff);
        if ( minXDiff > maxXDiff ) {
            inputLeft.style.zIndex = 20;
            inputRight.style.zIndex = 21;
        } else {
            inputLeft.style.zIndex = 21;
            inputRight.style.zIndex = 20;
        }
    }

    getDataset(element, name) {
        if(element.dataset) {
            return element.dataset[name] || '';
        } else if(element.getAttribute) {
            return element.getAttribute(`data-${this.spinalCase(name)}`) || '';
        }
    }

    spinalCase(str) {
        // Create a variable for the white space and underscores.
        const regex = /\s+|_+/g;

        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
        // Replace space and underscore with -
        return str.replace(regex, "-").toLowerCase();
    }
}

// document.querySelectorAll('.mykl-range').forEach(el => new Range(el));

