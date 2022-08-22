import Component from "../../basic/component.js";

export default class Star<T> extends Component<T> {
    setElements() {
        const { min , max, value } = (this.$element as HTMLElement).dataset;
        let starValue = Number(value!);
        const fragment = new DocumentFragment();
        for (let i = parseInt(min!, 10); i < parseInt(max!, 10); i++) {
            const template = document.createElement('template');
            template.innerHTML = `
                ${starValue >= 1 ? `<div class="star-fill"></div>` : ''}
                ${starValue == 0.5 ? `<div class="star-half"></div>` : ''}
                ${starValue <= 0 ? `<div class="star-empty"></div>` : ''}
            `
            fragment.appendChild(template.content);
            starValue -= 1;
        }
        this.$element.appendChild(fragment);
    }

    setEvents() {
        super.setEvents();
    }
}

document.querySelectorAll('.star.ajax').forEach(el => new Star(el))