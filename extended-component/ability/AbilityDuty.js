import Component from "../../basic/Component.js";

export default class AbilityDuty extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return  hierarchy[top]?.map(v => `
            <div class="mykl-card">
                <img src="../../images/ab_thumb_img.png">
                <div class="card-body">
                   <div>
                       <div class="mykl-tooltip">
                           <span class="tooltip-icon"><img src=${complete.includes(v.ability_id) ? "../../images/tool_tip_icon2.png" : "../../images/tool_tip_icon1.png"}></span>
                           <div class="tooltip-content ">${complete.includes(v.ability_id) ? "진단을 완료하였습니다." : "진단을 하지 않았습니다."}</div>
                      </div>
                   </div>
                   <h5 class="card-title">${v.ability_name}</h5>
                   <p>${v.ability_content}</p>
                   ${complete.includes(v.ability_id) ?
            `<a class="mykl-btn btn-primary-border btn-full" href="/ability/${top}/duty/reports" data-page="result" data-ability="${v.ability_id}">진단결과보기</a>` :
            `<a class="mykl-btn btn-primary btn-full" href="/ability/${top}" data-page="test" data-ability="${v.ability_id}">진단하기</a>`}
                   </div>
            </div>
            `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}