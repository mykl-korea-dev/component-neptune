import Component from "../../basic/js/Component.js";

export default class Process extends Component {
    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(!target.classList.contains('active') && !target.classList.contains('done')) {
                return;
            }
            this.$element.querySelector('.active')?.classList.remove('active');
            target.classList.add('active');
            target.classList.remove('done');
        })
        this.$element.querySelector('.next').addEventListener('click', () => {
            const currentEl = this.$element.querySelector('.active');
            const nextSiblings = this.$element.querySelectorAll('.active ~ .process-item');
            let nextEl = null;
            for (let i = 0; i < nextSiblings.length; i++) {
                if(!nextSiblings[i].classList.contains('disabled')) {
                    nextEl = nextSiblings[i];
                    break;
                }
            }
            if(nextEl) {
                currentEl.classList.remove('active');
                currentEl.classList.add('done');
                nextEl.classList.add('active');
            }
        })
        this.$element.querySelector('.prev').addEventListener('click', () => {
            const currentEl = this.$element.querySelector('.active');
            const prevSiblings = this.$element.querySelectorAll('.done');
            let prevEl = null;
            for (let i = prevSiblings.length -1; i >= 0; i--) {
                if(!prevSiblings[i].classList.contains('disabled')) {
                    prevEl = prevSiblings[i];
                    break;
                }
            }
            if(prevEl) {
                currentEl.classList.remove('active');
                prevEl.classList.add('active');
                prevEl.classList.remove('done');
            }
        })
    }
}

// new Process(document.querySelector('.process'));