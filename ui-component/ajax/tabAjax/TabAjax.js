import Tab from "../../tab/tab.js";

export default class TabAjax extends Tab {
    setTemplate() {
        this.$element.classList.add("mykl-tab");
        return `
            <nav>
                ${this.$data.data.map(data => `
                    <a class="tab-item" href="${data.id || ((this.$data.idName || this.$data.name) + data[this.$data.id])}">${data.name || data[this.$data.name]}</a>            
                `).join('')}
            </nav>
            ${this.$data.data.map(data => `
                <div class="tab-content" id="${data.id || ((this.$data.idName || this.$data.name) + data[this.$data.id])}">${data.name || data[this.$data.name]}</div>            
            `).join('')}
        `;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        super.setElements();
    }
}