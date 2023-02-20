import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Job extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item mykl-media media-vertical">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body">
                    <span class="fs-5" style="display: block">${data.subclass_name}</span>
                    <span class="lh-lg">${data.class_name}</span>
                    <span>연봉: ${data.class_level},000만원</span>                    
                    <p style="margin-top: 40px">${data.class_description}</p>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.querySelector('.slide-group').innerHTML = this.setTemplate();
    }
}

