import Component from "../../basic/Component.js";

export default class Range extends Component {
    setElements() {
        const {min, max, value, step} = this.$element.dataset;
        const template = document.createElement('template');
        const fragment = new DocumentFragment();

        template.innerHTML = `
            <input type="range" class="input-left" name="max" min=${min} max=${max} value=${value} step=${step}>
            <input type="range" class="input-right" name="max" min=${min} max=${max} value=${parseInt(max, 10) - parseInt(value, 10)} step=${step}>

            <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"></div>
                <div class="thumb right"></div>
            </div>`
        fragment.appendChild(template.content);
        this.$element?.appendChild(fragment);

        if(min &&  max && step && value) {
            for (let i = parseInt(min, 10)+parseInt(step, 10); i < parseInt(max, 10); i += parseInt(step, 10)) {
                const span = document.createElement('span');
                span.classList.add('step');
                span.style.left = `${i}%`
                this.$element.querySelector('.slider')?.appendChild(span)
            }
        }


        const slider = document.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        thumbLeft.style.left = `${value}%`;
        range.style.left = `${value}%`;
        range.style.right = `${parseInt(value, 10) -3}%`;
        thumbRight.style.right = `${parseInt(value, 10)  -3}%`;
    }

    setEvents() {
        const slider = document.querySelector('.slider');
        const range = slider?.querySelector('.range');
        const thumbLeft = slider.querySelector('.slider .thumb.left');
        const thumbRight = slider.querySelector('.thumb.right');
        const inputLeft = document.querySelector('.input-left');
        const inputRight = document.querySelector('.input-right');

        inputLeft?.addEventListener('input', (e) => {
            const [min, max] = [parseInt(inputLeft.min), parseInt(inputLeft.max)];
            inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - parseInt(inputLeft.step)).toString();

            const inputValue = parseInt(inputLeft.value, 10)
            const percent = ((inputValue - min) / (max-min)) * 100;
            thumbLeft.style.left = `${percent}%`;
            range.style.left = `${percent}%`;
        })

        inputRight?.addEventListener('input', (e) => {
            const [min, max] = [parseInt(inputRight.min), parseInt(inputRight.max)];
            inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + parseInt(inputRight.step)).toString();

            const inputValue = parseInt(inputRight.value, 10)
            const percent = ((inputValue - min) / (max-min)) * 100;
            thumbRight.style.right = `${100 - percent - 3}%`;
            range.style.right = `${100 - percent - 2}%`;
        })
    }
}

