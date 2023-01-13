import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class Major extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body">
                    <div>
                        <p class="title">${data.organization_name}</p>
                        <p>${data.department_name}</p>
                    </div>
                    <div>
                        <a href="${data.department_url}">${data.department_url}</a>
                        <span>${data.department_tel}</span>
                        <span>${data.department_address}</span>
                    </div> 
                </div>
                <div class="match-school-footer">
                    <span>${data.operation_name}</span>
                    <span>${data.providers_name}</span>
                    <span>${data.timedivision_name}</span>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

