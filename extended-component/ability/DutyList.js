import Component from "../../basic/Component.js";

export default class DutyList extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <div class="mykl-card bg-light mg20">
                <div class="card-body">
                    <h5 class="fs-5 fw-bold">${data.name}</h5>
                    <p class="mg20">${data.content}</p>
                    <a href="/ability/${data.id}" class="mykl-btn btn-primary">진단하기</a>
                </div>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}