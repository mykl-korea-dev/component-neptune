import Component from "../../basic/Component.js";
import ButtonLink from "../../ui-component/button/Button";
import {getDataset} from "../../basic/utils";

export default class AbilityCommon extends Component {
    setTemplate() {
        const { store, top } = this.$data;
        const { hierarchy, complete } = store.getState();

        return `<ul>
            ${hierarchy[top]?.map(v => `
                <li>
                    <div class="mykl-media media-vertical">
                        <div class="media-cover">
                            <img src="../../images/ab_thumb_img.png" alt="">
                            <div class="mykl-tooltip">
                                <span class="tooltip-icon"><img src=${complete.includes(v.ability_id) ? "../../images/tool_tip_icon2.png" : "../../images/tool_tip_icon1.png"  }></span>
                                <div class="tooltip-content ">${complete.includes(v.ability_id) ? "진단을 완료하였습니다." : "진단을 하지 않았습니다." }</div>
                            </div>
                            <span class="media-cover-text">${v.ability_name}</span>
                        </div>
                        ${complete.includes(v.ability_id) ?
            `<a class="mykl-btn btn-primary-rev btn-full" href="/ability/${top}/common/reports" data-page="result" data-ability="${v.ability_id}">진단결과보기</a>` :
            `<a class="mykl-btn btn-primary btn-full" href="/ability/${top}" data-page="test" data-ability="${v.ability_id}">진단하기</a>`
        }
                    </div>
                </li>
            `).join("")}
        </ul>
        `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll('.mykl-btn').forEach(el => new ButtonLink(el));
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            console.log(target);
            if(getDataset(target, "page")) {
                console.log(getDataset(target, "ability"));
                this.$data.dispatch.setAbility(getDataset(target, "ability"))
            }
        })
    }
}