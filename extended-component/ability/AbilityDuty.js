import Component from "../../basic/Component.js";

export default class AbilityDuty extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return  hierarchy[top]?.map(v => `
            <li class="mykl-card card-row bg-light mg20" style="padding: 20px">
                <div class="card-body pd20">
                   <div class="mykl-tooltip" style="align-self: start">
                       <span class="tooltip-icon"><img src=${complete.includes(v.ability_id) ? "../../images/tool_tip_icon2.png" : "../../images/tool_tip_icon1.png"}></span>
                       <div class="tooltip-content ">${complete.includes(v.ability_id) ? "진단을 완료하였습니다." : "진단을 하지 않았습니다."}</div>
                   </div>
                   <div style="margin-left: 20px">
                       <h5 class="fs-5 fw-bold">${v.ability_name}</h5>
                       <p class="mg20">${v.ability_content}</p>
                   </div>
                   <div style="margin-left: auto">
                       ${complete.includes(v.ability_id) ?
                            `<a class="mykl-btn btn-primary-border btn-full" href="/ability/${top}/duty/reports" data-page="result" data-ability="${v.ability_id}">진단결과보기</a>` :
                            `<a class="mykl-btn btn-primary btn-full" href="/ability/${top}" data-page="test" data-ability="${v.ability_id}">진단하기</a>`
                       }
                   </div>
               </div>
            </li>
            `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}