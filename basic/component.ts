export default class Component<T> {
    protected $data: any[];
    protected $element: Element;

    constructor(component: Element, data?: T[]) {
        this.$element = component;
        this.$data = data ? [... data] : [];
        this.setElements();
        this.render();
        this.setEvents();
    }

    setElements() {};

    setTemplate() { return ''};

    render() {}

    setEvents() {};

}