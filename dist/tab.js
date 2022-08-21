"use strict";

var tabNav = document.querySelector('.nav-tabs');
tabNav.addEventListener('click', function (_ref) {
  var target = _ref.target;
  var id = target.getAttribute('href');
  document.querySelectorAll('.tab-list').forEach(function (el) {
    return el.style.display = 'none';
  });
  console.log(id);
  document.querySelector(id).style.display = 'block';
});
//# sourceMappingURL=tab.js.map