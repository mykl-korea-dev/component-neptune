import Component from "../../basic/Component.js";
import { closeAllSelect } from "../../basic/utils.js";
// import "./select.css";

export default class Select extends Component{
    setElements() {
        this.select = this.$element.querySelector('select');
        const className = this.select.className;
        this.options = Array.from(this.select.querySelectorAll('option'));
        const div = document.createElement('div');
        // let template = document.createElement('template');
        // let fragment = new DocumentFragment();
        console.log(className);
        className && div.classList.add(className);
        div.innerHTML = `
            <div class="select-group">
                <div class="select-selected">
                    ${this.select?.options[this.select.selectedIndex].textContent}
                </div>
                <div class="select-items select-hide">
                    ${this.options.map(el => `<div>${el.text}</div>`).join('')}
                </div>
            </div>
            `
        // fragment.appendChild(template.content);
        this.$element.appendChild(div)
    }

    setEvents() {
        const selectedDiv = this.$element.querySelector('.select-selected');
        const selectDiv = this.$element.querySelector('.select-items');

        document.addEventListener('click', (e) => closeAllSelect(e.target));

        selectedDiv?.addEventListener('click', function () {
            selectDiv?.classList.toggle('select-hide');
            selectedDiv?.classList.toggle('select-arrow-active');
        })

        selectDiv?.addEventListener('click', (e) => {
            this.$element.querySelector('.same-as-selected')?.removeAttribute('class');
            const target = e.target;
            for (let i = 0; i < this.options.length; i++) {
                if(this.select?.options[i].innerHTML === target?.textContent) {
                    this.select.selectedIndex = i;
                    selectedDiv.textContent = target.textContent;
                    target.classList.add('same-as-selected');
                    selectDiv?.classList.toggle('select-hide');
                    selectedDiv?.classList.toggle('select-arrow-active');
                    break;
                }
            }
        })
    }
}