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

}