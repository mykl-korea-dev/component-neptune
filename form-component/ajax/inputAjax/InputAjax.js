import Component from "../../../basic/Component.js";

export default class InputAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-input");
        this.$element.value = Object.values(this.$data);
    }
}