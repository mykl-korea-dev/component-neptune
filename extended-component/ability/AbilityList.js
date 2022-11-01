import Tab from "../../ui-component/tab/tab.js";
import Component from "../../basic/Component";
import Chart from "chart.js/auto";

export default class AbilityList extends Tab {
    setTemplate() {
        const top = this.$data["hierarchy"][0][0];
        return `
            <div>
                <div id="chart"></div>
                <div class="mykl-tab" id="abilitySn${top.ability_sn}">
                    ${this.setHierarchy(top.ability_sn)}
                </div>
            </div>
          `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.querySelectorAll(".mykl-tab").forEach((el, i) => {
            new Tab(el);
        });

    }

    setHierarchy(abilitySn) {
        if(!this.$data["hierarchy"][abilitySn]) {
            return '';
        }

        return `
            <span>${this.$data.data[abilitySn - 1]["ability_name"]}</span>
            <nav>
                ${this.$data["hierarchy"][abilitySn]?.map(v => `
                    <a class="tab-item" href="abilitySn${v.ability_sn}">${v.ability_name}(${v.ability_answered_ques}/${v.ability_total_ques})</a>
                `).join("")}
            </nav>
            ${this.$data["hierarchy"][abilitySn]?.map(v => `
                <div class="tab-content mykl-tab" id="abilitySn${v.ability_sn}">
                    ${this.setHierarchy(v.ability_sn)}
                </div>
            `).join("")}
        `
    }

    setEvents() {
        super.setEvents();
    }
}
