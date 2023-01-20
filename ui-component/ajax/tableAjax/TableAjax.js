import Component from "../../../basic/Component.js";

export default class TableAjax extends Component {
    setTemplate() {
        this.$element.classList.add("mykl-table");
        const {data, options = {}} = this.$data;
        const { colOrder, link, class: className } = options;
        return data.map(v => `
            <tr>
                ${colOrder.map(key => `
                    <td class="${className[key] ? v[className[key]] ? (key + "_" + v[className[key]]) : className[key] : ""}">
                        ${link[key] ? `<a href="${link[key]["pathname"] + "/" + v[link[key]["variable"]]}">${v[key]}</a>` : v[key]}
                    </td>
                `).join("")}
            </tr>
        `).join("");
    }

    render() {
        this.$element.querySelector('tbody').innerHTML = this.setTemplate();
    }
}