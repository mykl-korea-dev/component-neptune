import Accordion from "../../accordion/Accordion.js";
import Component from "../../../basic/js/Component.js";

export default class AccordionAjax extends Accordion {
    setElements() {
        this.item = this.$element.querySelector('.accordion-item');
        [this.head, this.body] = [...this.item.children];
    }

    setTemplate() {
        return this.$data.header.data.map(data => {
            const item = this.$element.cloneNode(true);
            const header = this.head.cloneNode(true);
            const headerItem = new AccordionAjaxHeader(header, {
                ...this.$data,
                data,
            });

            const body = this.body.cloneNode(true);
            const bodyItem = new AccordionAjaxBody(body, {
                ...this.$data,
                body: {
                    data: this.$data.body.data.filter(v => v[this.$data.body.key] === data[this.$data.body.key])
                },
            });

            item.querySelector('.accordion-item').innerHTML = headerItem.template + bodyItem.template;
            return item.innerHTML;
        }).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    setData(data) {
        super.setData(data);
    }
}

class AccordionAjaxHeader extends Component {
    setElements() {
        const div = document.createElement('div');
        div.appendChild(this.$element);
        this.template = div.innerHTML;
    }

    setTemplate() {
        const { data = {}, replace = {}, other = [] } = this.$data;
        let originHTML = this.template;
        [...Object.keys(data), ...other].map(key => {
            if (replace[key]) {
                return originHTML = originHTML.replaceAll('$' + key, replace[key](data));
            }
            return originHTML = originHTML.replaceAll('$' + key, data[key])
        });
        return originHTML;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.template = this.$element.innerHTML;
    }

    setData(data) {
        super.setData(data);
    }
}

class AccordionAjaxBody extends Component {
    setElements() {
        // const div = document.createElement('div');
        // div.appendChild(this.$element);
        // this.template = div.innerHTML;
        // console.log(this.template, this.$element)
    }

    setTemplate() {
        const { data = [], replace = {}, other = [], body = {} } = this.$data;
        return this.$data.body.data.map(item => {
            let originHTML = this.$element.querySelector('.accordion-body-item').innerHTML;
            [...Object.keys(item), ...other].map(key => {
                if (replace[key]) {
                    return originHTML = originHTML.replaceAll('$' + key, replace[key](item));
                }
                return originHTML = originHTML.replaceAll('$' + key, item[key])
            });
            return originHTML;
        }).join('');
    }

    render() {
        this.$element.querySelector(".accordion-body-item").innerHTML = this.setTemplate();
        const div = document.createElement('div');
        div.appendChild(this.$element);

        this.template = div.innerHTML;
    }

    setData(data) {
        super.setData(data);
    }
}