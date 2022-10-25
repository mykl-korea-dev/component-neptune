export function getData(url, callback) {
    return fetch(url)
        .then(data => data.json())
        .then(data => callback(data))
        .catch(err => console.log(err.message))
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