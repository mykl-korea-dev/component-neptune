import Component from "../../../basic/Component.js";

export default class InputAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-input");
        const {data = "", key} = this.$data;
        this.$element.value = data[key];
    }
}