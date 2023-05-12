import Component from "../../basic/js/Component.js";

export default class InputPassword extends Component {
    setTemplate() {
        return `<div class="input-password-icon">눈</div>`;
    }
    render() {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("mykl-input-password");
        // this.replacedEl = this.$element.cloneNode(true);
        this.$element.parentElement.insertBefore(this.wrapper, this.$element);
        this.wrapper.appendChild(this.$element);
        this.wrapper.innerHTML += this.setTemplate();
    }
    setEvents() {
        this.wrapper.querySelector('.input-password-icon').addEventListener("click", () => {
            const input = this.wrapper.querySelector('input');
            if(this.wrapper.classList.contains("password-active")) {
                this.wrapper.classList.remove("password-active");
                input.setAttribute("type", "password");

            } else {
                this.wrapper.classList.add("password-active");
                input.setAttribute("type", "text");
            }
        })
    }
}