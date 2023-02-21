import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class ProcessAjax extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <span class="process-item ${data.active ? "active" : ""}">${data.text}</span>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            this.$element.querySelector('.active')?.classList.remove('active');
            target.classList.add('active');
        })
    }
}

// getData("http://localhost:3000/process", (data) => new ProcessAjax(document.querySelector('.process-ajax'), data));
