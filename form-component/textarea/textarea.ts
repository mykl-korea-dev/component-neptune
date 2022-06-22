import Component from "../../basic/component.js";
export default class Textarea<T> extends Component<T> {
    constructor(element: Element) {
        super(element);
    }

    setEvents() {

        const textarea = this.$element.querySelector('.textarea-smart') as HTMLTextAreaElement;
        textarea?.addEventListener('keyup', () => {
            // @ts-ignore
            textarea?.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`
        })

    }
}

document.querySelectorAll('.form-textarea').forEach(el => new Textarea(el))