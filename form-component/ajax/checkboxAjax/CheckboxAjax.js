import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";

export default class CheckboxAjax extends Component{
    setTemplate() {
        const name = getDataset(this.$element, "name");

        return this.$data.map(data => `
            <div class="mykl-check">
                <input class="check-input" type="checkbox" id="check-${data.id}" ${name ? "name=" + name : ''} value="${data.id}">
                <label class="check-label" for="check-${data.id}">${data.value}</label>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData('http://localhost:3000/checkbox', (data) => new CheckboxAjax(document.querySelector('.form-check-ajax'), data));
