import Component from "../../basic/Component.js";

export default class AbilityCommon extends Component {
    setTemplate() {
        const top = this.$data["hierarchy"][0][0];

        return this.$data["hierarchy"][top.ability_sn]?.map(v => `
            <div>
                <img src="https://via.placeholder.com/120">
                <span>${v.ability_name}</span>
                <a href="/ability/${v.ability_sn}">진단하기</a>
            </div>
            `).join("");

    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}