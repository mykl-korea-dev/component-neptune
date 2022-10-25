import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";

export default class RadioAjax extends Component{
    setTemplate() {
        const name = getDataset(this.$element, "name");

        return this.$data.map(data => `
            <div class="mykl-radio">
                <input class="radio-input" type="radio" ${name ? "name=" + name : ''} id="radio-${data.id}" value="${data.id}">
                <label class="radio-label" for="radio-${data.id}">${data.value}</label>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData('http://localhost:3000/checkbox', (data) => new RadioAjax(document.querySelector('.radio-group-ajax'), data));
