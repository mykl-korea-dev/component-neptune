import Component from "../../basic/Component.js";

export default class ButtonLink extends Component {
    setElements() {
        const button = document.createElement("button");
        button.textContent = this.$element.textContent;
        button.classList.add('btn');
        this.$element.insertAdjacentElement('afterend', button);
    }

}

new ButtonLink(document.querySelector('a.btn'));