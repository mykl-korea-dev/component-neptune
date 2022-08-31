"use strict";

var _Range = _interopRequireDefault(require("./Range.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

document.querySelectorAll('.form-range').forEach(function (el) {
  return new _Range["default"](el);
});
//# sourceMappingURL=index.js.map