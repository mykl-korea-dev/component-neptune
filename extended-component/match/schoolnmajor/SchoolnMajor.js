import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js";

export default class School extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-school">
                <div><img src="https://via.placeholder.com/120" alt=""></div>
                <div class="match-school-body">
                    <p class="title">${data.school}</p>
                    <p>${data.major}</p>
        
                    <a href="${data.link}">${data.link}</a>
                    <span>${data.phone}</span>
                    <span>${data.location}</span>
                </div>
                <div class="match-school-footer">
                    <span>${data.public}</span>
                    <span>${data.sort}</span>
                    <span>${data.time}</span>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// new Tab(document.querySelector('#subjects'));
//
// getData("http://localhost:3000/school", (data) => {
//     new School(document.querySelector('#all'), data.all);
//     // new Tab(document.querySelector('#subjects'));
// });
//
// getData("http://localhost:3000/school", (data) => {
//     console.log(data);
//     new School(document.querySelector('#one'), data.one);
//     // new Tab(document.querySelector('#subjects'));
// });

