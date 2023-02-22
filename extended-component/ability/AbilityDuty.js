import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils";

export default class AbilityDuty extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return  hierarchy[top]?.map(v => `
            <li class="mykl-card bg-light" style="padding: 20px">
                <div class="card-body" style="display: flex">
                   <div class="mykl-tooltip">
                       <span class="tooltip-icon"><img src=${complete.includes(v.ability_id) ? "../../images/tool_tip_icon2.png" : "../../images/tool_tip_icon1.png"}></span>
                       <div class="tooltip-content ">${complete.includes(v.ability_id) ? "진단을 완료하였습니다." : "진단을 하지 않았습니다."}</div>
                   </div>
                   <div style="margin-left: 20px">
                       <h5 class="fs-5 fw-bold">${v.ability_name}</h5>
                       <p class="mg20">${v.ability_content}</p>
                   </div>
                   <div style="margin-left: auto">
                       ${complete.includes(v.ability_id) ?
                            `<button type="button" class="mykl-btn btn-primary-border" data-ability="${v.ability_id}">진단완료</button>` :
                            `<a class="mykl-btn btn-primary" href="/ability/${this.$data.store.getState().top}" data-page="test" data-ability="${v.ability_id}">진단하기</a>`
                       }
                   </div>
               </div>
            </li>
            `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(getDataset(target, "page")) {
                sessionStorage.setItem('abilityActive', JSON.stringify({[this.$data.store.getState().top]: getDataset(target, "ability")}));
            }
        })
    }
}