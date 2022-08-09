export default class Component<T> {
    // $target;
    // $state;
    protected $data: any[];
    protected $element: Element;

    constructor(component: Element, data?: T[]) {
        this.$element = component;
        this.$data = data ? [... data] : [];
        this.setElements();
        this.setTemplate();
        this.setEvents();
    }

    setElements() {};

    setTemplate() {};

    setEvents() {};

}