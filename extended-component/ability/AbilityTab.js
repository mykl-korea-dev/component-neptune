import Component from "../../basic/Component.js";
// import TabAjax from "../../ui-component/ajax/tabAjax/TabAjax";
import AbilityTabItem from "./AbilityTabItem";

export default class AbilityTab extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.update.bind(this));
    }

    setTemplate() {
        const { hierarchy, active, filter, complete } = this.$data.store.getState();
        return hierarchy[this.$data.top].map(v =>
            `<div id="tab${v.ability_id}" 
                class="ability-tab
                    ${active.findIndex(av => av == v.ability_id) !== -1 ? "show" : ""}">
                    ${(filter && (complete.findIndex(id => id == v.ability_id) !== -1)) ? "hide" : ""}
            </div>`
        ).join("");
    }

    render() {
        const { hierarchy, active, filter } = this.$data.store.getState();
        this.active = active;
        this.filter = filter;

        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll(".ability-tab").forEach(el => {
            const elementId = el.id;
            const getIdNumber = elementId.replace("tab", "");
            new AbilityTabItem(el, { data: hierarchy[getIdNumber], id: "ability_id", idName: "abilitySnPool", name: "ability_name", store: this.$data.store, dispatch: this.$data.dispatch })
        })
    }

    update() {
        const active = this.active || this.$data.store.getState().active;
        const filter = this.filter !== undefined ? this.filter: this.$data.store.getState().filter;
        const updatedActive = this.$data.store.getState().active.map(v => v.toString());
        const originActive = active.map(v => v.toString());
        // console.log(originActive, updatedActive);
        // console.log(originActive.filter(v => !updatedActive.includes(v)))
        if((originActive.filter(v => !updatedActive.includes(v)).length !== 0 )|| (filter != this.$data.store.getState().filter)) {
            this.render();
        }
    }
}