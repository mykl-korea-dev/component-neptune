import Component from "../../basic/Component.js";

export default class Star extends Component {
    setElements() {
        const { min , max, value } = this.$element.dataset;
        let starValue = Number(value);
        const fragment = new DocumentFragment();
        for (let i = parseInt(min, 10); i < parseInt(max, 10); i++) {
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

}

document.querySelectorAll('.star.ajax').forEach(el => new Star(el))