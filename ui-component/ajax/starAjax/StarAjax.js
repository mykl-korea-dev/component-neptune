import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";
import Star from "../../star/Star.js";

export default class StarAjax extends Star {
    setElements() {
        this.$element.classList.add("mykl-star");
        let { min , max, value } = this.$data;
        min = Number(min) || 0;
        max = Number(max) || 5;
        value = Number(value) || 0;
        this.isRate = getDataset(this.$element, "rate") === 'true';

        const starGroupEl = document.createElement('div');
        starGroupEl.classList.add('star-group');
        for (let i = parseInt(min, 10); i < parseInt(max, 10); i++) {
            const div = document.createElement('div');
            div.innerHTML = `
                ${value >= 1 ? `<div class="star-item star-fill" data-point="${i+1}"></div>` : ''}
                ${value >= 0.5 && value < 1 ? `<div class="star-item star-half" data-point="${i+1}"></div>` : ''}
                ${value < 0.5? `<div class="star-item star-empty" data-point="${i+1}"></div>` : ''}
            `
            starGroupEl.innerHTML += div.innerHTML;
            value -= 1;
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

// getData("http://localhost:3000/progress", (data) => new StarAjax(document.querySelector('.star-ajax'), data));

