import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";

export default class CheckboxAjax extends Component{
    setElements() {
        this.name = this.$element.querySelector('input').getAttribute('name');
    }

    setTemplate() {
        if(Array.isArray(this.$data) || this.$data.data) {
            const { data: $data = this.$data, options={} } = this.$data;
            return $data.map(data => {
                const {id="id", value="value", checked="checked", trueChecked = 'Y' } = options;
                return `
                <div class="mykl-check">
                    <input class="check-input" type="checkbox" name="${this.name || data[name]}" id="${this.name || data[name]}-${data[id]}" value="${data[id]}"  ${data[checked] === trueChecked ? "checked" : ''}>
                    <label class="check-label" for="${this.name || data[name]}-${data[id]}">${data[value]}</label>
                </div>
            `
            }).join('');
        } else {
            return Object.keys(this.$data).map((data) => `
                <div class="mykl-check">
                    <input class="check-input" type="checkbox" name="${this.name}" id="check-${data}" value="${data}">
                    <label class="check-label" for="check-${data}">${this.$data[data]}</label>
                </div>
            `).join('');
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

