import Component from "../../basic/Component.js";

export default class Dropdown extends Component {
    setEvents() {
        this.$element.querySelector('.dropdown-toggle')?.addEventListener('mouseover', ({target}) => {
            this.$element.querySelector('.dropdown-menu').style.opacity = '1';
        })

        this.$element.addEventListener('mouseleave', () => {
            this.$element.querySelector('.dropdown-menu').style.opacity = '0';
        })
    }
}

document.querySelectorAll('.dropdown').forEach(el => new Dropdown(el))