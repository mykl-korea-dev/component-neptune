import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class Star extends Component {
    setElements() {
        const inputEl = this.$element.querySelector('input[type=number]');
        this.min = parseFloat(inputEl.getAttribute('min')) || 0;
        this.max = parseFloat(inputEl.getAttribute('max')) || 5;
        this.value = parseFloat(inputEl.getAttribute('value')) || 0;

        this.isRate = this.$element.querySelector('input[type=radio]');

        const starGroupEl = document.createElement('div');
        starGroupEl.classList.add('star-group');
        for (let i = parseInt(this.min, 10); i < parseInt(this.max, 10); i++) {
            const div = document.createElement('div');
            div.innerHTML = `
                ${this.value >= 1 ? `<div class="star-item star-fill" data-point="${i+1}"></div>` : ''}
                ${this.value >= 0.5 && this.value < 1 ? `<div class="star-item star-half" data-point="${i+1}"></div>` : ''}
                ${this.value < 0.5? `<div class="star-item star-empty" data-point="${i+1}"></div>` : ''}
            `
            starGroupEl.innerHTML += div.innerHTML;
            this.value -= 1;
        }
        this.$element.appendChild(starGroupEl);
        this.lockedStar = false;

        if(this.isRate) {
            const button = document.createElement('button');
            button.classList.add("btn-reset");
            button.textContent = "취소";
            this.$element.appendChild(button);

            const input = document.createElement('input');
            this.lockedStar = true;
        }
    }

    setEvents() {
        this.$element.addEventListener('mousemove', (e) => {
            if(!this.isRate || this.lockedStar) {
                return;
            }

            const { offsetX, target } = e;
            const index = parseInt(getDataset(target, "point"), 10) - 1;
            const { width } = target.getClientRects()[0];
            const isOverHalf = offsetX > width / 2;

            this.renderStar({clientIndex: index,  isOverHalf});
        })

        this.$element.addEventListener('click', (e) => {
            if(!this.isRate) {
                return;
            }

            const { target } = e;
            if(target.classList.contains("btn-reset")) {
                this.$element.querySelector('.checked')?.classList.remove("checked");
                this.lockedStar = false;
            }

            if(target.classList.contains("star-item")) {
                if(target.classList.contains("checked")) {
                    this.$element.querySelector('.checked')?.classList.remove("checked");
                    this.lockedStar = false;
                } else {
                    this.$element.querySelector('.checked')?.classList.remove("checked");
                    target.classList.add('checked');
                    const { offsetX } = e;
                    const index = parseInt(getDataset(target, "point"), 10) - 1;
                    const { width } = target.getClientRects()[0];
                    const isOverHalf = offsetX > width / 2;

                    this.renderStar({clientIndex: index,  isOverHalf});
                    this.lockedStar = true;
                }
            }
        })
    }

    renderStar(payload={}) {
        const { clientIndex = -1, isOverHalf = false } = payload;
        const regex = /star-fill|star-half|star-empty/g;

        [...this.$element.querySelectorAll('.star-item')].forEach((el, idx) => {
            el.className = idx < clientIndex ? el.className.replace(regex, 'star-fill') : el.className.replace(regex, 'star-empty')

            if (clientIndex === idx) {
                el.className = isOverHalf ? el.className.replace(regex, 'star-fill') : el.className.replace(regex, 'star-half')
            }
        })
    }
}

