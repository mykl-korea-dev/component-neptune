export default class Component {
    $data;
    $element;

    constructor(element, data = []) {
        this.$element = element;
        this.$data = [... data];
        this.setElements();
        this.setTemplate();
        this.setEvents();
    }

    setElements() {};

    setTemplate() {};

    setEvents() {};

}