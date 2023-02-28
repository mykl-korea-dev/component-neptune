import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Certificate extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item mykl-media media-vertical">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body" style="display: flex; flex-direction: column; justify-content: space-evenly; position: relative">
                    <span class="fw-bold" style="display: block">${data.certificate_name}</span>
                    <span class="lh-lg">${data.depincharge_name}</span>
                    <div class="mg10">
                        <a href="${data.qnetcert_url}" class="text-primary" target="_blank" style="text-decoration: underline">시행기관 자격정보 &gt;</a>
                    </div>
                </div>
            </li>
        `).join("");
    }

    render() {
        this.$element.querySelector('.slide-group').innerHTML = this.setTemplate();
    }
}

