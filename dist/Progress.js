"use strict";

var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress-bar');
var _progress$dataset = progress.dataset,
    min = _progress$dataset.min,
    max = _progress$dataset.max,
    value = _progress$dataset.value;
progress.style.width = "".concat((parseInt(max, 10) - parseInt(min, 10)) * 5, "px");
progressBar.style.width = "".concat(parseInt(value, 10) / (parseInt(max, 10) - parseInt(min, 10)) * 100, "%");
//# sourceMappingURL=Progress.js.map