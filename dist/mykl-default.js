"use strict";

var _Calendar = _interopRequireDefault(require("./form-component/calendar/Calendar.js"));

var _File2 = _interopRequireDefault(require("./form-component/file/File.js"));

var _Range2 = _interopRequireDefault(require("./form-component/range/Range.js"));

var _Select2 = _interopRequireDefault(require("./form-component/select/Select.js"));

var _Textarea2 = _interopRequireDefault(require("./form-component/textarea/Textarea.js"));

var _Accordion2 = _interopRequireDefault(require("./ui-component/accordion/Accordion.js"));

var _AutoComplete2 = _interopRequireDefault(require("./ui-component/autoComplete/AutoComplete.js"));

var _Button = _interopRequireDefault(require("./ui-component/button/Button.js"));

var _Dropdown2 = _interopRequireDefault(require("./ui-component/dropdown/Dropdown.js"));

var _emotion = _interopRequireDefault(require("./ui-component/emotion/emotion.js"));

var _Navigation2 = _interopRequireDefault(require("./ui-component/navigation/Navigation.js"));

var _Process2 = _interopRequireDefault(require("./ui-component/process/Process.js"));

var _Progress2 = _interopRequireDefault(require("./ui-component/progress/Progress.js"));

var _Star2 = _interopRequireDefault(require("./ui-component/star/Star.js"));

var _tab = _interopRequireDefault(require("./ui-component/tab/tab.js"));

var _Table2 = _interopRequireDefault(require("./ui-component/table/Table.js"));

var _Tag2 = _interopRequireDefault(require("./ui-component/tag/Tag.js"));

var _Tooltip2 = _interopRequireDefault(require("./ui-component/tooltip/Tooltip.js"));

require("./form-component/calendar/calendar.css");

require("./form-component/calendar/time.css");

require("./form-component/checkbox/checkbox.css");

require("./form-component/file/file.css");

require("./form-component/form-group/form-group.css");

require("./form-component/radio/radio.css");

require("./form-component/range/range.css");

require("./form-component/select/select.css");

require("./form-component/textarea/textarea.css");

require("./ui-component/accordion/accordion.css");

require("./ui-component/autoComplete/autoComplete.css");

require("./ui-component/button/button.css");

require("./ui-component/dropdown/dropdown.css");

require("./ui-component/emotion/emotion.css");

require("./ui-component/img/img.css");

require("./ui-component/navigation/navigation.css");

require("./ui-component/pagination/pagination.css");

require("./ui-component/process/process.css");

require("./ui-component/progress/progress.css");

require("./ui-component/star/star.css");

require("./ui-component/step/step.css");

require("./ui-component/tab/tab.css");

require("./ui-component/table/table.css");

require("./ui-component/tag/tag.css");

require("./ui-component/text/text.css");

require("./ui-component/tooltip/tooltip.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MYKL = {
  // form -----------------------------------------------------
  Calender: function Calender(el) {
    return new _Calendar["default"](el);
  },
  File: function File(el) {
    return new _File2["default"](el);
  },
  Range: function Range(el) {
    return new _Range2["default"](el);
  },
  Select: function Select(el) {
    return new _Select2["default"](el);
  },
  Textarea: function Textarea(el) {
    return new _Textarea2["default"](el);
  },
  // ui --------------------------------------------------
  Accordion: function Accordion(el) {
    return new _Accordion2["default"](el);
  },
  AutoComplete: function AutoComplete(el) {
    return new _AutoComplete2["default"](el);
  },
  ButtonLink: function ButtonLink(el) {
    return new _Button["default"](el);
  },
  Dropdown: function Dropdown(el) {
    return new _Dropdown2["default"](el);
  },
  Emotion: function Emotion(el) {
    return new _emotion["default"](el);
  },
  Navigation: function Navigation(el) {
    return new _Navigation2["default"](el);
  },
  Process: function Process(el) {
    return new _Process2["default"](el);
  },
  Progress: function Progress(el) {
    return new _Progress2["default"](el);
  },
  Star: function Star(el) {
    return new _Star2["default"](el);
  },
  Tab: function Tab(el) {
    return new _tab["default"](el);
  },
  Table: function Table(el) {
    return new _Table2["default"](el);
  },
  Tag: function Tag(el) {
    return new _Tag2["default"](el);
  },
  Tooltip: function Tooltip(el) {
    return new _Tooltip2["default"](el);
  }
};
window.MYKL = _objectSpread(_objectSpread({}, window.MYKL), MYKL);
document.querySelectorAll('.form-calendar').forEach(function (el) {
  return MYKL.Calender(el);
});
document.querySelectorAll('.form-file').forEach(function (el) {
  return MYKL.File(el);
});
document.querySelectorAll('.form-range').forEach(function (el) {
  return MYKL.Range(el);
});
document.querySelectorAll('.form-select').forEach(function (el) {
  return MYKL.Select(el);
});
document.querySelectorAll('.form-textarea').forEach(function (el) {
  return MYKL.Textarea(el);
});
document.querySelectorAll('.accordion').forEach(function (el) {
  return MYKL.Accordion(el);
});
document.querySelectorAll('.auto-completes').forEach(function (el) {
  return MYKL.AutoComplete(el);
});
document.querySelectorAll('.btn[data-href]').forEach(function (el) {
  return MYKL.ButtonLink(el);
});
document.querySelectorAll('.dropdown').forEach(function (el) {
  return MYKL.Dropdown(el);
});
document.querySelectorAll('.emotion').forEach(function (el) {
  return MYKL.Emotion(el);
});
document.querySelectorAll('.navbar').forEach(function (el) {
  return MYKL.Navigation(el);
});
document.querySelectorAll('.process').forEach(function (el) {
  return MYKL.Process(el);
});
document.querySelectorAll('.progress').forEach(function (el) {
  return MYKL.Progress(el);
});
document.querySelectorAll('.star').forEach(function (el) {
  return MYKL.Star(el);
});
document.querySelectorAll('.tabs').forEach(function (el) {
  return MYKL.Tab(el);
});
document.querySelectorAll('.table').forEach(function (el) {
  return MYKL.Table(el);
});
document.querySelectorAll('.tooltip').forEach(function (el) {
  return MYKL.Tooltip(el);
});
//# sourceMappingURL=mykl-default.js.map