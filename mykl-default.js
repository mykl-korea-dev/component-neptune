import Calendar from './form-component/calendar/Calendar.js';
// import File from './form-component/file/File.js';
import Range from './form-component/range/Range.js';
import Select from './form-component/select/Select.js';
import Textarea from './form-component/textarea/Textarea.js';
import Time from './form-component/time/Time.js';

import Accordion from "./ui-component/accordion/Accordion.js";
import ButtonLink from "./ui-component/button/Button.js";
import Dropdown from "./ui-component/dropdown/Dropdown.js";
import Emotion from "./ui-component/emotion/emotion.js";
import Navigation from "./ui-component/navigation/Navigation.js";
import Process from "./ui-component/process/Process.js";
import Progress from "./ui-component/progress/Progress.js";
import Star from "./ui-component/star/Star.js";
import Tab from "./ui-component/tab/tab.js";
// import Tag from "./ui-component/tag/Tag.js";

import './basic/common.css'
import './form-component/calendar/calendar.css';
import './form-component/checkbox/checkbox.css';
import './form-component/file/file.css';
import './form-component/form-group/form-group.css';
import './form-component/input/input.css';
import './form-component/radio/radio.css';
import './form-component/range/range.css';
import './form-component/select/select.css';
import './form-component/textarea/textarea.css';
import './form-component/time/time.css';

import './ui-component/accordion/accordion.css';
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
import "./ui-component/linkBox/linkGroup.css";
import './ui-component/loading/loading.css';

import ContextMessage from "./component-set/message/ContextMessage.js";
import './component-set/message/message.css';
import './component-set/card/card.css';
import './component-set/imageSlide/imageSlide.css';
import './component-set/media/media.css';
import './component-set/message/message.css';
import './component-set/modal/modal.css';

import "./polyfill.js";
import Modal from "./component-set/modal/Modal";
import PostSearch from "./component-set/postSearch/PostSearch";
import InputPassword from "./form-component/input/InputPassword";
import Loading from "./ui-component/loading/Loading";

export function setRootColor(nameOrObj="", color="") {
    if(color === "") {
        Object.keys(nameOrObj).forEach(key => document.documentElement.style.setProperty(key, nameOrObj[key]));
    } else {
        document.documentElement.style.setProperty(nameOrObj, color);
    }
}

export const returnComponent = (component) => {
    return (selector, data) => {
        if(!MYKL[selector]) {
            MYKL[selector] = new component(document.querySelector(selector), data);
        } else {
            MYKL[selector].setData(data);
        }
        return MYKL[selector]
    };
}

const MYKLBasic = {
    // 기본 색상 변경
    setRootColor: (name, color) => setRootColor(name, color),
    // 모든 로딩 중단
    stopAllLoading: function() {
        document.querySelectorAll('.mykl-loading').forEach(el => el.classList.add('loading-stop'));
    },
    Loading: function (el, data) {
        return new Loading(document.querySelector(el), data);
    },
    // form -----------------------------------------------------
    InputPassword: function (el) {
        return new InputPassword(el);
    },
    Calender: function (el) {
        return new Calendar(el);
    },
    // File: function (el) {
    //     return new File(el);
    // },
    Range: function (el) {
        return new Range(el);
    },
    Select: function (el) {
        return new Select(el);
    },
    Textarea: function (el) {
        return new Textarea(el);
    },
    Time: function (el) {
        return new Time(el);
    },
    // ui --------------------------------------------------
    Accordion: function (el) {
        return new Accordion(el);
    },
    ButtonLink: function (el) {
        return new ButtonLink(el);
    },
    // Dropdown: function (el) {
    //     return new Dropdown(el);
    // },
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
    // Tag: function (el) {
    //     return new Tag(el);
    // },
    Modal: function(el) {
        return new Modal(el);
    },
    ContextMessage: function (selector, callback) {
        return new ContextMessage(document.querySelector(selector), callback)
    },
    PostSearch: function (el) {
        return new PostSearch(el)
    }
}

window.MYKL = {...window.MYKL, ...MYKLBasic};

document.querySelectorAll('.mykl-input[type=password]').forEach(el => MYKL.InputPassword(el));
document.querySelectorAll('.mykl-calendar').forEach(el => MYKL.Calender(el));
// document.querySelectorAll('.mykl-file').forEach(el => MYKL.File(el));
document.querySelectorAll('.mykl-range').forEach(el => MYKL.Range(el));
document.querySelectorAll('.mykl-select').forEach(el => MYKL.Select(el));
document.querySelectorAll('.mykl-textarea.textarea-smart').forEach(el => MYKL.Textarea(el));
document.querySelectorAll('.mykl-time').forEach(el => MYKL.Time(el));

document.querySelectorAll('.mykl-accordion').forEach(el => MYKL.Accordion(el));
document.querySelectorAll('.mykl-auto-complete').forEach(el => MYKL.AutoComplete(el));
document.querySelectorAll('.mykl-btn[data-href]').forEach(el => MYKL.ButtonLink(el));
// document.querySelectorAll('.mykl-dropdown').forEach(el => MYKL.Dropdown(el));
document.querySelectorAll('.mykl-emotion').forEach(el => MYKL.Emotion(el));
document.querySelectorAll('.mykl-navbar').forEach(el => MYKL.Navigation(el));
document.querySelectorAll('.process').forEach(el => MYKL.Process(el));
document.querySelectorAll('.mykl-progress').forEach(el => MYKL.Progress(el));
document.querySelectorAll('.mykl-star').forEach(el => MYKL.Star(el));
document.querySelectorAll('.mykl-tab').forEach(el => MYKL.Tab(el));
// document.querySelectorAll('.mykl-tag').forEach(el => MYKL.Tag(el));

document.querySelectorAll('.mykl-modal').forEach(el => MYKL.Modal(el));
document.querySelectorAll('.mykl-postSearch').forEach(el => MYKL.PostSearch(el));