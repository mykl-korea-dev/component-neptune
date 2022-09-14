import Component from "../../basic/Component.js";

export default class ButtonLink extends Component {
    setEvents() {
        this.$element.addEventListener("click", () => {
            if(this.$element.dataset.target) {
                const openNewWindow = window.open("about:blank");
                // const openNewWindow = window.open("about:blank",'', 'width=400, height=400, scrollbars=no, resizable=no, toolbars=no, menubar=no');
                openNewWindow.location.href = this.$element.dataset.link;
            } else {
                window.location = this.$element.dataset.link;
            }
        })
    }
}
document.querySelectorAll('.btn[data-link]').forEach(el => new ButtonLink(el));
