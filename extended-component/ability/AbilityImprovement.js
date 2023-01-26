import Component from "../../basic/Component";
import {getDataset} from "../../basic/utils";
import ResultTable from "./ResultTable";
import BarChart from "./BarChart";

export default class AbilityImprovement extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setTemplate() {
        const { hierarchy } = this.$data.store.getState();
        const { abilityPid } = this.$data;
        //  Todo: 아래 줄로 변경
        const sortedHierarchy = [...hierarchy[abilityPid]].sort((first, second) => (+first["ability_my_gap"]) < (+second["ability_my_gap"]) ? -1 : 1).filter(v => (+v["ability_my_gap"]) < 0);
        // const sortedHierarchy = [...hierarchy[abilityPid]].sort((first, second) => (+first["ability_my_score"]) < (+second["ability_my_score"]) ? -1 : 1);
        return sortedHierarchy.map((data, i) => `
            <div>
                <h6 class="fs-6 fw-bold lh-lg text-start">${i+1}. ${data["ability_name"]}</h6>
                <div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>점수Gap ${(+data["ability_my_gap"]).toFixed(1)}</span>
                        <div>
                            <span>미성취 영역 목록</span>
                            <ul>
                                 ${hierarchy[data["ability_id"]].filter(v => (+v["ability_my_gap"]) < 0)
                                    .map(subData => `
                                        <li>${subData["ability_name"]} <span>${(+subData["ability_my_gap"]).toFixed(1)}</span></li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    <canvas data-ability="ability${data['ability_id']}"></canvas>
                </div>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll("canvas").forEach(el => {
            const abilityId = getDataset(el, 'ability').replace("ability", "");
            new BarChart(el, {
                ability_id: abilityId,
                store: this.$data.store,
                datalabels: this.$data.store.getState().hierarchy[abilityId].map(v => v['ability_name']),
                labels: ["기준 점수", "내 점수"]
            })
        })
    }
}