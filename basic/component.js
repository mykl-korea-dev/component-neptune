var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Component = /** @class */ (function () {
    function Component(component, data) {
        this.$element = component;
        this.$data = data ? __spreadArray([], data, true) : [];
        this.getElements();
        this.template();
        this.setEvents();
    }
    Component.prototype.getElements = function () { };
    ;
    Component.prototype.template = function () { };
    ;
    Component.prototype.setEvents = function () { };
    ;
    return Component;
}());
export default Component;
//# sourceMappingURL=component.js.map