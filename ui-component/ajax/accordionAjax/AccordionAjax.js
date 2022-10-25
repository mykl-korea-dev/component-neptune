import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import Accordion from "../../accordion/Accordion.js";

export default class AccordionAjax extends Accordion {
    setTemplate() {
        console.log(this.$data)
        this.$element.classList.add("mykl-accordion");
        return this.$data.map(list => `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-toggle">${list.title}</button>
                </h2>
                <ul class="accordion-body">
                    ${list.items.map(item => `
                        <li class="accordion-body-item">${item.link ? `<a href=${item.link}>${item.text}</a>` : item.text}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }


}

// getData('http://localhost:3000/accordion', (data) => new AccordionAjax(document.querySelector('.accordion-ajax'), data));