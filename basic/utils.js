export function getData(url, el, callback) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            callback(el, data)
        })
        .catch(err => console.log(err.message))
}

// Select
export function closeAllSelect(element) {
    /*a function that will close all selectAjax boxes in the document,
    except the current selectAjax box:*/
    let selectDivEl;
    let selectDivElLength;
    let selectedDivEl;
    let SelectedDivElLength;
    let arrNo = [];
    selectDivEl = document.getElementsByClassName("select-items");
    selectedDivEl = document.getElementsByClassName("select-selected");
    selectDivElLength = selectDivEl.length;
    SelectedDivElLength = selectedDivEl.length;

    for (let i = 0; i < SelectedDivElLength; i++){
        if (element == selectedDivEl[i]) {
            arrNo.push(i)
        }
        else {
            selectedDivEl[i].classList.remove("selectAjax-arrow-active");
        }

    }
    for (let i = 0; i < selectDivElLength; i++) {
        if (arrNo.indexOf(i)) {
            selectDivEl[i].classList.add("selectAjax-hide");
        }
    }
}