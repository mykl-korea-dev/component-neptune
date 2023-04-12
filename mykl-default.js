// Form
import InputPassword from "./form-component/input/InputPassword.js";
import Calendar from "./form-component/calendar/Calendar.js";
import Range from "./form-component/range/Range.js";
import Select from "./form-component/select/Select.js";
import Textarea from "./form-component/textarea/Textarea.js";
import Time from "./form-component/time/Time.js";
import SelectMultiCheck from "./form-component/select-multi-check/Select-multi-check";

// UI
import Button from "./ui-component/button/Button.js";
import Progress from "./ui-component/progress/Progress.js";
import Accordion from "./ui-component/accordion/Accordion.js";
import Tab from "./ui-component/tab/tab.js";
import Tag from "./ui-component/tag/Tag.js";
import Emotion from "./ui-component/emotion/emotion.js";
import Star from "./ui-component/star/Star.js";
import Loading from "./ui-component/loading/Loading.js";
import Navigation from "./ui-component/navigation/Navigation.js";
import Process from "./ui-component/process/Process.js";

// Set
import ContextMessage from "./component-set/message/ContextMessage.js";
import Modal from "./component-set/modal/Modal.js";
import PostSearch from "./component-set/postSearch/PostSearch.js";

// Style
import "./basic/common.css";
import "./form-component/form_style.css";
import "./ui-component/ui_style.css";
import "./component-set/set_style.css";
import AutoComplete from "./ui-component/ajax/autoCompleteAjax/AutoComplete.js";

export function setRootColor(nameOrObj = "", color = "") {
  if (color === "") {
    Object.keys(nameOrObj).forEach((key) =>
      document.documentElement.style.setProperty(key, nameOrObj[key])
    );
  } else {
    document.documentElement.style.setProperty(nameOrObj, color);
  }
}

export const returnComponent = (component) => {
  return (selector, data = []) => {
    if (!MYKL[selector]) {
      MYKL[selector] = new component(document.querySelector(selector), data);
    } else {
      MYKL[selector].setData(data);
    }
    return MYKL[selector];
  };
};

const MYKLBasic = {
  // 기본 색상 변경
  setRootColor: (name, color) => setRootColor(name, color),
  // 모든 로딩 중단
  stopAllLoading: function () {
    document
      .querySelectorAll(".mykl-loading")
      .forEach((el) => el.classList.add("loading-stop"));
  },
  Loading: function (el, data) {
    return new Loading(document.querySelector(el), data);
  },
  // form -----------------------------------------------------
  InputPassword: returnComponent(InputPassword),
  Calender: returnComponent(Calendar),
  // File: function (el) {
  //     return new File(el);
  // },
  Range: returnComponent(Range),
  Select: returnComponent(Select),
  Textarea: returnComponent(Textarea),
  Time: returnComponent(Time),
  // ui --------------------------------------------------
  Button: returnComponent(Button),
  Progress: returnComponent(Progress),
  Accordion: returnComponent(Accordion),
  Tab: returnComponent(Tab),
  Tag: returnComponent(Tag),
  Emotion: returnComponent(Emotion),
  Star: returnComponent(Star),
  // Navigation: returnComponent(Navigation),
  // Process: returnComponent(Process),
  // set -------------------------------------------------
  Modal: returnComponent(Modal),
  // ContextMessage: returnComponent(ContextMessage),
  PostSearch: returnComponent(PostSearch),
  SelectMultiCheck: returnComponent(SelectMultiCheck),
};

window.MYKL = { ...window.MYKL, ...MYKLBasic };

document
  .querySelectorAll(".mykl-input[type=password]")
  .forEach((el) => new InputPassword(el));
document.querySelectorAll(".mykl-calendar").forEach((el) => new Calendar(el));
document.querySelectorAll(".mykl-range").forEach((el) => new Range(el));
document.querySelectorAll(".mykl-select").forEach((el) => new Select(el));
document
  .querySelectorAll(".mykl-textarea.textarea-smart")
  .forEach((el) => new Textarea(el));
document.querySelectorAll(".mykl-time").forEach((el) => new Time(el));
// document.querySelectorAll('.mykl-file').forEach(el => MYKL.File(el));

document.querySelectorAll(".mykl-progress").forEach((el) => new Progress(el));
document.querySelectorAll(".mykl-accordion").forEach((el) => new Accordion(el));
document.querySelectorAll(".mykl-tab").forEach((el) => new Tab(el));
document.querySelectorAll(".mykl-tag").forEach((el) => new Tag(el));
document.querySelectorAll(".mykl-emotion").forEach((el) => new Emotion(el));
document.querySelectorAll(".mykl-star").forEach((el) => new Star(el));
// document.querySelectorAll('.mykl-navbar').forEach(el =>  new Navigation(el));
// document.querySelectorAll('.mykl-process').forEach(el =>  new Process(el));

document.querySelectorAll(".mykl-modal").forEach((el) => new Modal(el));
document
  .querySelectorAll(".mykl-postSearch")
  .forEach((el) => new PostSearch(el));

document
  .querySelectorAll(".mykl-select-multi-check")
  .forEach((el) => new SelectMultiCheck(el));
