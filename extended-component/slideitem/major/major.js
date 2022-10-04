import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Education extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item item-group">
                ${data.image ? `<img src="${data.image}" alt="">` : ""}
                <div>
                ${data.title ? `<span class="title">${data.title}</span>` : ""}
                ${data.link ? `<a href="${data.link}">학과정보</a>` : ""}
                </div>                
                <div>
                    ${data.after ? `<span>졸업 후 진출분야</span>` : ""}
                    ${data.after ? `<ul>${data.after.map(data => `<li>${data}</li>`).join("")}</ul>`: ""}
                </div>
            </li>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

getData("http://localhost:3000/imageSlide", (data) => new Education(document.querySelector('#major .slider-group'), data.major));