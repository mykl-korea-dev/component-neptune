import Component from "../../basic/component.js";
import {closeAllSelect} from "../../basic/utils.js";


export default class Select<T extends {name: string, value: string, text: string}> extends Component<T>{
    private select: HTMLSelectElement | null | undefined;
    private options: any[] | null | undefined;

    constructor(component: Element, options: any[]) {
        super(component, options);
    }


    setElements() {
        this.select = this.$element.querySelector('select');
        this.options = Array.from(this.select!.querySelectorAll('option'));
        let template = document.createElement('template');
        let fragment = new DocumentFragment();
        template.innerHTML = `
            <div class="select-selected">
                ${this.select?.options[this.select.selectedIndex].textContent}
            </div>
            <div class="select-items select-hide">
                ${this.options!.map(el => `<div>${el.text}</div>`).join('')}
            </div>
            `
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    }

    setEvents() {
        const selectedDiv = this.$element.querySelector('.select-selected');
        const selectDiv = this.$element.querySelector('.select-items');

        document.addEventListener('click', (e) => closeAllSelect(e.target as HTMLElement))

        selectedDiv?.addEventListener('click', function () {
            selectDiv?.classList.toggle('select-hide');
            selectedDiv?.classList.toggle('select-arrow-active');
        })

        selectDiv?.addEventListener('click', (e) => {
            this.$element.querySelector('.same-as-selected')?.removeAttribute('class');
            const target = e.target as HTMLElement;
            for (let i = 0; i < this.options!.length; i++) {
                if(this.select?.options[i].innerHTML === target?.textContent) {
                    this.select.selectedIndex = i;
                    selectedDiv!.textContent = target.textContent;
                    target.classList.add('same-as-selected');
                    selectDiv?.classList.toggle('select-hide');
                    selectedDiv?.classList.toggle('select-arrow-active');
                    break;
                }
            }
        })
    }
}