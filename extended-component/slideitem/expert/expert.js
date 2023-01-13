import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Expert extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item item-group">
                ${data.image ? `<img src="${data.image}" alt="">` : ""}
                ${data.title ? `<span class="title">${data.title}</span>` : ""}
                ${data.company ? `<span>${data.company}</span>` : ""}
                ${data.position ? `<span>${data.position}</span>` : ""}
                ${data.name ? `<span>${data.name}</span>` : ""}
            </li>
        `).join("");
    }

    render() {
        this.$element.querySelector('.slider-group').innerHTML = this.setTemplate();
    }
}

// getData("http://localhost:3000/imageSlide", (data) => new Expert(document.querySelector('#expert'), data.expert));