import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";
import Range from "../../range/Range.js";

export default class RangeAjax extends Range {
    setElements() {
        const {min: strMin, max: strMax, minValue: strMinVal, maxValue: strMaxVal, step: strStep} = this.$data;
        const [min, max, minValue, maxValue, step] = [strMin, strMax, strMinVal, strMaxVal, strStep].map(val => Number(val));
        this.$element.classList.add('mykl-range');
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

    findClosestRange(e) {
        const { width } = this.$element.getBoundingClientRect();
        const inputLeft = this.$element.querySelector('.input-left');
        const inputRight = this.$element.querySelector('.input-right');

        const max = this.$data.max;
        const bounds = e.target.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const minValue = inputLeft.value;
        const maxValue = inputRight.value;
        const minX = width * ( minValue / max );
        const maxX = width * ( maxValue / max );
        const minXDiff = Math.abs( x - minX );
        const maxXDiff = Math.abs( x - maxX );
        // console.log(minXDiff, maxXDiff);
        if ( minXDiff > maxXDiff ) {
            inputLeft.style.zIndex = 20;
            inputRight.style.zIndex = 21;
        } else {
            inputLeft.style.zIndex = 21;
            inputRight.style.zIndex = 20;
        }
    }
}

// getData('http://localhost:3000/range', (data) =>
//     new RangeAjax(document.querySelector('.form-range-ajax'), data));
