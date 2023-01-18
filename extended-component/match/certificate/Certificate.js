import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class Certificate extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <a href="${data.certificate_id}">
                    <div class="media-cover">
                        <img src="${data.image_url}" alt="${data.image_alt}">
                    </div>
                    <div class="media-body" style="display: flex; flex-direction: column; justify-content: space-evenly">
                        <span class="fs-5" style="display: block">${data.certificate_name}</span>
                        <span class="lh-lg">${data.depincharge_name}</a>
                        <div style="margin-top: 40px">
                            <a href="${data.qnetcert_url}" class="text-primary" style="text-decoration: underline">큐넷바로가기</a>
                        </div>
                    </div>
                </a>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData("http://localhost:3000/certificate", (data) => {
//     new ShcoolnMajor(document.querySelector('#certificate'), data);
//     // new Tab(document.querySelector('#subjects'));
// });
