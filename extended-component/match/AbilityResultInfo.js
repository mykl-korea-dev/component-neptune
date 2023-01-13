import Component from "../../basic/Component.js";

export default class AbilityResultInfo extends Component {
    setTemplate() {
        return this.$data.abilities[this.$data.top].map(data => `
            <dt>${data.ability_name} ${+data.ability_my_gap >= 0 ? "+" + (+data.ability_my_gap).toFixed(1) : (+data.ability_my_gap).toFixed(1)}</dt>
            ${this.$data.abilities[data.ability_id]
            .filter(v => (+v['ability_my_gap']) < 0)
            .map(v => `
                    <dl class="list-item">${v['ability_name']} <span>${(+v["ability_my_gap"]).toFixed(1)}</span></dl>
                `).join("")}
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}