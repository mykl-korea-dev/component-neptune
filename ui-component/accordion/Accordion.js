import Component from "../../basic/Component.js";

export default class Accordion extends Component {
    setEvents() {
        this.$element.addEventListener('click', (e) => {
            const {target} = e;
            e.stopPropagation();

            if(target.classList.contains('accordion-toggle')) {
                const el = e.composedPath().find(el => el.classList.contains('accordion-item'));
                if(!this.$element.classList.contains('show-always')) {
                    el?.querySelector('.accordion-body.show') !== this.$element.querySelector('.accordion-body.show')
                    && this.$element.querySelector('.accordion-body.show')?.classList.remove('show');
                }
                if(target.classList.contains('show')) {
                    target.classList.remove('show');
                    el?.querySelector('.accordion-body')?.classList.remove('show');
                    el.querySelector('.accordion-body').style.height = '0';
                } else {
                    target.classList.add('show');
                    el?.querySelector('.accordion-body')?.classList.add('show');
                    let bodyHeight = null;
                    [...el.querySelectorAll('.accordion-body-item')].forEach(el => bodyHeight += el.getBoundingClientRect().height);
                    el.querySelector('.accordion-body').style.height = bodyHeight + 'px';
                }
            }
        })
    }
}

