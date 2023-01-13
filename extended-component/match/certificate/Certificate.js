import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class Certificate extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-certificate">
                <a href="${data.certificate_id}">
                    <div><img src="${data.image_url}" alt="${data.image_alt}"></div>
                    <div class="match-certificate-body">
                        <p class="fs-4">${data.certificate_name}</p>
                        <a href="${data.qnetcert_url}">큐넷바로가기</a>
                        <span>주관: ${data.depincharge_name}</span>
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
