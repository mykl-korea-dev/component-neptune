import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import Accordion from "../../accordion/Accordion.js";

export default class AccordionAjax extends Accordion {
    setTemplate() {
        this.$element.classList.add("mykl-accordion");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

