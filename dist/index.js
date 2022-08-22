"use strict";

var _Select = _interopRequireDefault(require("./Select.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function getData(url, callback) {
  fetch(url).then(function (data) {
    return data.json();
  }).then(function (data) {
    callback(data);
  })["catch"](function (err) {
    return console.log(err.message);
  });
}

['http://localhost:3000/select', 'http://localhost:3000/select2'].forEach(function (url, i) {
  getData(url, function (data) {
    new _Select["default"](document.querySelectorAll('.form-select')[i], data);
  });
});
//# sourceMappingURL=index.js.map