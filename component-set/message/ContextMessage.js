import Component from "../../basic/js/Component.js";

export default class ContextMessage extends Component {
    setEvents() {
        this.$element.querySelector('input').addEventListener('keyup', this.$data.bind(this))
    }
}