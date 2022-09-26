import {File, Select, Range} from "./mykl-ui-components.js";
document.querySelectorAll('.form-file').forEach(el => File(el));
Select(document.querySelector('.form-select'));
Range(document.querySelector('.form-range'));