import Component from "../../basic/Component.js";

export class Count extends Component {
    constructor(el, data) {
        super(el, data);
    }

    setTemplate() {
        const { count } = this.$data.store.getState();
        return `${count[this.$data.abilityId] || 0}/${this.$data.totalCount}`;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}