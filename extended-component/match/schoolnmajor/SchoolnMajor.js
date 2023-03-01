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
                <div class="media-body" style="position: relative">
                    ${data.rate ? `<span style="position: absolute; top: 10px; right: 10px;">적중률: ${(data.rate * 100).toFixed(2)}%</span>` : ""}                    
                    <p class="fs-5 fw-bold text-dark">${data.organization_name}</p>
                    <p class="lh-lg">${data.department_name}</p>
                    <div style="display: flex; margin: 20px 0" class="mg20 pd10 lh-sm">
                        <div style="display: flex; flex-direction: column; padding-right: 20px; border-right: 1px solid #bdbdbd">
                            <span>${data.operation_name}</span>
                            <span>${data.providers_name}</span>
                            <span>${data.timedivision_name}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; margin-left: 10px">
                            <a href="https://${(data.department_url).replace(/http[s]?:\/\//,'')}" target="_blank">${data.department_url}</a>
                            <span>${data.department_tel}</span>
                            <span>${data.department_address}</span>
                        </div>
                    </div>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}
