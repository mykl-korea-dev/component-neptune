import Component from "../../basic/Component.js";

// 기본값
// 값이 여러개 전달 될 경우 전달 방법 선
export default class FormAjax extends Component {
    setEvents() {
        this.$element.querySelector('.form-submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const objs = {};
            [...this.$element.querySelectorAll('[name]')].forEach(el => {
                const isFormEl = ['radio', 'checkbox', 'select'].includes(el.getAttribute('type'));
                const isConnectText = this.$data.list?.[el.getAttribute('name')];
                const isDefaultText = this.$data.default?.[el.getAttribute('name')];
                // if(['radio', 'checkbox', 'select'].includes(el.getAttribute('type'))) {
                //     if(el.checked) {
                //         objs[el.getAttribute('name')] = el.value;
                //     } else if(this.$data.default?.[el.getAttribute('name')]) {
                //         objs[el.getAttribute('name')] = this.$data.default?.[el.getAttribute('name')]
                //     }
                // } else {
                    if(isConnectText || (isFormEl && el.checked && isConnectText)) {
                        const isValue = isFormEl ? el.checked : el.value;
                        if(isValue) {
                            if(/\[]/.test(isConnectText)) {
                                objs[el.getAttribute('name')] = objs[el.getAttribute('name')]
                                    ? [...objs[el.getAttribute('name')], el.value] : [el.value];
                            } else {
                                objs[el.getAttribute('name')] = objs[el.getAttribute('name')]
                                    ? objs[el.getAttribute('name')] + isConnectText + el.value : el.value;
                            }
                        }
                    } else if (isDefaultText) {
                        objs[el.getAttribute('name')] = isDefaultText;
                    } else {
                        objs[el.getAttribute('name')] = objs[el.getAttribute('name')] ? [...objs[el.getAttribute('name')], el.value] : el.value
                    }
                // }
            });

            this.$data.callback(objs);
        })
    }
}