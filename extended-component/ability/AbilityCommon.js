import Component from "../../basic/Component.js";
import ButtonLink from "../../ui-component/button/Button";
import {getDataset} from "../../basic/utils";

export default class AbilityCommon extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return hierarchy[top]?.map(v => `
            <li>
                <div class="mykl-media media-vertical">
                    <div class="media-cover">
                        <img src="../../images/ab_thumb_img.png" alt="">
                        <span class="media-cover-text text-light">${v.ability_name}</span>
                    </div>    
                    <div class="mykl-tooltip">
                        <span class="tooltip-icon"><img src=${complete.includes(v.ability_id) ? "../../images/tool_tip_icon2.png" : "../../images/tool_tip_icon1.png"  }></span>
                        <div class="tooltip-content ">${complete.includes(v.ability_id) ? "진단을 완료하였습니다." : "진단을 하지 않았습니다." }</div>
                    </div>
                    ${complete.includes(v.ability_id) ?
                        `<button type="button" class="mykl-btn btn-primary-rev btn-full" data-ability="${v.ability_id}">진단완료</button>` :
                        `<a class="mykl-btn btn-primary btn-full" href="/ability/${top || hierarchy[top][0].ability_id }" data-page="test" data-ability="${v.ability_id}">진단하기</a>`
                    }
                </div>
            </li>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll('.mykl-btn').forEach(el => new ButtonLink(el));
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(getDataset(target, "page")) {
                sessionStorage.setItem('abilityActive', JSON.stringify({[this.$data.store.getState().top]: getDataset(target, "ability")}));
            }
        })
    }
}