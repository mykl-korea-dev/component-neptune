import Component from "../../basic/Component.js";

export default class AbilityResultInfo extends Component {
    setTemplate() {
        const { abilities, top, isCommon = false} = this.$data;
        return abilities[top].map(data => `
            <dt class="fw-bold" style="margin-top: 20px">${isCommon ? data.ability_name : abilities[0][0].ability_name} (${+data.ability_my_gap >= 0 ? "+" + (+data.ability_my_gap).toFixed(1) : (+data.ability_my_gap).toFixed(1)})</dt>
            ${abilities[data.ability_id]
            .filter(v => (+v['ability_my_gap']) < 0)
            .map(v => `
                    <dl class="list-item">${v['ability_name']} <span>${(+v["ability_my_gap"]).toFixed(1)}</span></dl>
                `).join("")}
        `).join("");
    }

    render() {
        this.$element.innerHTML += this.setTemplate();
    }
}