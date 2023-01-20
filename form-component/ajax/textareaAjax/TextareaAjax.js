import Component from "../../../basic/Component.js";
import Textarea from "../../textarea/Textarea.js";

export default class TextareaAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-textarea");
    }

    setTemplate() {
        const {data = "", options = {}} = this.$data;
        const { value = "value"} = options;
        this.$element.textContent = data[value];
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.classList.contains("textarea-smart") && new Textarea(this.$element);
    }
}