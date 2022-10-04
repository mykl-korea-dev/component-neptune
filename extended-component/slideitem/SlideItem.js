export function setItem(data) {
    const div = document.createElement('div');
    div.classList.add('item-group');
    const order = {1: data.image, 2: data.title, 3: data.department, 4: {link: data.link, name: data.name}}

    for (const orderKey in order) {
        const item = order[orderKey] && createElement(orderKey, order[orderKey]);
        if(orderKey == 2) {
            item.classList.add('title');
        }
        item && div.appendChild(item);
    }
    return div
}

function createElement(type, data) {
    switch (type) {
        case "1":
            const image = document.createElement('img');
            image.src = data;
            return image;
        case "4":
            const a = document.createElement('a');
            a.href = data.link;
            a.textContent = data.name;
            return a;
        default:
            const span = document.createElement('span');
            span.innerHTML = data;
            return span;
    }
}