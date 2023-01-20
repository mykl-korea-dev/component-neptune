import Component from "../../basic/Component.js";

export default class Tab extends Component {
    setElements() {
        const activeEl = this.$element.querySelector('.active') || this.$element.querySelector('.tab-item');

        if(activeEl) {
            !activeEl.classList.contains('active') && activeEl.classList.add('active');
            const activeId = activeEl.getAttribute('href');
            this.$element.querySelector('#' + activeId).classList.add('show');
        }
    }

    setEvents() {
        this.$element.querySelector('nav').addEventListener('click', (e) => {
            const tabItem = e.composedPath().find(v => v.classList.contains('tab-item'));
            if(tabItem === undefined) {
                return;
            }

            const id = tabItem.getAttribute('href');
            [...this.$element.children].forEach(el => el.classList.contains('show') && el.classList.remove('show'));
            // this.$element.querySelector('nav ~ .tab-content.show')?.classList.remove('show');
            this.$element.querySelector('#' + id).classList.add('show');

            this.$element.querySelector('nav > .tab-item.active')?.classList.remove('active')
            tabItem.classList.toggle('active');
        });
    }
}

