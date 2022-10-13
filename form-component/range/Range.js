import Component from "../../basic/Component.js";

export default class Range extends Component {
    setElements() {
        const {min: strMin, max: strMax, minValue: strMinVal, maxValue: strMaxVal, step: strStep} = this.$element.dataset;
        const [min, max, minValue, maxValue, step] = [strMin, strMax, strMinVal, strMaxVal, strStep].map(val => Number(val));
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
        //
        // inputLeft?.addEventListener('change', (event) => {
        //     // this.locked = true;
        //
        //     const bounds = event.target.getBoundingClientRect();
        //     const x = event.clientX - bounds.left;
        //     console.log('left', bounds.left, event, event.clientX, x, thumbLeft.style.left);
        //     const thumbWidth = thumbRight.getBoundingClientRect().width;
        //     console.log(parseInt(thumbLeft.style.left, 10) + parseInt(thumbWidth, 10));
        //
        //     if(x > parseInt(thumbLeft.style.left, 10) + parseInt(thumbWidth, 10)) {
        //         inputLeft.style.zIndex = 20;
        //         inputRight.style.zIndex = 21;
        //     } else {
        //         inputLeft.style.zIndex = 21;
        //         inputRight.style.zIndex = 20;
        //     }
        // })
        //
        inputRight?.addEventListener('mousedown', (event) => {
            // this.locked = true;

            const bounds = event.target.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            console.log('right', bounds, bounds.left, event, event.clientX, x, thumbRight.style.left)

            if(x < parseInt(thumbRight.style.left, 10)) {
                inputLeft.style.zIndex = 21;
                inputRight.style.zIndex = 20;
            } else {
                inputLeft.style.zIndex = 20;
                inputRight.style.zIndex = 21;
            }
        })
        //
        // inputLeft?.addEventListener('mousemove', () => {
        //     if(this.locked) {
        //         return;
        //     }
        //     // console.log(this.locked)
        //     console.log('left mousemove')
        //     const [min, max, step] = [Number(inputLeft.min), Number(inputLeft.max), Number(inputLeft.step)];
        //     inputLeft.value = Math.min(Number(inputLeft.value), Number(inputRight.value) - Number(inputLeft.step)).toString();
        //
        //     const inputValue = Number(inputLeft.value, 10)
        //     thumbLeft.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
        //     range.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
        //     slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
        //
        //     // this.locked = true;
        //     // const bounds = event.target.getBoundingClientRect();
        //     // const x = event.target.clientLeft - bounds.left;
        //     // console.log(bounds.left, event, event.target.clientLeft, x)
        //     //
        //     // if(x <= thumbLeft.left) {
        //     //     inputLeft.style.zIndex = 21;
        //     //     inputRight.style.zIndex = 20;
        //     // } else {
        //     //     inputLeft.style.zIndex = 20;
        //     //     inputRight.style.zIndex = 21;
        //     // }
        //
        // })
        //
        // inputRight?.addEventListener('mousemove', (event) => {
        //     if(this.locked) {
        //         return;
        //     }
        //     // console.log(this.locked)
        //     console.log('right mousemove')
        //
        //     const [min, max, step] = [Number(inputRight.min), Number(inputRight.max), Number(inputRight.step)];
        //     inputRight.value = Math.max(Number(inputRight.value), Number(inputLeft.value) + Number(inputRight.step)).toString();
        //
        //
        //     const inputValue = Number(inputRight.value, 10)
        //     thumbRight.style.left = `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
        //     range.style.right = `${trackWidth - (trackWidth * ((max - min) / step * (inputValue / step)) / 100)}px`;
        //     slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        // })
        // // inputLeft?.addEventListener('mouseleave', () => {
        // //     this.locked = true;
        // // })
        // //
        // // inputRight?.addEventListener('mouseleave', () => {
        // //     this.locked = true;
        // // })
        //
        //
        // inputLeft?.addEventListener('mouseup', () => {
        //     this.locked = true;
        // })
        //
        // inputRight?.addEventListener('mouseup', () => {
        //     this.locked = true;
        // })
    }

    setThumbLeft() {
        const { width } = this.$element.getBoundingClientRect();
        const trackWidth = width - 15;
        return `${trackWidth * ((max - min) / step * (inputValue / step)) / 100}px`;
    }

    setThumbRight() {

    }
}


