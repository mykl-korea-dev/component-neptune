import Component from "../../basic/Component.js";

export default class Tab extends Component {
    setElements() {
        const activeEl = this.$element.querySelector('.active') || this.$element.querySelector('.tab-item');
        !activeEl.classList.contains('active') && activeEl.classList.add('active');
        const activeId = activeEl.getAttribute('href');
        this.$element.querySelector(activeId).classList.add('show');
    }

    setEvents() {
        this.$element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const { target } = e;

            if (!target.classList.contains('tab-item')) {
                return;
            }

            const id = target.getAttribute('href');

            this.$element.querySelector('.tab-content.show').classList.remove('show');
            this.$element.querySelector(id).classList.add('show');

            this.$element.querySelector('.active').classList.remove('active')
            target.classList.toggle('active');
        })
    }
}

// document.querySelectorAll('.mykl-tab').forEach(el => new Tab(el));