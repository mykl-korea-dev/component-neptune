import Select from "./Select.js";

function getData(url, callback) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            callback(data)
        })
        .catch(err => console.log(err.message))
}

['http://localhost:3000/select', 'http://localhost:3000/select2'].forEach((url, i) => {
    getData(url, (data) => {
        new Select(document.querySelectorAll('.form-select')[i], data)
    })
})

