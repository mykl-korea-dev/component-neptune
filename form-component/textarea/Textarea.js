import Component from "../../basic/Component.js";
export default class Textarea extends Component{
    setElements() {
        this.$element.style.height = 'auto';
        this.$element.style.height = `${this.$element.scrollHeight}px`
    }

    setEvents() {
        this.$element?.addEventListener('keydown', () => {
            this.$element.style.height = 'auto';
            this.$element.style.height = `${this.$element.scrollHeight}px`
        })
        this.$element?.addEventListener('keyup', () => {
            this.$element.style.height = 'auto';
            this.$element.style.height = `${this.$element.scrollHeight}px`
        })
    }
}

