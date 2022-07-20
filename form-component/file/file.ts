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
        const ul = document.createElement('ul')

        this.$element.appendChild(ul)
    }

    setEvents() {
        this.button?.addEventListener('click', () => {
            this.input?.click();
        })

        this.input?.addEventListener('change', () => {

            this.input?.files?.length && Array.from(this.input?.files).forEach(el => {
                const li = document.createElement('li');
                li.innerHTML = el.name
                this.$element?.querySelector('ul')?.appendChild(li)
            })
        })
    }
}