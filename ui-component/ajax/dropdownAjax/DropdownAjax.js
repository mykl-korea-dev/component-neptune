import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import Dropdown from "../../dropdown/Dropdown.js";

export default class DropdownAjax extends Dropdown {
    setTemplate() {
        const { title, titleUrl, items } = this.$data;
        return `
            <a href="${titleUrl}" class="dropdown-toggle">${title}</a>
            <ul class="dropdown-menu">
                ${items.map(item => `
                    <li class="dropdown-item">
                        <a href="${item.itemUrl}">${item.value}</a>
                    </li>
                `).join('')}
            </ul>
        `
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData('http://localhost:3000/dropdown', (data) => new DropdownAjax(document.querySelector('.dropdown-ajax'), data));