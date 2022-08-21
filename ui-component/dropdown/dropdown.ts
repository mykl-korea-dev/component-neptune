import Component from "../../basic/component.js";

export default class Dropdown<T> extends Component<T> {
    setEvents() {
        this.$element.querySelector('.dropdown-toggle')?.addEventListener('mouseover', ({target}) => {
            (this.$element.querySelector('.dropdown-menu')! as HTMLElement).style.opacity = '1';
        })

        this.$element.querySelector('.dropdown-toggle')?.addEventListener('mouseout', ({target}) => {
            (this.$element.querySelector('.dropdown-menu')! as HTMLElement).style.opacity = '0';
        })
    }
}

document.querySelectorAll('.dropdown').forEach(el => new Dropdown(el))