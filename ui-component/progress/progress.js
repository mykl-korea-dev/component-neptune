"use strict";
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress-bar');
var _a = progress.dataset, min = _a.min, max = _a.max, value = _a.value;
progress.style.width = "".concat((parseInt(max, 10) - parseInt(min, 10)) * 5, "px");
progressBar.style.width = "".concat(parseInt(value, 10) / (parseInt(max, 10) - parseInt(min, 10)) * 100, "%");
//# sourceMappingURL=progress.js.map