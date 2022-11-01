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
import TabAjax from "./ui-component/ajax/tabAjax/TabAjax.js";

let MYKLAjax = {
    // setComponents
    SetComponents: getData,
    // form -----------------------------
    CheckboxAjax: function (selector, data) {
        return new CheckboxAjax(document.querySelector(selector), data)
    },
    RadioAjax: function (selector, data) {
        return new RadioAjax(document.querySelector(selector), data)
    },
    RangeAjax: function (selector, data) {
        return new RangeAjax(document.querySelector(selector), data)
    },
    SelectAjax: function (selector, data) {
        return new SelectAjax(document.querySelector(selector), data)
    },
    // ui -----------------------------
    AccordionAjax: function (selector, data) {
        return new AccordionAjax(document.querySelector(selector), data)
    },
    DropdownAjax: function (selector, data) {
        return new DropdownAjax(document.querySelector(selector), data)
    },
    PaginationAjax: function (selector, data) {
        return new PaginationAjax(document.querySelector(selector), data)
    },
    ProcessAjax: function (selector, data) {
        return new ProcessAjax(document.querySelector(selector), data)
    },
    ProgressAjax: function (selector, data) {
        return new ProgressAjax(document.querySelector(selector), data)
    },
    StarAjax: function (selector, data) {
        return new StarAjax(document.querySelector(selector), data)
    },
    TabAjax: function (selector, data) {
        return new TabAjax(document.querySelector(selector), data)
    }
}

window.MYKL = {...window.MYKL, ...MYKLAjax};