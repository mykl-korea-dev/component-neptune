import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class RadioAjax extends Component{
    setTemplate() {
        const { name } = this.$element.dataset;
        return this.$data.map(data => `
            <div class="form-radio">
                <input class="form-radio-input" type="radio" ${name ? "name=" + name : ''} id=${data.id} value=${data.id}>
                <label class="form-radio-label" for="${data.id}">${data.value}</label>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData('http://localhost:3000/checkbox', (data) => new RadioAjax(document.querySelector('.radio-group-ajax'), data));
