import Component from "../../../basic/Component.js";

export default class InputAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-input");
        const {data = "", options = {}, key = ""} = this.$data;
        const { value = "value"} = options;
        this.$element.value = key ? data[key] : data[value];
    }
}