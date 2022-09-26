import Component from "../../basic/Component.js";

export default class Tab extends Component {
    setElements() {
        const activeId = this.$element.querySelector('.active').dataset.id || this.$element.querySelector('.active').getAttribute('href');
        this.$element.querySelector(activeId).style.display = "block";
    }

    setEvents() {
        this.$element.addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            if (!target.classList.contains('tab-item')) {
                return;
            }
            const id = target.dataset.id || target.getAttribute('href');
            this.$element.querySelectorAll('.tab-list').forEach(el => el.style.display = 'none');
            this.$element.querySelector(id).style.display = 'block';
            this.$element.querySelector('.active').classList.remove('active')
            target.classList.toggle('active');
        })
    }
}

document.querySelectorAll('.tabs').forEach(el => new Tab(el));