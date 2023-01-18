import Tab from "../../ui-component/tab/tab.js";
import Component from "../../basic/Component.js";
import "./abilityList.css";

export default class HierarchyTab extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setTemplate() {
        const { top } = this.$data;
        return `
            <div class="mykl-tab tab-lg tab-vertical" id="abilitySn${top}">
                ${this.setHierarchy(top)}
            </div>
          `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    setHierarchy(abilitySn) {
        const { hierarchy, ability, filter, active, complete } = this.$data.store.getState();

        if(!hierarchy[abilitySn]) {
            return '';
        }

        return `
            <nav>
                <span class="count tab-title" data-count="${abilitySn}"><span>${ability[abilitySn]["ability_name"]}</span></span>
                ${hierarchy[abilitySn]?.map(v => `
                    <a class="tab-item 
                            ${(complete.findIndex(id => id == v.ability_id) !== -1) ? "complete" : ""}
                            ${(active.findIndex(id => id == v.ability_id) !== -1) ? "active" : ""} count 
                            ${(filter && (complete.findIndex(id => id == v.ability_id) !== -1)) ? "hide" : ""}" 
                        data-count="${v.ability_id}" href="abilitySn${v.ability_id}">
                        <span>${ability[v.ability_id]["ability_name"]}</span>
                    </a>
                `).join("")}
            </nav>
            ${hierarchy[abilitySn]?.map(v => `
                <div class="tab-content mykl-tab tab-lg tab-vertical
                    ${(active.findIndex(id => id == v.ability_id) !== -1) ? "show" : ""}
                    ${(filter && (complete.findIndex(id => id == v.ability_id) !== -1)) ? "hide" : ""}"
                 id="abilitySn${v.ability_id}" >
                    ${this.setHierarchy(v.ability_id)}
                </div>
            `).join("")}
        `
    }

    setEvents() {
        this.$element.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tabItemEl = e.composedPath().find(el => el.classList.contains('tab-item'));
            if(tabItemEl) {
                const tabItemSn = tabItemEl.getAttribute('href').replace("abilitySn", "");
                this.$data.dispatch.setAbility(tabItemSn);
                this.$data.store.getState().filter && this.$data.dispatch.setFilter(true);
            }
        })
    }
}
