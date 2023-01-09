import Component from "../../basic/Component.js";

export default class FormAjax extends Component {
    setEvents() {
        this.$element.querySelector('.form-submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const objs = {};
            [...this.$element.querySelectorAll('[name]')].forEach(el => {

                if(['radio', 'checkbox', 'select'].includes(el.getAttribute('type'))) {
                    if(el.checked) {
                        objs[el.getAttribute('name')] = el.value;
                    }
                } else {
                    objs[el.getAttribute('name')] = objs[el.getAttribute('name')] ? [...objs[el.getAttribute('name')], el.value] : el.value
                }
            });

            this.$data.callback(objs);
        })
    }
}