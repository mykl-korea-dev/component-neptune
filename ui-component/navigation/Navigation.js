import Component from "../../basic/Component.js";

export default class Navigation extends Component {
    setEvents() {
        this.$element.querySelector('.nav-toggle')?.addEventListener('click', () => {
            this.$element.querySelectorAll('.nav')?.forEach(el => el.classList.toggle('show'));
        })
    }
}

// document.querySelectorAll('.navbar').forEach(el => new Navigation(el));