import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js"

export default class Subject extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-subject">
                <div><img src="https://via.placeholder.com/120" alt=""></div>
                <div class="match-subject-body">
                    <p class="title">${data.title}</p>
                    <p>${data.academy}</p>
        
                    <a href="${data.link}">${data.link}</a>
                    <span>${data.phone}</span>
                    <span>${data.location}</span>
                </div>
                <div class="match-subject-footer">
                    <span>한식조리</span>
                    <span>훈련일수: 25일</span>
                    <span>훈련시간: 100시간</span>
                    <span>훈련비용: 79500</span>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// new Tab(document.querySelector('#subjects'));

getData("http://localhost:3000/subject", (data) => {
    new Subject(document.querySelector('#subject'), data);
    // new Tab(document.querySelector('#subjects'));
});


