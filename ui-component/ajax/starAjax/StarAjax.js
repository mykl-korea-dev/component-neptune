import Star from "../../star/Star.js";

export default class StarAjax extends Star {
    setElements() {
        this.$element.classList.add("mykl-star");

        const inputEl = this.$element.querySelector('input[type=number]');
        this.min = this.$data[inputEl.getAttribute("min").replace("$", "")] || 0;
        this.max = this.$data[inputEl.getAttribute("max").replace("$", "")] || 5;
        this.value = this.$data[inputEl.getAttribute("value").replace("$", "")] || 0;
        inputEl.setAttribute("min", this.min);
        inputEl.setAttribute("max", this.max);
        inputEl.setAttribute("value", this.value);
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


}