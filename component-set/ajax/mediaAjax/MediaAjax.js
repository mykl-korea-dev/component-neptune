import Component from "../../../basic/js/Component.js";

export default class MediaAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-media");
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
}