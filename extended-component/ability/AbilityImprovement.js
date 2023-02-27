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
        this.sortedHierarchy = [...hierarchy[abilityPid]].sort((first, second) => (+first["ability_my_gap"]) < (+second["ability_my_gap"]) ? -1 : 1).filter(v => (+v["ability_my_gap"]) < 0);
        // const sortedHierarchy = [...hierarchy[abilityPid]].sort((first, second) => (+first["ability_my_score"]) < (+second["ability_my_score"]) ? -1 : 1);
        return this.sortedHierarchy.map((data, i) => `
            <div class="${i !== 0 ? 'mg20' : ''}">
                <h6 class="fs-6 fw-bold lh-lg text-start">${i+1}. ${data["ability_name"]}</h6>
                <div style="border: 1px solid #bdbdbd;border-radius: 5px;padding: 20px">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <span>점수Gap</span> 
                            <span class="mg10 fs-4 fw-bold text-danger" style="display: block;">${(+data["ability_my_gap"]).toFixed(1)}</span>
                        </div>
                        <div class="text-start">
                            <span>미성취 영역 목록</span>
                            <ul class="mg10">
                                 ${hierarchy[data["ability_id"]].filter(v => (+v["ability_my_gap"]) < 0)
                                    .map(subData => `
                                        <li class="lh-md" style="display: flex; justify-content: space-between; font-size: 0.825rem">${subData["ability_name"]} <span style="margin-left: 5px">${(+subData["ability_my_gap"]).toFixed(1)}</span></li>
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
            const sortedData = [...this.$data.store.getState().hierarchy[abilityId]].sort((first, second) => (+first["ability_my_gap"]) < (+second["ability_my_gap"]) ? -1 : 1).filter(v => (+v["ability_my_gap"]) < 0);
            new BarChart(el, {
                ability_id: abilityId,
                store: this.$data.store,
                datalabels: sortedData.map(v => v['ability_name']),
                labels: ["기준 점수", "내 점수"],
                input: sortedData
            })
        })
    }
}