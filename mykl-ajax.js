import {getData} from "./basic/utils.js";
import CheckboxAjax from "./form-component/ajax/checkboxAjax/CheckboxAjax.js";
import RadioAjax from "./form-component/ajax/radioAjax/RadioAjax.js";
import RangeAjax from "./form-component/ajax/rangeAjax/RangeAjax.js";
import SelectAjax from "./form-component/ajax/selectAjax/SelectAjax.js";
import AccordionAjax from "./ui-component/ajax/accordionAjax/AccordionAjax.js";
import DropdownAjax from "./ui-component/ajax/dropdownAjax/DropdownAjax.js";
import ProcessAjax from "./ui-component/ajax/processAjax/ProcessAjax.js";
import ProgressAjax from "./ui-component/ajax/progressAjax/ProgressAjax.js";
import StarAjax from "./ui-component/ajax/starAjax/StarAjax.js";

import "./form-component/ajax/selectAjax/select.css";

let MYKLAjax = {
    // form -----------------------------
    CheckboxAjax: function (url, el) {
        // getData('http://localhost:3000/checkbox', (data) => new CheckboxAjax(document.querySelector('.form-check-ajax'), data));
        getData(url, (data) => new CheckboxAjax(el, data))
    },
    RadioAjax: function (url, el) {
        getData(url, (data) => new RadioAjax(el, data))
    },
    RangeAjax: function (url, el) {
        getData(url, (data => new RangeAjax(el, data)))
    },
    SelectAjax: function (url, el) {
        getData(url, (data) => new SelectAjax(el, data))
    },
    // ui -----------------------------
    AccordionAjax: function (url, el) {
        getData(url, (data) => new AccordionAjax(el, data))
    },
    DropdownAjax: function (url, el) {
        getData(url, (data) => new DropdownAjax(el, data))
    },
    ProcessAjax: function (url, el) {
        getData(url, (data) => new ProcessAjax(el, data))
    },
    ProgressAjax: function (url, el) {
        getData(url, (data) => new ProgressAjax(el, data))
    },
    StarAjax: function (url, el) {
        getData(url, (data) => new StarAjax(el, data))
    },
    // 삭제 => 예시 사용해보기 위함
    TabAjax: function (url, el) {
        // console.log(el);
        getData(url, (data) => el.querySelectorAll('.tab-list').forEach((node, i) => {
            // console.log(node, data[i])
            node.innerHTML = data[i]
        }));
    }
}

window.MYKL = {...window.MYKL, ...MYKLAjax};