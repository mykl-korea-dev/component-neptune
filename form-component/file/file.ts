import Component from "../../basic/component.js";

export default class File<T> extends Component<T> {
    input: HTMLInputElement | null | undefined;
    button: HTMLButtonElement | null | undefined;
    dataTransfer: DataTransfer | null | undefined;

    constructor(element: Element) {
        super(element);
    }

    setElements() {
        this.dataTransfer = new DataTransfer();

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

    render() {
        this.$element.querySelector('ul')!.innerHTML = Array.from(this.input!.files!).reverse().map((file, idx) => `
            <li>${file.name}<button type="button"  class="deleteFileBtn" data-idx=${file.lastModified}>삭제</button></li>
        `).join('');
    }

    setEvents() {
        this.button?.addEventListener('click', () => {
            this.input?.click();
        })

        this.input?.addEventListener('change', () => {
            console.log(this.input!.files![0]);
            Array.from(this.input!.files!).forEach(file => this.dataTransfer?.items.add(file));
            console.log(this.dataTransfer?.files, this.input?.files);
            this.input!.files = this.dataTransfer!.files;
            console.log(this.dataTransfer?.files, this.input?.files);
            this.render();
        })

        this.$element.addEventListener('click', ({target}) => {
            if((target as HTMLElement).classList.contains('deleteFileBtn')) {
                this.dataTransfer?.items.remove(Array.from(this.dataTransfer!.files).findIndex((file, idx) => (file.lastModified == parseInt((target as HTMLElement)!.dataset!.idx!, 10))));
                this.input!.files = this.dataTransfer!.files;
                this.render();
            }
        })
    }
}