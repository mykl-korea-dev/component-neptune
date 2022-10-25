import Component from "../../../basic/Component.js";
import Select from "../../select/Select.js";
import {getData} from "../../../basic/utils.js";


export default class SelectAjax extends Select {
    setElements() {
        this.$element.classList.add("mykl-select");
        this.select = this.$element.querySelector('select');
        const className = this.select.className;

        console.log(this.select, this.$data);
        this.select.innerHTML = `${this.$data.map(el => `<option value="${el.id}">${el.text || el.value}</option>`).join('')}`;
        this.options = Array.from(this.$element.querySelectorAll('option'));
        const div = document.createElement('div');
        className && div.classList.add(className);
        div.innerHTML = `
                <div class="select-selected">
                    ${this.select?.options[this.select.selectedIndex].textContent}
                </div>
                <div class="select-items select-hide">
                    ${this.options?.map((el, i)=> i === 0 ? '' : `<div>${el.textContent}</div>`).join('')}
                </div>
            </div>
            `
        this.$element.innerHTML += div.innerHTML;

    }
}

// getData('http://localhost:3000/select', (data) => {
//     new SelectAjax(document.querySelector('.form-select'), data)
// })

