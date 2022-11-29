import Component from "../../../basic/Component.js";
import {getDataset} from "../../../basic/utils.js";

export default class RadioAjax extends Component{
    setElements() {
        this.name = this.$element.querySelector('input').getAttribute('name');
    }

    setTemplate() {
        const idKey = this.$element.querySelector('input').id;
        const valueKey = this.$element.querySelector('input').getAttribute('value');
        const [checkedKey, isTrue] = this.$element.querySelector('input').getAttribute('checked')?.split("__") || ["", ""];

        if(Array.isArray(this.$data)) {
            return this.$data.map(data => `
                <div class="mykl-radio">
                    <input class="radio-input" type="radio" name="${this.name}" id="radio-${data[idKey]}" value="${data[valueKey]}"  ${checkedKey ? data[checkedKey] === isTrue ? "checked" : '' : ''}>
                    <label class="radio-label" for="radio-${data[idKey]}">${data[valueKey]}</label>
                </div>
            `).join('')
        } else {
            return Object.keys(this.$data).map((data) => `
                <div class="mykl-radio">
                    <input class="radio-input" type="radio" name="${this.name}" id="radio-${data}" value="${this.$data[data]}">
                    <label class="radio-label" for="radio-${data}">${this.$data[data]}</label>
                </div>
            `).join('');
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

