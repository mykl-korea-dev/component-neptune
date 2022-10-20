import Component from "../../basic/Component.js";
export default class Textarea extends Component{
    constructor(element) {
        super(element);
    }

    setEvents() {
        const textarea = this.$element;
        console.log(textarea)
        textarea?.addEventListener('keydown', () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`
        })
        textarea?.addEventListener('keyup', () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`
        })

    }
}

document.querySelectorAll('.mykl-textarea.textarea-smart').forEach(el => new Textarea(el))