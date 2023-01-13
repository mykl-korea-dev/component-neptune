import Component from "../../basic/Component";

export default class Filter extends Component {
    render() {
        const { filter } = this.$data.store.getState();
        const inputEl = this.$element.querySelector('input');
        if(inputEl) {
            inputEl.checked = filter;
        }
    }

    setEvents() {
        this.$element.addEventListener("click", (e) => {
            if(e.target === this.$element.querySelector("label")) {
                return;
            }
            const { filter } = this.$data.store.getState();
            this.$data.dispatch.setFilter(!filter);
        })
    }
}