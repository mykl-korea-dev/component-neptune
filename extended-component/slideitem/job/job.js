import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Job extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item item-group">
                ${data.image ? `<img src="${data.image}" alt="">` : ""}
                ${data.title ? `<span class="title">${data.title}</span>` : ""}
                ${data.department ? `<span>${data.department}</span>` : ""}
                ${data.link ? `<a href="${data.link}">시행기관 자격정보</a>` : ""}
            </li>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

getData("http://localhost:3000/imageSlide", (data) => new Job(document.querySelector('#job .slider-group'), data.job));