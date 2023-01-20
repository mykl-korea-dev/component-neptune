import Component from "../../../basic/Component.js";

export default class InputAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-input");
        const {data = "", options = {}} = this.$data;
        const { value = "value"} = options;
        this.$element.value = data[value];
    }
}