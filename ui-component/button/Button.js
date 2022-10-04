import Component from "../../basic/Component.js";

export default class ButtonLink extends Component {
    setEvents() {
        this.$element.addEventListener("click", () => {
            const { target: _target, href, attr, history } = this.$element.dataset;
            if(_target) {
                const openNewWindow = window.open("about:blank",'', attr);
                openNewWindow.location.href = href;
            } else if(history) {
                window.location.replace(href);
            }else {
                href && (window.location = href);
            }
            console.log(window.location.history);
        })
    }
}
// document.querySelectorAll('.btn[data-href]').forEach(el => new ButtonLink(el));
