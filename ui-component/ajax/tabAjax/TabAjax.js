import Component from "../../../basic/Component.js";

export default class TabAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-tab");
        if(this.$data.options) {
            const { id = 'id', value = 'value' } = this.$data.options;
            this.$element.querySelector('.tab-menu').innerHTML = this.$data.data.map(v => `
                <a href="${v[id]}" class="tab-item">${v[value]}</a>
            `).join("");
        } else {
            this.$element.querySelector('.tab-menu').innerHTML = this.$data.map(key => `
                <a href="${key}" class="tab-item">${this.$data[key]}</a>
            `).join("");
        }

        this.$element.querySelector('.tab-item.active')?.classList.remove('active');
        this.$element.querySelector('.tab-content.show')?.classList.remove('show');
        // !this.$element.querySelector(".tab-item.active") &&
        this.$element.querySelector('.tab-item').classList.add("active");
        // !this.$element.querySelector(".tab-content.show") &&
        this.$element.querySelector('.tab-content').classList.add("show");
    }

    setEvents() {
        this.$element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const { target } = e;
            if(target.classList.contains('tab-item')) {
                this.$element.querySelector(".tab-item.active").classList.remove('active');
                target.classList.add('active');
            }
        })
    }
}
