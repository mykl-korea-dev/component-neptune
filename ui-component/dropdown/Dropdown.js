import Component from "../../basic/Component.js";

export default class Dropdown extends Component {
    setEvents() {
        this.$element.querySelector('.dropdown-toggle')?.addEventListener('mouseover', ({target}) => {
            // let maxHeight = 0;
            this.$element.querySelectorAll('.dropdown-menu').forEach(el => {
                // const {height} = el.getBoundingClientRect();

                el.style.opacity = '1';
                el.style.visibility = 'visible';
                // maxHeight = maxHeight < height ? height: maxHeight;
                this.$element.style.background="lightgoldenrodyellow";

            })
            // this.$element.style.height = maxHeight + 'px'
        })

        this.$element.addEventListener('mouseleave', () => {
            this.$element.querySelectorAll('.dropdown-menu').forEach(el => {
                el.style.opacity = '0';
                setTimeout(() => el.style.visibility = 'hidden', 500);
                this.$element.style.background="";

            })

        })
    }
}

document.querySelectorAll('.dropdown').forEach(el => new Dropdown(el));