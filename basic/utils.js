export function closeAllSelect(element) {
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
        }
        else {
            selectedDivEl[i].classList.remove("select-arrow-active");
        }
    }
    for (var i = 0; i < selectDivElLength; i++) {
        if (arrNo.indexOf(i)) {
            selectDivEl[i].classList.add("select-hide");
        }
    }
}
//# sourceMappingURL=utils.js.map