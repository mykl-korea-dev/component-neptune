"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAllSelect = closeAllSelect;
exports.getData = getData;

function getData(url, callback) {
  fetch(url).then(function (data) {
    return data.json();
  }).then(function (data) {
    callback(data);
  })["catch"](function (err) {
    return console.log(err.message);
  });
} // Select


function closeAllSelect(element) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var selectDivEl;
  var selectDivElLength;
  var selectedDivEl;
  var SelectedDivElLength;
  var arrNo = [];
  selectDivEl = document.getElementsByClassName("select-items");
  selectedDivEl = document.getElementsByClassName("select-selected");
  selectDivElLength = selectDivEl.length;
  SelectedDivElLength = selectedDivEl.length;

  for (var i = 0; i < SelectedDivElLength; i++) {
    if (element == selectedDivEl[i]) {
      arrNo.push(i);
    } else {
      selectedDivEl[i].classList.remove("select-arrow-active");
    }
  }

  for (var _i = 0; _i < selectDivElLength; _i++) {
    if (arrNo.indexOf(_i)) {
      selectDivEl[_i].classList.add("select-hide");
    }
  }
}
//# sourceMappingURL=utils.js.map