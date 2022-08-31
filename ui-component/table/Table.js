import Component from "../../basic/Component.js";

export default class Table extends Component {
    setElements() {
        this.$element.querySelectorAll("[colspan]").forEach(el => {
            const flexDirection = Number(el.getAttribute("colspan"));
            el.style.flex = el.getAttribute("colspan");
        })

        // const widthArr = [...this.$element.querySelectorAll("colgroup col")].map(el => el.getAttribute("width"));
        // console.log(widthArr);

        // const originalTemplate = this.$element.innerHTML;
        // let changedTemplate = originalTemplate.replace(/<(table)([^>]*)>/gm, '<div class="divTable">')
        // changedTemplate = changedTemplate.replace(/<(thead)([^>]*)>/gm, '<div class="divTableHead">');
        // changedTemplate = changedTemplate.replace(/<(tbody)([^>]*)>/gm, '<div class="divTableBody">');
        // changedTemplate = changedTemplate.replace(/<(tr)([^>]*)>/gm, '<div class="divTableTr">');
        // changedTemplate = changedTemplate.replace(/<(tr)([^>]*)>/gm, '<div class="divTableTr">');
        // changedTemplate = changedTemplate.replace(/<(th colspan)([^>]*)/gm, '<div class="divTableTh fill"');
        // changedTemplate = changedTemplate.replace(/<(td colspan)([^>]*)/gm, '<div class="divTableTd fill"');
        // changedTemplate = changedTemplate.replace(/<(th)([^>]*)/gm, '<div class="divTableTh"');
        // changedTemplate = changedTemplate.replace(/<(td)([^>]*)/gm, '<div class="divTableTd"');
        // changedTemplate = changedTemplate.replace(/<(\/table|\/thead|\/tbody|\/tr|\/th|\/td)([^>]*)>/gm, '</div>')
        // console.log(changedTemplate)
        // // return changedTemplate
        // this.$element.innerHTML = changedTemplate;
    }
}

// document.querySelectorAll('.table-box').forEach(el => new Table(el))
document.querySelectorAll('.table').forEach(el => new Table(el));