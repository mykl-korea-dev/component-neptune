import Component from "../../../basic/Component.js";

export default class InputAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-input");
        this.key = this.$element.value.replace("$", "");
        const {data = "", options = {}, key = ""} = this.$data;
        const { value = "value"} = options;

        if(this.key) {
            this.$element.value = this.$data[this.key];
        } else if(key) {
            this.$element.value = data[key];
        } else if(Object.keys(options).length) {
            this.$element.value = data[value];
        } else {
            this.$element.value = data;
        }
    }
}