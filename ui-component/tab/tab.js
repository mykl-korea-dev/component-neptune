const tabNav = document.querySelector('.nav-tabs');

tabNav.addEventListener('click', ({target}) => {
    const id = target.getAttribute('href');
    document.querySelectorAll('.tab-list').forEach(el => el.style.display = 'none');
    console.log(id)
    document.querySelector(id).style.display = 'block';
})