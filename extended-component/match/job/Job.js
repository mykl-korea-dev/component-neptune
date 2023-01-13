import Component from "../../../basic/Component.js";

export default class Job extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="match-job">
                <div class="match-job-body">
                    <p class="fs-3">${data.class_name}</p>
                    <p>${data.subclass_name}</p>
                    <p>${data.class_description}</p>
                </div>
                <div class="match-job-footer">
                    <span>${data.class_level}</span>
                    <ul>
                        <li>${data.depth1}</li>
                        <li>${data.depth2}</li>
                        <li>${data.depth3}</li>
                    </ul>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// new Tab(document.querySelector('#job'));
//
// getData("http://localhost:3000/job", (data) => {
//     new Job(document.querySelector('#all'), data.all);
//     // new Tab(document.querySelector('#subjects'));
// });
//
// getData("http://localhost:3000/job", (data) => {
//     console.log(data);
//     new Job(document.querySelector('#one'), data.one);
//     // new Tab(document.querySelector('#subjects'));
// });

