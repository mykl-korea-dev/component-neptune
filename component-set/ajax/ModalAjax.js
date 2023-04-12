import Modal from "../modal/Modal.js";

export default class ModalAjax extends Modal {
    setElements() {
        this.$element.classList.add("mykl-modal");
        this.template = this.$element.innerHTML;
    }

    setTemplate() {
        if(this.template) {
            const { data = {}, replace = {}, other = [] } = this.$data;
            let originHTML = this.template;
            [...Object.keys(data), ...other].map(key => {
                if (replace[key]) {
                    return originHTML = originHTML.replaceAll('$' + key, replace[key](data));
                }
                return originHTML = originHTML.replaceAll('$' + key, data[key])
            });
            return originHTML;
        }
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    setData(data) {
        this.$data = { ...this.$data, ...data};
        this.render();
    }
}