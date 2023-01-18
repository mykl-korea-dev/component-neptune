import Component from "../../basic/Component";
import Progress from "../../ui-component/progress/Progress";

export default class ResultTable extends Component {
    setTemplate() {
        const { ability, hierarchy } = this.$data.store.getState();
        const { abilityId } = this.$data;
        const timeRegex = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gm;

        return `
            <div class="mg20" style="display: flex; justify-content: space-between;">
                <h5 class="fw-bold">${ability[abilityId]["ability_name"]}</h5>
                <dl class="text-secondary">
                    <dt>진단일시:</dt>
                    <dd>${ability[abilityId]["ability_end_dttm"].toString().replace(timeRegex, "$1.$2.$3")}</dd>
                </dl>
            </div>
            <table class="result-table mykl-table">
                <colgroup>
                    <col class="ability">
                    <col class="type">
                    <col class="score" width="40%">
                    <col class="gap">
                    <col class="complete">
                </colgroup>
                <thead>
                    <tr>
                        <th>역량</th>
                        <th>구분</th>
                        <th>점수</th>
                        <th>점수Gap</th>
                        <th>성취여부</th>
                    </tr>
                </thead>
                <tbody>
                   ${hierarchy[abilityId].map(v => `
                        <tr>
                            <td rowspan="2">${v.ability_name}</td>
                            <td>기준점수</td>
                            <td>
                                <div class="mykl-progress" data-max="4.5" data-value="${v.ability_ref_score}">
                                    <div class="progress-bar"></div>
                                </div>
                            </td>
                            <td rowspan="2">${(v.ability_my_score - v.ability_ref_score).toFixed(1)}</td>
                            <td rowspan="2">${v.ability_completed == "N" ? "미성취" : "성취"}</td>
                        </tr>
                        <tr>
                            <td>내점수</td>
                            <td>
                                <div class="mykl-progress" data-max="5" data-value="${v.ability_my_score}">
                                    <div class="progress-bar"></div>
                                </div>
                            </td>
                        </tr>
                   `)  .join('')}
                </tbody>
            </table>
        `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll('.mykl-progress').forEach(el => new Progress(el))
    }
}