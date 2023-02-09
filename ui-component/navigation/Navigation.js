import Component from "../../basic/Component.js";

export default class Navigation extends Component {
    setEvents() {
        // hamburger 기능
        this.$element.querySelector('.nav-toggle')?.addEventListener('click', () => {
            this.$element.querySelectorAll('.nav')?.forEach(el => el.classList.toggle('show'));
        })
    }
}