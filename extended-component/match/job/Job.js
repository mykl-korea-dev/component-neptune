import Component from "../../../basic/Component.js";

export default class Job extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <div class="media-body">
                    ${data.rate ? `<span class="lh-lg">적중률: ${(data.rate * 100).toFixed(2)}%</span>` : ""}                    
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <span class="fs-5" style="display: block">${data.subclass_name}</span>
                            <span class="lh-lg">${data.class_name}</span>
                        </div>
                        <div>
                            <span>연봉: ${data.class_level},000만원</span>                    
                        </div>
                    </div>
                    <p style="margin-top: 40px">${data.class_description}</p>
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

