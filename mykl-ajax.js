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
import PaginationAjax from "./ui-component/ajax/paginationAjax/PaginationAjax.js";

let MYKLAjax = {
    // setComponents
    SetComponents: getData,
    // form -----------------------------
    CheckboxAjax: function (el, data) {
        return new CheckboxAjax(el, data)
    },
    RadioAjax: function (el, data) {
        return new RadioAjax(el, data)
    },
    RangeAjax: function (el, data) {
        return new RangeAjax(el, data)
    },
    SelectAjax: function (el, data) {
        return new SelectAjax(el, data)
    },
    // ui -----------------------------
    AccordionAjax: function (el, data) {
        return new AccordionAjax(el, data)
    },
    DropdownAjax: function (el, data) {
        return new DropdownAjax(el, data)
    },
    PaginationAjax: function (el, data) {
        return new PaginationAjax(el, data)
    },
    ProcessAjax: function (el, data) {
        return new ProcessAjax(el, data)
    },
    ProgressAjax: function (el, data) {
        return new ProgressAjax(el, data)
    },
    StarAjax: function (el, data) {
        return new StarAjax(el, data)
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