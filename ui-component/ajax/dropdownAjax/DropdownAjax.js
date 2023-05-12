import Component from "../../../basic/js/Component.js";

export default class DropdownAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-dropdown");

        this.$element.querySelector('.dropdown-toggle').innerHTML = Object.values(this.$data)[0];
        const items = Object.values(this.$data).slice(1);
        // 보류 : 링크 + item;
        // this.$element.querySelector('.dropdown-menu').innerHTML = items.map(v => `
        //     <li>
        //         <a href=""
        //     </li>
        // `)
    }
}

