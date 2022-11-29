import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";

export default class CheckboxAjax extends Component{
    setElements() {
        this.name = this.$element.querySelector('input').getAttribute('name');
    }

    setTemplate() {
        const idKey = this.$element.querySelector('input').id;
        const valueKey = this.$element.querySelector('input').getAttribute('value');
        const [checkedKey, isTrue] = this.$element.querySelector('input').getAttribute('checked')?.split("__") || ["", ""];
        if(Array.isArray(this.$data)) {
            return this.$data.map(data => `
                <div class="mykl-check">
                    <input class="check-input" type="checkbox" name="${this.name}" id="check-${data[idKey]}" value="${data[valueKey]}"  ${checkedKey ? data[checkedKey] === isTrue ? "checked" : '' : ''}>
                    <label class="check-label" for="check-${data[idKey]}">${data[valueKey]}</label>
                </div>
            `).join('')
        } else {
            return Object.keys(this.$data).map((data) => `
                <div class="mykl-check">
                    <input class="check-input" type="checkbox" name="${this.name}" id="check-${data}" value="${this.$data[data]}">
                    <label class="check-label" for="check-${data}">${this.$data[data]}</label>
                </div>
            `).join('');
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

