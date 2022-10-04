import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Education extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item item-group">
                ${data.image ? `<img src="${data.image}" alt="">` : ""}
                ${data.title ? `<span class="title">${data.title}</span>` : ""}
                ${data.link ? `<a href="${data.link}">${data.name}</a>` : ""}
                ${data.location ? `<span>${data.location}</span>` : ""}
                ${data.department ? `<span class="stretch">${data.department}</span>`: ""}
            </li>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

getData("http://localhost:3000/imageSlide", (data) => new Education(document.querySelector('#education .slider-group'), data.education));