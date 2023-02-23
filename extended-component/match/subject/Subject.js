import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js"

export default class Subject extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <div class="media-body" style="position: relative">
                    ${data.rate ? `<span style="position: absolute; top: 10px; right: 10px;">적중률: ${(data.rate * 100).toFixed(2)}%</span>` : ""}                    
                    <div>
                        <h3 class="fs-5 fw-bold mg10">${data.name}</h3>
                        <p>${data.institution_name}</p>
                    </div>
                    <span class="mg10 mykl-btn btn-primary-rev btn-round">${data.ncs_name}</span>
                    <div style="display: flex">
                        <div style="display:flex; flex-shrink: 0; flex-direction: column; border-right: 1px solid #bdbdbd; padding-right: 10px; margin-right: 20px;">
                            <span>훈련일수: ${data.training_days}일</span>
                            <span>훈련시간: ${data.training_time || 0}시간</span>
                            <span>훈련비용: ${data.training_cost || 0}</span>
                        </div> 
                        <div style="display:flex; flex-direction: column;">
                            <a href="${data.institution_url}" style="text-decoration: underline" class="text-primary">${data.institution_url}</a>
                            <span>${data.institution_tel}</span>
                            <p style="white-space: break-spaces">${data.address}</p>
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

// new Tab(document.querySelector('#subjects'));

// getData("http://localhost:3000/subject", (data) => {
//     new Subject(document.querySelector('#subject'), data);
//     // new Tab(document.querySelector('#subjects'));
// });


