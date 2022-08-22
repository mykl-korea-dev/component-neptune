var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Component from "../../basic/component.js";
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.setElements = function () {
        var originalTemplate = this.$element.innerHTML;
        var changedTemplate = originalTemplate.replace(/<(table)([^>]*)>/gm, '<div class="divTable">');
        changedTemplate = changedTemplate.replace(/<(thead)([^>]*)>/gm, '<div class="divTableHead">');
        changedTemplate = changedTemplate.replace(/<(tbody)([^>]*)>/gm, '<div class="divTableBody">');
        changedTemplate = changedTemplate.replace(/<(tr)([^>]*)>/gm, '<div class="divTableTr">');
        changedTemplate = changedTemplate.replace(/<(tr)([^>]*)>/gm, '<div class="divTableTr">');
        changedTemplate = changedTemplate.replace(/<(th colspan)([^>]*)/gm, '<div class="divTableTh fill"');
        changedTemplate = changedTemplate.replace(/<(td colspan)([^>]*)/gm, '<div class="divTableTd fill"');
        changedTemplate = changedTemplate.replace(/<(th)([^>]*)/gm, '<div class="divTableTh"');
        changedTemplate = changedTemplate.replace(/<(td)([^>]*)/gm, '<div class="divTableTd"');
        changedTemplate = changedTemplate.replace(/<(\/table|\/thead|\/tbody|\/tr|\/th|\/td)([^>]*)>/gm, '</div>');
        console.log(changedTemplate);
        // return changedTemplate
        this.$element.innerHTML = changedTemplate;
    };
    return Table;
}(Component));
export default Table;
// document.querySelectorAll('.table-box').forEach(el => new Table(el))
new Table(document.querySelector('.table-box'));
//# sourceMappingURL=table.js.map