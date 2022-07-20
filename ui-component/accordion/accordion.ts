import Component from "../../basic/component.js";

export default class Accordion<T> extends Component<T> {
    setTemplate() {
        super.setTemplate();
    }

    setEvents() {
        // this.$element.querySelector('.accordion-toggle')?.addEventListener('click', ({target}) => {
        //
        // })
        this.$element.addEventListener('click', ({target}) => {
            if((target as HTMLElement).classList.contains('accordion-toggle')) {
                const el = (target as HTMLElement).closest('.accordion-item');
                console.log(target, el)
                el !== this.$element.querySelector('.accordion-body.show') && this.$element.querySelector('.accordion-body.show')?.classList.remove('show');

                el?.querySelector('.accordion-body')?.classList.toggle('show')
            }
        })
    }
}

document.querySelectorAll(".accordion").forEach(el => new Accordion(el));