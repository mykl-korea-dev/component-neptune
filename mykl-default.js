import Calendar from './form-component/calendar/Calendar.js';
import File from './form-component/file/File.js';
import Range from './form-component/range/Range.js';
import Select from './form-component/select/Select.js';
import Textarea from './form-component/textarea/Textarea.js';

import Accordion from "./ui-component/accordion/Accordion.js";
import AutoComplete from "./ui-component/autoComplete/AutoComplete.js";
import ButtonLink from "./ui-component/button/Button.js";
import Dropdown from "./ui-component/dropdown/Dropdown.js";
import Emotion from "./ui-component/emotion/emotion.js";
import Navigation from "./ui-component/navigation/Navigation.js";
import Process from "./ui-component/process/Process.js";
import Progress from "./ui-component/progress/Progress.js";
import Star from "./ui-component/star/Star.js";
import Tab from "./ui-component/tab/tab.js";
import Table from "./ui-component/table/Table.js";
import Tag from "./ui-component/tag/Tag.js";
import Tooltip from "./ui-component/tooltip/Tooltip.js";

import './form-component/calendar/calendar.css';
import './form-component/calendar/time.css';
import './form-component/checkbox/checkbox.css';
import './form-component/file/file.css';
import './form-component/form-group/form-group.css';
import './form-component/radio/radio.css';
import './form-component/range/range.css';
import './form-component/select/select.css';
import './form-component/textarea/textarea.css';


import './ui-component/accordion/accordion.css';
import './ui-component/autoComplete/autoComplete.css';
import './ui-component/button/button.css';
import './ui-component/dropdown/dropdown.css';
import './ui-component/emotion/emotion.css';
import './ui-component/img/img.css';
import './ui-component/navigation/navigation.css';
import './ui-component/pagination/pagination.css';
import './ui-component/process/process.css';
import './ui-component/progress/progress.css';
import './ui-component/star/star.css';
import './ui-component/step/step.css';
import './ui-component/tab/tab.css';
import './ui-component/table/table.css';
import './ui-component/tag/tag.css';
import './ui-component/text/text.css';
import './ui-component/tooltip/tooltip.css';

let MYKL = {
    // form -----------------------------------------------------
    Calender: function (el) {
        return new Calendar(el);
    },
    File: function (el) {
        return new File(el);
    },
    Range: function (el) {
        return new Range(el);
    },
    Select: function (el) {
        return new Select(el);
    },
    Textarea: function (el) {
        return new Textarea(el);
    },
    // ui --------------------------------------------------
    Accordion: function (el) {
        return new Accordion(el);
    },
    AutoComplete: function (el) {
        return new AutoComplete(el);
    },
    ButtonLink: function (el) {
        return new ButtonLink(el);
    },
    Dropdown: function (el) {
        return new Dropdown(el);
    },
    Emotion: function (el) {
        return new Emotion(el);
    },
    Navigation: function (el) {
        return new Navigation(el);
    },
    Process: function (el) {
        return new Process(el);
    },
    Progress: function (el) {
        return new Progress(el);
    },
    Star: function (el) {
        return new Star(el);
    },
    Tab: function (el) {
        return new Tab(el);
    },
    Table: function (el) {
        return new Table(el);
    },
    Tag: function (el) {
        return new Tag(el);
    },
    Tooltip: function (el) {
        return new Tooltip(el);
    },
}

window.MYKL = {...window.MYKL, ...MYKL};

document.querySelectorAll('.form-calendar').forEach(el => MYKL.Calender(el));
document.querySelectorAll('.form-file').forEach(el => MYKL.File(el));
document.querySelectorAll('.form-range').forEach(el => MYKL.Range(el));
document.querySelectorAll('.form-select').forEach(el => MYKL.Select(el));
document.querySelectorAll('.form-textarea').forEach(el => MYKL.Textarea(el));
document.querySelectorAll('.accordion').forEach(el => MYKL.Accordion(el));
document.querySelectorAll('.auto-completes').forEach(el => MYKL.AutoComplete(el));
document.querySelectorAll('.btn[data-href]').forEach(el => MYKL.ButtonLink(el));
document.querySelectorAll('.dropdown').forEach(el => MYKL.Dropdown(el));
document.querySelectorAll('.emotion').forEach(el => MYKL.Emotion(el));
document.querySelectorAll('.navbar').forEach(el => MYKL.Navigation(el));
document.querySelectorAll('.process').forEach(el => MYKL.Process(el));
document.querySelectorAll('.progress').forEach(el => MYKL.Progress(el));
document.querySelectorAll('.star').forEach(el => MYKL.Star(el));
document.querySelectorAll('.tabs').forEach(el => MYKL.Tab(el));
document.querySelectorAll('.table').forEach(el => MYKL.Table(el));
document.querySelectorAll('.tooltip').forEach(el => MYKL.Tooltip(el));