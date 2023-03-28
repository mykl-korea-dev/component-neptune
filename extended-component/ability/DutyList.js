import Component from "../../basic/Component.js";

export default class AbilityList extends Component {
    setElements() {
        this.$data.template = this.$element.querySelector('tbody').innerHTML;
    }

    setTemplate() {
        const { template, data, replace, other } = this.$data;
        return data.map(item => {
            let originHTML = template;
            [...Object.keys(item), ...other].map(key => {
                if (replace[key]) {
                    return originHTML = originHTML.replaceAll('$' + key, replace[key](item));
                }
                return originHTML = originHTML.replaceAll('$' + key, item[key])
            });
            return originHTML;
        }).join('');
    }

    render() {
        this.$element.querySelector('tbody').innerHTML = this.setTemplate();
    }

    setData(data) {
        this.$data = {
            ...data,
            template: this.$data.template
        }
        this.render();
    }
}