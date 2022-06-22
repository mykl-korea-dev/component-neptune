import Component from "../../basic/component.js";

export default class File<T> extends Component<T> {
    input: HTMLInputElement | null | undefined;
    button: HTMLButtonElement | null | undefined;

    constructor(element: Element) {
        super(element);
    }

    setElements() {
        this.input = this.$element.querySelector('.form-file-input') as HTMLInputElement;
    }

    setTemplate() {
        this.button = document.createElement('button');
        this.button.classList.add('file-btn');
        this.button.textContent = "파일 등록"
        this.$element.appendChild(this.button);
    }

    setEvents() {
        this.button?.addEventListener('click', () => {
            console.log('hi')
            this.input?.click();
        })
    }
}