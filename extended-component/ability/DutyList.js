import Component from "../../basic/Component.js";

export default class DutyList extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data.ability_name}</h5>
                    <p>${data.ability_content}</p>
                    <button class="mykl-btn btn-primary">${data.ability_sn}</button>
                </div>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}