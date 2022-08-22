import Component from "../../basic/component.js";

export default class Range<T> extends Component<T> {
    constructor(element: Element) {
        super(element);
    }


    setElements() {
        const template = document.createElement('template');
        const fragment = new DocumentFragment();
        const {min, max, value, step} = (this.$element as HTMLElement).dataset
        template.innerHTML = `
            <input type="range" class="input-left" name="max" min=${min} max=${max} value=${value} step=${step}>
            <input type="range" class="input-right" name="max" min=${min} max=${max} value=${parseInt(max!, 10) - parseInt(value!, 10)} step=${step}>

            <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"></div>
                <div class="thumb right"></div>
            </div>`
        fragment.appendChild(template.content);
        this.$element?.appendChild(fragment);
        console.log(min, max, step, value)
        if(min &&  max && step && value) {
            for (let i = parseInt(min, 10)+parseInt(step, 10); i < parseInt(max, 10); i += parseInt(step, 10)) {
                const span = document.createElement('span');
                span.classList.add('step');
                span.style.left = `${i}%`
                this.$element.querySelector('.slider')?.appendChild(span)
            }
        }


        const slider = document.querySelector('.slider') as HTMLElement;
        const range = slider?.querySelector('.range') as HTMLElement;
        const thumbLeft = slider.querySelector('.slider .thumb.left') as HTMLElement;
        const thumbRight = slider.querySelector('.thumb.right') as HTMLElement;
        thumbLeft.style.left = `${value!}%`;
        range.style.left = `${value!}%`;
        range.style.right = `${parseInt(value!, 10) -3}%`;
        thumbRight.style.right = `${parseInt(value!, 10)  -3}%`;
    }



    setEvents() {
        const slider = document.querySelector('.slider') as HTMLElement;
        const range = slider?.querySelector('.range') as HTMLElement;
        const thumbLeft = slider.querySelector('.slider .thumb.left') as HTMLElement;
        const thumbRight = slider.querySelector('.thumb.right') as HTMLElement;
        const inputLeft = document.querySelector('.input-left') as HTMLInputElement;
        const inputRight = document.querySelector('.input-right') as HTMLInputElement;

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

