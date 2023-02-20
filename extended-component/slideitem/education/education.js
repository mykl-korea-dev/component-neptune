import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class Education extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="slide-item mykl-media media-vertical">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body" style="position: relative">
                    <div>
                        <h3 class="fs-5 fw-bold mg10">${data.name}</h3>
                        <p>${data.institution_name}</p>
                        <p style="white-space: break-spaces">${data.address}</p>
                    </div>
                    <span class="mg10 mykl-btn btn-primary-rev btn-round">${data.ncs_name}</span>
               </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.querySelector('.slide-group').innerHTML = this.setTemplate();
    }
}