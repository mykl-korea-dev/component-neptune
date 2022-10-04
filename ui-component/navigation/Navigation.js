import Component from "../../basic/Component.js";

export default class Navigation extends Component {
    setEvents() {
        this.$element.querySelector('.nav-toggle').addEventListener('click', () => {
            this.$element.querySelector('.nav').classList.toggle('show');
        })
    }
}

// document.querySelectorAll('.navbar').forEach(el => new Navigation(el));