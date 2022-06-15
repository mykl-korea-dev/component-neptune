export default class Component<T> {
    // $target;
    // $state;
    protected $data: any[];
    protected $element: Element;

    constructor(component: Element, data?: T[]) {
        this.$element = component;
        this.$data = data ? [... data] : [];
        this.getElements();
        this.template();
        this.setEvents();
    }

    getElements() {};

    template() {};

    setEvents() {};

}
