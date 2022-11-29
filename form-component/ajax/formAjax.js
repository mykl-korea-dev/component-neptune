import Component from "../../basic/Component.js";

export default class FormAjax extends Component {
    setEvents() {
        this.$element.querySelector('.form-submit-btn').addEventListener('click', () => {
            const objs = {};
            [...this.$element.querySelectorAll('[name]')].forEach(el => objs[el.getAttribute('name')] = el.value);

            fetch(this.$data.url, {
                method: 'POST',
                headers: {
                    ...this.$data.headers,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(objs),
            }).then(res => res.text()).then(data => console.log(data));
        })
    }
}