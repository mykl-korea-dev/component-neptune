// import TabAjax from "../../ui-component/ajax/tabAjax/TabAjax.js";
// import Component from "../../basic/Component";
import PoolAccordion from "./PoolAccordion";
import TabAjax from "../../ui-component/ajax/tabAjax/TabAjax";

export default class AbilityTabItem extends TabAjax {
    constructor(el, data) {
        super(el, data);

    }

    setTemplate() {
        this.$element.classList.add("mykl-tab");
        const { active, filter, complete } = this.$data.store.getState();
        return `
            <nav class="tab-menu">
                ${this.$data.data.map(data => `
                    <a class="tab-item 
                        ${(active.findIndex(id => id == data.ability_id) !== -1) ? "active" : ""}
                        ${(filter && (complete.findIndex(id => id == data.ability_id) !== -1)) ? "hide" : ""}" 
                        href="${data.id || ((this.$data.idName || this.$data.name) + data[this.$data.id])}">
                    ${data.name || data[this.$data.name]}
                    </a>            
                `).join('')}
            </nav>
            ${this.$data.data.map(data => `
                <div class="tab-content 
                        ${(active.findIndex(id => id == data.ability_id) !== -1) ? "show" : ""}
                        ${(filter && (complete.findIndex(id => id == data.ability_id) !== -1)) ? "hide" : ""}"
                    id="${data.id || ((this.$data.idName || this.$data.name) + data[this.$data.id])}">
                ${data.name || data[this.$data.name]}
                </div>            
            `).join('')}
        `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        const { hierarchy } = this.$data.store.getState();
        this.$element.querySelectorAll('.tab-content').forEach(el => {
            const elementId = el.id;
            const getIdNumber = elementId.replace("abilitySnPool", "");
            new PoolAccordion(el, { store: this.$data.store, data: hierarchy[getIdNumber], dispatch: this.$data.dispatch })
        })
    }

    setEvents() {
        this.$element.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tabItemEl = e.composedPath().find(el => el.classList.contains('tab-item'));
            if(tabItemEl) {
                const tabItemSn = tabItemEl.getAttribute('href').replace("abilitySnPool", "");
                this.$data.dispatch.setAbility(tabItemSn);
            }
        })
    }
}