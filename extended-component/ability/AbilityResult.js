import Component from "../../basic/Component.js";
import Progress from "../../ui-component/progress/Progress.js";

export default class AbilityResult extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setTemplate() {
        const { ability, hierarchy } = this.$data.store.getState();
        const { abilityId } = this.$data;
        const timeRegex = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gm;

        return hierarchy[this.$data.top].map(data => `
            <div class="mg20" style="display: flex; justify-content: space-between;">
                <h5 class="fw-bold">${data["ability_name"]}</h5>
                <dl class="text-secondary">
                    <dt style="display: inline-block">진단일시:</dt>
                    <dd style="display: inline-block">${data["ability_end_dttm"].toString().replace(timeRegex, "$1.$2.$3")}</dd>
                </dl>
            </div>

            <table class="mykl-table">
                <colgroup>
                    <col width="15%">
                    <col width="15%">
                    <col width="30%">
                    <col width="15%">
                    <col width="15%"> 
                </colgroup>
                <thead>
                    <tr>
                        <th>역량</th>
                        <th>구분</th>
                        <th>점수</th>
                        <th>점수 Gap</th>
                        <th>성취 여부</th>
                    </tr>
                </thead>
                <tbody>
                    ${hierarchy[data.ability_id].map(v => `
                        <tr>
                            <td rowspan="2">${v["ability_name"]}</td>
                            <td>기준점수</td>
                            <td>
                                <div class="mykl-progress" data-min="0" data-max="5" data-value="${v["ability_ref_score"]}">
                                    <div class="progress-bar"></div>
                                </div>
                            </td>
                            <td rowspan="2">${(+v["ability_my_gap"]).toFixed(2)}</td>
                            <td rowspan="2" class="${+v["ability_my_gap"] < 0 ? "text-secondary": "text-primary"}">${+v["ability_my_gap"] < 0 ? "미성취" : "성취"}</td>
                        </tr>
                        <tr>
                            <td>내 점수</td>
                            <td>
                                <div class="mykl-progress progress-info" data-min="0" data-max="5" data-value="${v["ability_my_score"]}">
                                    <div class="progress-bar"></div>
                                </div>
                            </td>    
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll('.mykl-progress').forEach(el => new Progress(el));
    }
}