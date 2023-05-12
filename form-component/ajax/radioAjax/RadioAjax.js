import Component from "../../../basic/js/Component.js";

export default class RadioAjax extends Component {
    setElements() {
        const inputEl = this.$element.querySelector('input');
        this.name = inputEl.getAttribute('name') || "";

        this.id = inputEl.getAttribute('id')?.replace("$", "") || null;
        this.value = inputEl.getAttribute("value")?.replace("$", "") || null;
    }

    setTemplate() {
        if(this.id || this.value) {
            return this.$data.map(data => {
                return `
                <div class="mykl-radio">
                    <input type="radio" name="${this.name || data[name]}" id="${this.name || data[name]}-${data[this.id]}" value="${data[this.id]}">
                    <label for="${this.name || data[name]}-${data[this.id]}">${data[this.value]}</label>
                </div>
            `
            }).join('');
        } else if(Array.isArray(this.$data) || this.$data.data) {
            const {data: $data = this.$data, options = {}} = this.$data;
            return $data.map(data => {
                const {id = "id", value = "value", checked = "checked", trueChecked = 'Y', name = "name"} = options;
                return `
                <div class="mykl-radio">
                    <input type="radio" name="${this.name || data[name]}" id="${this.name || data[name]}-${data[id]}" value="${data[id]}"  ${data[checked] === trueChecked ? "checked" : ''}>
                    <label for="${this.name || data[name]}-${data[id]}">${data[value]}</label>
                </div>
            `
            }).join('');
        } else {
            return Object.keys(this.$data).map((data) => `
                <div class="mykl-radio">
                    <input type="radio" name="${this.name}" id="radio-${data}" value="${data}">
                    <label for="radio-${data}">${this.$data[data]}</label>
                </div>
            `).join('');
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

