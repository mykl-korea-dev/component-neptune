import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class RadioAjax extends Component{
    setTemplate() {
        return this.$data.map(data => `
            <input class="form-radio-input" type="radio" id=${data.id} value=${data.id}>
            <label class="form-radio-label" for="${data.id}">${data.value}</label>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

getData('http://localhost:3000/checkbox', (data) => new RadioAjax(document.querySelector('.form-check-ajax'), data));
