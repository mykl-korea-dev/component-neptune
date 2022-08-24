import Select from "./Select.js";
import {getData} from "../../basic/utils.js";

['http://localhost:3000/select', 'http://localhost:3000/select2'].forEach((url, i) => {
    getData(url, (data) => {
        new Select(document.querySelectorAll('.form-select')[i], data)
    })
})

