import Component from "../../../basic/js/Component.js";
import Select from "../../js/Select.js";
import {getData} from "../../../basic/js/utils.js";


export default class SelectAjax extends Select {
    setElements() {
        this.$element.classList.add("mykl-select");

        this.select = this.$element.querySelector('select');
        const optionEl = this.select.querySelector('option');
        this.id = optionEl.getAttribute('value')?.replace("$", "");
        this.value = optionEl.textContent?.replace("$", "");

        if(optionEl.getAttribute('value') === '' && optionEl.textContent !== "") {
            this.select.innerHTML = '';
            this.select.appendChild(optionEl);
        } else {
            this.select.innerHTML = '';
        }

        if(this.id) {
            this.select.innerHTML += this.$data.map((data) => {
                return `
                <option value="${data[this.id]}">${data[this.value]}</option>
            `
            }).join('');
        } else if(this.$data.data) {
            const {data: $data = this.$data, options = {}} = this.$data;
            const {id = "id", value = "value", selected = "selected", trueSelected = 'Y'} = options;
            this.select.innerHTML += $data.map((data) => {
                return `
                <option value="${data[id]}"  ${data[selected] === trueSelected ? "selected" : ''}>${data[value]}</option>
            `
            }).join('');
        } else {
            this.select.innerHTML += Object.keys(this.$data).map((data, i) => `
                <option value="${data}">${this.$data[data]}</option>
            `).join('');
        }

        this.options = Array.from(this.select.querySelectorAll('option'));

        this.$element.querySelector('.select-group')?.remove();
        const selectGroupEl = document.createElement('div');
        selectGroupEl.classList.add('select-group');
        this.$element.appendChild(selectGroupEl);
    }
}

