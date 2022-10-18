export function getData(url, callback) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            callback(data)
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

export function throttle(func, delay) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if(!lastRan) {
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastRan) clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if((Date.now() - lastRan) >= delay) {
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    }
}

export function getDataset(element, name) {
    if(!element) {
        return null;
    }

    if(element.dataset) {
        return element.dataset[name] || '';
    } else if(element.getAttribute) {
        return element.getAttribute(`data-${spinalCase(name)}`) || '';
    }
}

export function spinalCase(str) {
    // Create a variable for the white space and underscores.
    const regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}