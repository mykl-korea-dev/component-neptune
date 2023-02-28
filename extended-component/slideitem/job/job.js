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
                    <span class="fw-bold" style="display: block">${data.subclass_name}</span>
                    <span class="lh-lg" style="display: block">${data.class_name}</span>
                    <div class="mg10">
                        <span class="mykl-btn btn-primary-rev btn-round" style="pointer-events: none">연봉: ${data.class_level},000만원</span>                                            
                    </div>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.querySelector('.slide-group').innerHTML = this.setTemplate();
    }
}

