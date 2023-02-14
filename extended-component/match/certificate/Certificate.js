import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class Certificate extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li data-id="${data.certificate_id}" class="mykl-media">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body" style="display: flex; flex-direction: column; justify-content: space-evenly; position: relative">
                    ${data.rate ? `<span style="position: absolute; top: 10px; right: 10px;">적중률: ${(data.rate * 100).toFixed(2)}%</span>` : ""}                     
                    <span class="fs-5" style="display: block">${data.certificate_name}</span>
                    <span class="lh-lg">${data.depincharge_name}</span>
                    <div style="margin-top: 40px">
                        <a href="${data.qnetcert_url}" class="text-primary" target="_blank" style="text-decoration: underline">큐넷바로가기</a>
                    </div>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}
// <a href="${data.certificate_id}" class="match_certificate">
// </a>

// getData("http://localhost:3000/certificate", (data) => {
//     new ShcoolnMajor(document.querySelector('#certificate'), data);
//     // new Tab(document.querySelector('#subjects'));
// });

