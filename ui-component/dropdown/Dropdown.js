import Component from "../../basic/Component.js";

export default class Dropdown extends Component {
    setEvents() {
        this.$element.querySelector('.dropdown-toggle')?.addEventListener('mouseover', ({target}) => {
            this.$element.querySelectorAll('.dropdown-menu').forEach(el => {
                el.classList.add('show');
            })
        })

        this.$element.addEventListener('mouseleave', () => {
            this.$element.querySelectorAll('.dropdown-menu').forEach(el => {
                el.classList.remove('show');
            })
        })
    }
}

// document.querySelectorAll('.dropdown').forEach(el => new Dropdown(el));