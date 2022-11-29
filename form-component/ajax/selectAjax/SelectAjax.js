import Component from "../../../basic/Component.js";
import Select from "../../select/Select.js";
import {getData} from "../../../basic/utils.js";


export default class SelectAjax extends Select {
    setElements() {
        console.log(this.$data)
        this.$element.classList.add("mykl-select");
        this.select = this.$element.querySelector('select');
        const optionEl = this.select.querySelector('option');

        const idKey = this.select.lastElementChild.getAttribute('value');
        const valueKey = this.select.lastElementChild.textContent;
        const [selectedKey, isTrue] = this.select.lastElementChild.getAttribute('selected')?.split("__") || ["", ""];

        if(optionEl.getAttribute('value') === '' && optionEl.textContent !== "") {
            this.select.innerHTML = '';
            this.select.appendChild(optionEl);
        } else {
            this.select.innerHTML = '';
        }

        if(Array.isArray(this.$data)) {
            this.select.innerHTML += this.$data.map((data) => `
                <option value="${data[idKey]}"  ${selectedKey ? data[selectedKey].toString() == isTrue ? "selected" : '' : ''}>${data[valueKey]}</option>
            `).join('')
        } else {
            this.select.innerHTML += Object.keys(this.$data).map((data, i) => `
                <option value="${data}">${this.$data[data]}</option>
            `).join('');
        }

        this.options = Array.from(this.select.querySelectorAll('option'));
    }
}

