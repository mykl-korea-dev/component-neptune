export default class Component {
    $data;
    $element;

    constructor(element, data = []) {
        this.$element = element;
        this.$data = data;
        try {
            this.setElements();
        } catch (e) {
            console.log(e, element);
        }
        this.render();
        this.setEvents();
    }

    setElements() {};

    setTemplate() { return '' };

    render() {}

    setEvents() {};

    setData(data) {
        this.$data = Array.isArray(data) ? [...data] : {...this.$data, ...data}
        this.setElements();
        this.render();
    }
}