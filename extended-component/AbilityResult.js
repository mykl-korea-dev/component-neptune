import Component from "../basic/Component.js";
import ResultTable from "./ability/ResultTable";
import {getDataset} from "../basic/utils";

export default class AbilityResult extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setTemplate() {
        const { hierarchy } = this.$data.store.getState();
        const { abilityPid } = this.$data;
        return hierarchy[abilityPid].map(data => `<div data-ability="ability${data['ability_id']}"></div>`).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll("div").forEach(el => {
            const abilityId = getDataset(el, 'ability').replace("ability", "");
            new ResultTable(el, { abilityId, store: this.$data.store })
        })
    }

}