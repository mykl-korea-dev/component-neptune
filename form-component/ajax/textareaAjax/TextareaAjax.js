import Component from "../../../basic/Component.js";
import Textarea from "../../textarea/Textarea.js";

export default class TextareaAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-textarea");
    }

    setTemplate() {
        const idKey = this.$element.textContent;
        return this.$data[idKey];
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.classList.contains("textarea-smart") && new Textarea(this.$element);
    }
}