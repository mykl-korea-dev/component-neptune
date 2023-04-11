import {getData} from "./basic/utils.js";
import CheckboxAjax from "./form-component/ajax/checkboxAjax/CheckboxAjax.js";
import RadioAjax from "./form-component/ajax/radioAjax/RadioAjax.js";
import RangeAjax from "./form-component/ajax/rangeAjax/RangeAjax.js";
import SelectAjax from "./form-component/ajax/selectAjax/SelectAjax.js";
import FileAjax from "./form-component/ajax/FileAjax.js";
import FormAjax from "./form-component/ajax/formAjax.js";
import CalendarAjax from "./form-component/ajax/calendarAjax/CalendarAjax.js";
import InputAjax from "./form-component/ajax/inputAjax/InputAjax.js";
import TimeAjax from "./form-component/ajax/timeAjax/TimeAjax.js";
import TextareaAjax from "./form-component/ajax/textareaAjax/TextareaAjax.js";

import AccordionAjax from "./ui-component/ajax/accordionAjax/AccordionAjax.js";
import DropdownAjax from "./ui-component/ajax/dropdownAjax/DropdownAjax.js";
import ProcessAjax from "./ui-component/ajax/processAjax/ProcessAjax.js";
import ProgressAjax from "./ui-component/ajax/progressAjax/ProgressAjax.js";
import StarAjax from "./ui-component/ajax/starAjax/StarAjax.js";
import PaginationAjax from "./ui-component/ajax/paginationAjax/PaginationAjax.js";
import TabAjax from "./ui-component/ajax/tabAjax/TabAjax.js";
import TagAjax from "./ui-component/ajax/tagAjax/TagAjax.js";
import TableAjax from "./ui-component/ajax/tableAjax/TableAjax.js";
import MediaAjax from "./component-set/ajax/mediaAjax/MediaAjax.js";
import AutoComplete from "./ui-component/ajax/autoCompleteAjax/AutoComplete.js";

import './ui-component/ajax/autoCompleteAjax/autoComplete.css';

import {returnComponent} from "./mykl-default.js";
import Time from "./form-component/time/Time";


let MYKLAjax = {
    // setComponents
    SetComponents: getData,
    // form -----------------------------
    InputAjax: returnComponent(InputAjax),
    RadioAjax: returnComponent(RadioAjax),
    CheckboxAjax: returnComponent(CheckboxAjax),
    TextareaAjax: returnComponent(TextareaAjax),
    SelectAjax: returnComponent(SelectAjax),
    RangeAjax: returnComponent(RangeAjax),
    CalendarAjax: returnComponent(CalendarAjax),
    TimeAjax: returnComponent(TimeAjax),
    FormAjax: returnComponent(FormAjax),
    // FileAjax: returnComponent(FileAjax),
    // ui -----------------------------
    AutoComplete: function (selector, data) {
        return new AutoComplete(document.querySelector(selector), data)
    },
    AccordionAjax: function (selector, data) {
        return new AccordionAjax(document.querySelector(selector), data)
    },
    DropdownAjax: function (selector, data) {
        return new DropdownAjax(document.querySelector(selector), data)
    },
    PaginationAjax: returnComponent(PaginationAjax),
    ProcessAjax: function (selector, data) {
        return new ProcessAjax(document.querySelector(selector), data)
    },
    ProgressAjax: returnComponent(ProgressAjax),
    StarAjax: function (selector, data) {
        return new StarAjax(document.querySelector(selector), data)
    },
    TabAjax: returnComponent(TabAjax),
    TagAjax: function (selector, data) {
        return new TagAjax(document.querySelector(selector), data);
    },
    TableAjax: function (selector, data) {
        return new TableAjax(document.querySelector(selector), data);
    },
    // set -----------------------------
    MediaAjax: returnComponent(MediaAjax),
}

window.MYKL = {...window.MYKL, ...MYKLAjax};
