import Component from "../../../basic/Component.js";

export default class TabAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-tab");
        this.headerTemplate = this.$element.querySelector('.tab-menu');
        this.bodyTemplate = this.$element.querySelector('.tab-content');

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
        this.$element.querySelector('.tab-item').classList.add("active");
        this.$element.querySelector('.tab-content').classList.add("show");
    }

    setTemplate() {
        if(this.bodyTemplate.innerHTML) {

        } else {
            return ''
        }
    }

    render() {
        this.$element.innerHTML += this.setTemplate();
    }

    setEvents() {
        this.$element.querySelector('nav').addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            const tabItem = target.matches(".tab-item") && target;

            if(!tabItem) {
                return;
            }

            const id = tabItem.getAttribute('href');
            [...this.$element.children].forEach(el => el.classList.contains('show') && el.classList.remove('show'));
            if(this.$element.querySelector(id)) {
                this.$element.querySelector(id).classList.add('show');
            } else {
                this.appendContent();
            }

            this.$element.querySelector('nav > .tab-item.active')?.classList.remove('active')
            tabItem.classList.toggle('active');
        });
    }
    // setEvents() {
    //     this.$element.querySelector('nav').addEventListener('click', (e) => {
    //         e.preventDefault();
    //         e.stopPropagation();
    //
    //         const { target } = e;
    //         if(target.classList.contains('tab-item')) {
    //             this.$element.querySelector(".tab-item.active").classList.remove('active');
    //             target.classList.add('active');
    //         }
    //     })
    // }

    appendContent() {

    }
}

