export function closeAllSelect(element: HTMLElement) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let selectDivEl: HTMLCollectionOf<Element>;
    let selectDivElLength: number;
    let selectedDivEl: HTMLCollectionOf<Element>;
    let SelectedDivElLength: number;
    let arrNo: number[] = [];
    selectDivEl = document.getElementsByClassName("select-items");
    selectedDivEl = document.getElementsByClassName("select-selected");
    selectDivElLength = selectDivEl.length;
    SelectedDivElLength = selectedDivEl.length;

    for (let i = 0; i < SelectedDivElLength; i++){
        if (element == selectedDivEl[i]) {
            arrNo.push(i)
        }
        else {
            selectedDivEl[i].classList.remove("select-arrow-active");
        }

    }
    for (let i = 0; i < selectDivElLength; i++) {
        if (arrNo.indexOf(i)) {
            selectDivEl[i].classList.add("select-hide");
        }
    }
}