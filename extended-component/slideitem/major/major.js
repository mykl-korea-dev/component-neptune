import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import ImageSlide from "../../../component-set/imageSlide/ImageSlide.js";

export default class Major extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item mykl-media media-vertical">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body" style="position: relative">
                    <p class="fw-bold">${data.organization_name}</p>
                    <p class="lh-lg">${data.department_name}</p>
                    <div class="mg10">
                    <a href="https://${data.department_url}" class="text-primary" target="_blank" style="text-decoration: underline; display: inline-block;">학과정보 &gt;</a>                    
                    </div>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.querySelector('.slide-group').innerHTML = this.setTemplate();
    }
}