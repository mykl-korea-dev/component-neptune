import Component from "../../basic/Component.js";

export default class Modal extends Component {
    setEvents() {
        this.$element.querySelector('.modal-btn')?.addEventListener('click', () => {
            this.$element.querySelector('.modal-dialog').classList.add('show');
            document.body.style.overflow = 'hidden';
        })

        this.$element.querySelector('.modal-dialog')?.addEventListener('click', (e) => {
            if(this.$element.querySelector('.modal-dialog').classList.contains('show')) {
                this.$element.querySelector('.modal-dialog.show')?.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        })

        this.$element.querySelector('.modal-content')?.addEventListener('click', (e) => {
            e.stopPropagation();
            return;
        })

        this.$element.querySelectorAll('[data-func="modal"]').forEach(el => el.addEventListener('click', () => {
            this.$element.querySelector('.modal-dialog').classList.remove('show');
            document.body.style.overflow = 'auto';
        }))
    }
}

