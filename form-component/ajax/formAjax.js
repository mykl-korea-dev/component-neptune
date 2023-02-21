import Component from "../../basic/Component.js";

// 기본값
// 값이 여러개 전달 될 경우 전달 방법 선
export default class FormAjax extends Component {
    setEvents() {
        this.$element.querySelector('.form-submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const objs = {};
            [...this.$element.querySelectorAll('[name]')].forEach(el => {
                const key = el.getAttribute('name')
                const isFormEl = ['radio', 'checkbox', 'select'].includes(el.getAttribute('type'));
                const isConnectText = this.$data.list?.[el.getAttribute('name')];
                const isDefaultText = this.$data.default?.[el.getAttribute('name')];

                if(isConnectText || (isFormEl && el.checked && isConnectText)) {
                    const isValue = isFormEl ? el.checked : el.value;
                    if(isValue) {
                        if(/\[]/.test(isConnectText)) {
                            objs[key] = objs[key]
                                ? [...objs[key], el.value] : [el.value];
                        } else {
                            objs[key] = objs[key]
                                ? objs[key] + isConnectText + el.value : el.value;
                        }
                    }
                } else if(isFormEl && el.checked || !isFormEl) {
                    objs[key] = objs[key] ? [...objs[key], el.value] : el.value
                }

                if(isDefaultText && !objs[key]) {
                    objs[key] = isDefaultText;
                }
            });

            this.$data.callback(objs);
        })
    }
}