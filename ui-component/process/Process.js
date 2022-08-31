import Component from "../../basic/Component.js";

export default class Process extends Component {
    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            // console.log(target);
            this.$element.querySelector('.active')?.classList.remove('active');
            target.classList.add('active');
        })
    }
}

new Process(document.querySelector('.process'));