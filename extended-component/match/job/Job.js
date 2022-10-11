import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class Job extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-job">
                <div class="match-job-body">
                    <p class="fs-3">${data.name}</p>
                    <p>${data.sort}</p>
                    <p>${data.description}</p>
                </div>
                <div class="match-job-footer">
                    <span>수준: 6</span>
                    <ul>
                        <li>20.정보통신</li>
                        <li>01.정보기술</li>
                        <li>07.인공지능</li>
                    </ul>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

new Tab(document.querySelector('#job'));

getData("http://localhost:3000/job", (data) => {
    new Job(document.querySelector('#all'), data.all);
    // new Tab(document.querySelector('#subjects'));
});

getData("http://localhost:3000/job", (data) => {
    console.log(data);
    new Job(document.querySelector('#one'), data.one);
    // new Tab(document.querySelector('#subjects'));
});

