import Component from "../../../basic/Component.js";
import Textarea from "../../textarea/Textarea.js";

export default class TextareaAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-textarea");
    }

    setTemplate() {
        const {data = "", options = {}, key="" } = this.$data;
        const { value = "value"} = options;
        return key ? data[key] : data[value]
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.$element.classList.contains("textarea-smart") && new Textarea(this.$element);
    }
}