import Component from "../../../basic/Component.js";

export default class RadioAjax extends Component {
    setElements() {
        this.name = this.$element.querySelector('input').getAttribute('name') || "";
    }

    setTemplate() {
        if(Array.isArray(this.$data) || this.$data.data) {
            const {data: $data = this.$data, options = {}} = this.$data;
            let name = "";
            return $data.map(data => {
                const {id = "id", value = "value", checked = "checked", trueChecked = 'Y', name = "name"} = options;
                return `
                <div class="mykl-radio">
                    <input class="radio-input" type="radio" name="${this.name || data[name]}" id="${this.name || data[name]}-${data[id]}" value="${data[id]}"  ${data[checked] === trueChecked ? "checked" : ''}>
                    <label class="radio-label" for="${this.name || data[name]}-${data[id]}">${data[value]}</label>
                </div>
            `
            }).join('');
        } else {
            return Object.keys(this.$data).map((data) => `
                <div class="mykl-radio">
                    <input class="radio-input" type="radio" name="${this.name}" id="radio-${data}" value="${data}">
                    <label class="radio-label" for="radio-${data}">${this.$data[data]}</label>
                </div>
                
            `).join('');
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

