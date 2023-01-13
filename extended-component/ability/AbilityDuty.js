import Component from "../../basic/Component.js";

export default class AbilityDuty extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return  hierarchy[top]?.map(v => `
            <div>
                <img src="../../images/ab_thumb_img.png">
                <div>
                    <h6>${v.ability_name}</h6>
                    <p>${v.ability_content}</p>
                </div>
                ${complete.includes(v.ability_id) ?
            `<a class="mykl-btn btn-primary-border btn-full" href="/ability/${top}/duty/reports" data-page="result" data-ability="${v.ability_id}">진단결과보기</a>` :
            `<a class="mykl-btn btn-primary btn-full" href="/ability/${top}" data-page="test" data-ability="${v.ability_id}">진단하기</a>`
        }
            </div>
            `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}