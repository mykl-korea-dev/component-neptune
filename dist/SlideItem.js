"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = setItem;

function setItem(data) {
  var div = document.createElement('div');
  div.classList.add('item-group');
  var order = {
    1: data.image,
    2: data.title,
    3: data.department,
    4: {
      link: data.link,
      name: data.name
    }
  };

  for (var orderKey in order) {
    var item = order[orderKey] && createElement(orderKey, order[orderKey]);

    if (orderKey == 2) {
      item.classList.add('title');
    }

    item && div.appendChild(item);
  }

  return div;
}

function createElement(type, data) {
  switch (type) {
    case "1":
      var image = document.createElement('img');
      image.src = data;
      return image;

    case "4":
      var a = document.createElement('a');
      a.href = data.link;
      a.textContent = data.name;
      return a;

    default:
      var span = document.createElement('span');
      span.innerHTML = data;
      return span;
  }
}
//# sourceMappingURL=SlideItem.js.map