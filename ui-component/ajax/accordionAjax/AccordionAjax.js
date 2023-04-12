import Component from "../../../basic/Component.js";
import Accordion from "../../accordion/Accordion.js";

export default class AccordionAjax extends Accordion {
    setElements() {
        this.$element.classList.add("mykl-accordion");
        [this.headerTemplate, this.bodyTemplate] = [...this.$element.querySelector('.accordion-item').children];
    }

    setTemplate() {
        const div = document.createElement('div');
        div.innerHTML = this.$element.innerHTML;
        return new AccordionItemAjax(div, this.$data).template;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    // addItem(data) {
    //     this.$element.querySelector('.accordion-item').innerHTML = new AccordionItemAjax(this.$element.querySelector('.accordion-item'), data).template;
    // }
}

export class AccordionItemAjax extends Component {
    setElements() {
        this.wrapper = document.createElement('div');
        this.wrapper.appendChild(this.$element.cloneNode(true));
        this.template = this.wrapper.innerHTML;
    }

    setTemplate() {
        if(this.template) {
            const { data = [], replace = {}, other = [] } = this.$data;
            return data.map(item => {
                const headerEl = document.createElement('div');
                headerEl.appendChild(this.$element.querySelector('.accordion-header').cloneNode(true));
                let originHTML = headerEl.innerHTML;
                [...Object.keys(item), ...other].map(key => {
                    if (replace[key]) {
                        originHTML = originHTML.replaceAll('$' + key, replace[key](item));
                    } else {
                        originHTML = originHTML.replaceAll('$' + key, item[key]);
                    }
                });
                const bodyEl = document.createElement('div');
                bodyEl.appendChild(this.$element.querySelector('.accordion-body').cloneNode(true));
                bodyEl.querySelector(this.$data.body.target).innerHTML = this.setBodyTemplate();

                this.wrapper.querySelector('.accordion-item').innerHTML = originHTML + bodyEl.innerHTML;

                return this.wrapper.innerHTML;
            }).join('');
        }
    }
    setBodyTemplate() {
        if(this.template) {
            const { data, replace, other, body } = this.$data;
            const mapData = body.data || data;
            return mapData.map(item => {
                let originHTML = this.$element.querySelector(body.target).innerHTML;
                [...Object.keys(item), ...other].map(key => {
                    if (replace[key]) {
                        return originHTML = originHTML.replaceAll('$' + key, replace[key](item));
                    }
                    return originHTML = originHTML.replaceAll('$' + key, item[key])
                });
                return originHTML;
            }).join('');
        }
    }

    render() {
        this.template = this.setTemplate();
    }
}

