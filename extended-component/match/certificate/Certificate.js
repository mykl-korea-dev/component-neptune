import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class ShcoolnMajor extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-certificate">
                <div><img src="https://via.placeholder.com/120" alt=""></div>
                <div class="match-certificate-body">
                    <p class="fs-4">${data.title}</p>
        
                    <a href="${data.link}">큐넷바로가기</a>
                    <span>주관: ${data.department}</span>
                </div>
            </li>
        `).join('');
    }


render() {
        this.$element.innerHTML = this.setTemplate();
    }
}


getData("http://localhost:3000/certificate", (data) => {
    new ShcoolnMajor(document.querySelector('#certificate'), data);
    // new Tab(document.querySelector('#subjects'));
});
