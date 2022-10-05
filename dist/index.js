"use strict";

var _SelectAjax = _interopRequireDefault(require("./SelectAjax.js"));

var _utils = require("../../../basic/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

['http://localhost:3000/select', 'http://localhost:3000/select2'].forEach(function (url, i) {
  (0, _utils.getData)(url, function (data) {
    new _SelectAjax["default"](document.querySelectorAll('.form-selectAjax')[i], data);
  });
});
//# sourceMappingURL=index.js.map