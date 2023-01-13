import Component from "../../../basic/Component.js";
import Tab from "../../../ui-component/tab/tab.js";
import {getData} from "../../../basic/utils.js"

export default class Subject extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body">
                    <div>
                        <p class="title">${data.course_name}</p>
                        <p>${data.institution_name}</p>
                    </div>
                    <div>
                        <a href="${data.course_url}">${data.course_url}</a>
                        <span>${data.institution_tel}</span>
                        <span>${data.institution_addr}</span>
                    </div> 
                </div>
                <div class="match-school-footer">
                    <span>${data.ncs_name}</span>
                    <span>${data.training_days}</span>
                    <span>${data.training_time}</span>
                    <span>${data.training_cost}</span>
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


