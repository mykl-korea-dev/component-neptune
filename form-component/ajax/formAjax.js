import Component from "../../basic/Component.js";

// 기본값
// 값이 여러개 전달 될 경우 전달 방법 선
export default class FormAjax extends Component {
    setEvents() {
        this.$element.querySelector('.form-submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const objs = {};
            [...this.$element.querySelectorAll('[name]')].forEach(el => {
                if(['radio', 'checkbox', 'select'].includes(el.getAttribute('type'))) {
                    if(el.checked) {
                        objs[el.getAttribute('name')] = el.value;
                    } else if(this.$data.default?.[el.getAttribute('name')]) {
                        objs[el.getAttribute('name')] = this.$data.default?.[el.getAttribute('name')]
                    }
                } else {
                    if(this.$data.list?.[el.getAttribute('name')]) {
                        if(el.value) {
                            objs[el.getAttribute('name')] = objs[el.getAttribute('name')]
                                ? objs[el.getAttribute('name')] + this.$data.list[el.getAttribute('name')] + el.value : el.value;
                        }
                    } else {
                        objs[el.getAttribute('name')] = objs[el.getAttribute('name')] ? [...objs[el.getAttribute('name')], el.value] : el.value
                    }
                }
            });

            this.$data.callback(objs);
        })
    }
}