import Component from "../../basic/Component.js";

export default class Range extends Component {
    setElements() {
        [this.min, this.max, this.step] = ["min", "max", "step"].map(v => this.$element.querySelector(".input-left").getAttribute(v));
        this.minValue = this.$element.querySelector('.input-left').getAttribute("value");
        this.maxValue = this.$element.querySelector('.input-right').getAttribute("value");
    }

    setTemplate() {

        this.width =  this.$element.getBoundingClientRect().width;
        this.trackWidth = this.width - 15;
        this.totalSize = (this.max - this.min) / this.step;
        return `
         <div class="slider">
             <div class="track"></div>
             <div class="range"></div>
             <div class="thumb left"><span class="thumb-min"></span></div>
             <div class="thumb right"><span class="thumb-max"></span></div>
             ${[...new Array(this.totalSize)].map((v, i ) => {
                 if(i === 0) {
                     return;
                 }
                 const left = this.trackWidth * (this.totalSize * i)/ 100 + 'px';
                 return `<span class="step" style="left: ${left}"></span>`
        }).join("")}
         </div>
        `
    }

    render() {
        this.$element.innerHTML += this.setTemplate();
        const slider = this.$element.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');

        slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
        slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
        thumbLeft.style.left = `${this.trackWidth * (this.totalSize * (this.minValue / this.step)) / 100}px`;
        range.style.left = `${this.trackWidth * (this.totalSize * (this.minValue / this.step)) / 100}px`;
        range.style.right = `${this.trackWidth * (this.totalSize * ((this.max - this.maxValue) / this.step)) / 100}px`;
        thumbRight.style.left = `${this.trackWidth * (this.totalSize * (this.maxValue / this.step)) / 100}px`;
    }

    setEvents() {
        const slider = this.$element.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');

        inputLeft?.addEventListener('input', () => {
            this.setThumbLeft(inputLeft, inputRight, thumbLeft, range, slider);
        })

        inputRight?.addEventListener('input', () => {
            this.setThumbRight(inputLeft, inputRight, thumbRight, range, slider);
        })

        inputLeft?.addEventListener('change', () => {
            this.setThumbLeft(inputLeft, inputRight, thumbLeft, range, slider)
        })

        inputRight?.addEventListener('change', () => {
            this.setThumbRight(inputLeft, inputRight, thumbRight, range, slider);
        })

        this.$element.addEventListener('mousemove', (e) => {
            this.findClosestRange(e);
        })

    }

    setThumbLeft(inputLeft, inputRight, thumbLeft, range, slider) {
        inputLeft.value = Math.min(Number(inputLeft.value), Number(inputRight.value) - Number(inputLeft.step)).toString();

        const inputValue = Number(inputLeft.value);
        thumbLeft.style.left = `${this.trackWidth * (this.totalSize * (inputValue / this.step)) / 100}px`;
        range.style.left = `${this.trackWidth * (this.totalSize * (inputValue / this.step)) / 100}px`;
        slider.querySelector('.thumb-min').textContent = this.$element.querySelector(".input-left").value;
    }

    setThumbRight(inputLeft, inputRight, thumbRight, range, slider) {
        inputRight.value = Math.max(Number(inputRight.value), Number(inputLeft.value) + Number(inputRight.step)).toString();

        const inputValue = Number(inputRight.value);
        thumbRight.style.left = `${this.trackWidth * (this.totalSize * (inputValue / this.step)) / 100}px`;
        range.style.right = `${this.trackWidth - (this.trackWidth * (this.totalSize * (inputValue / this.step)) / 100)}px`;
        slider.querySelector('.thumb-max').textContent = this.$element.querySelector(".input-right").value;
    }

    findClosestRange(e) {
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');
        const x = e.clientX;
        const minXDiff = Math.abs(this.$element.querySelector('.thumb.left').style.left.replace("px", "") - x);
        const maxXDiff = Math.abs(this.$element.querySelector('.thumb.right').style.left.replace("px", "") - x);
        console.log(minXDiff, maxXDiff)
        if ( minXDiff > maxXDiff ) {
            inputLeft.style.zIndex = "5";
            inputRight.style.zIndex = "6";
        } else {
            inputLeft.style.zIndex = "6";
            inputRight.style.zIndex = "5";
        }
    }

}

