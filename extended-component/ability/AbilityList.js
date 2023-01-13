import Component from "../../basic/Component.js";
import HierarchyTab from "./HierarchyTab.js";
import {Count} from "./Count.js";
import {getDataset} from "../../basic/utils.js";

export default class AbilityList extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setElements() {
        new HierarchyTab(this.$element, this.$data);
    }

    setTemplate() {
        return `(<span class="countNum"></span>)`;
    }

    render() {
        const store = this.$data.store.getState();
        this.$element.querySelectorAll('.count').forEach(el => {
            const ability = store["ability"][getDataset(el, 'count')];
            const abilityId = ability["ability_id"];
            const totalCount = ability['ability_total_ques'];
            el.innerHTML += this.setTemplate();
            new Count(el.querySelector('.countNum'), {...this.$data, totalCount, abilityId });
        })
    }
}