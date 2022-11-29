import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class Time extends Component {
    setElements() {
        let div = document.createElement('div');
        div.classList.add('time-container');
        const step = getDataset(this.$element, 'step');
        [this.currentHour, this.currentMin] = [new Date().getHours(), new Date().getMinutes()];
        const {closeHour, closeMinute} = this.getCloseTime(this.currentHour, this.currentMin);

        div.innerHTML = `
            <span class="selected-time">
                ${Number(closeHour) <= 12 ? '오전' : '오후'} ${this.setInTwelve(closeHour)}:${closeMinute}
            </span>
            <button type="button" class="toggle-button">시간</button>
            <div class="time-wrapper">
                <div class="day-night">
                    <span ${Number(closeHour) <= 12 ? 'class="time-mark"':''}>오전</span>
                    <span ${Number(closeHour) >= 12 ? 'class="time-mark"':''}>오후</span>
                </div>
                <div class="time-box"></div>
            </div>
        `

        this.$element.appendChild(div);
        const timeWrapper = this.$element.querySelector('.time-box');

        for (let i = 1; i <= 12; i++) {
            for (let j = 0; j < 60; j += parseInt(step, 10)) {
                const timeDiv = document.createElement('div');
                timeDiv.classList.add('time-group');
                (Number(this.setInTwelve(closeHour)) === i && Number(closeMinute) === j) && timeDiv.classList.add('time-mark')
                timeDiv.innerHTML = `${this.setTwoDigits(i)}:${this.setTwoDigits(j)}`;
                timeWrapper.appendChild(timeDiv);
            }
        }
    }

    setEvents() {
        const timeWrapper = this.$element.querySelector('.time-wrapper');

        this.$element.querySelector('.toggle-button')?.addEventListener('click', () => {
            this.$element.querySelectorAll('.selected')?.forEach(el => el.classList.remove('selected'));
            timeWrapper?.classList.toggle('show');
            const timeBoxEl = timeWrapper.querySelector('.time-box');
            const [firstEl, markEl] = [timeBoxEl.firstChild, timeBoxEl.querySelector('.time-mark')]
            const [firstY, markY] = [firstEl.getBoundingClientRect().y, markEl.getBoundingClientRect().top];
            // 가장 상단 위치
            // timeWrapper.querySelector('.time-box').scrollTop = markY - firstY;
            // 중간 위치
            timeWrapper.querySelector('.time-box').scrollTop = markY - firstY - timeBoxEl.getBoundingClientRect().height / 2;
        })

        this.$element.querySelector('.time-box').addEventListener('click', ({target}) => {
            if(target.classList.contains('time-group')) {
                this.$element.querySelector('.time-box .time-mark').classList.remove('time-mark');
                target.classList.add('time-mark');
                const [selectedHour, selectedMinute] = target.textContent.split(':');
                const twelveHour = this.$element.querySelector('.day-night .time-mark').textContent === '오전' ? selectedHour : Number(selectedHour) + 12;
                this.$element.querySelector('.time-input').value = `${twelveHour}:${selectedMinute}`;
                this.$element.querySelector('.selected-time').textContent = `${this.$element.querySelector('.day-night .time-mark').textContent} ${target.textContent}`
            }
        })

        this.$element.querySelector('.day-night').addEventListener('click', ({target}) => {
            if(target === this.$element.querySelector('.day-night')) {
                return;
            }
            this.$element.querySelector('.day-night .time-mark').classList.remove('time-mark');
            target.classList.add('time-mark');
            const [selectedHour, selectedMinute] = this.$element.querySelector('.time-box .time-mark').textContent.split(':');
            const twelveHour = this.$element.querySelector('.day-night .time-mark').textContent === '오전' ? selectedHour : Number(selectedHour) + 12;
            this.$element.querySelector('.time-input').value = `${twelveHour}:${selectedMinute}`;
            this.$element.querySelector('.selected-time').textContent = `${target.textContent} ${this.$element.querySelector('.time-box .time-mark').textContent} `
        })

        document.addEventListener('click', (e) => {
            (e.composedPath().find(el => el === this.$element) === undefined) && this.$element.querySelector('.time-wrapper.show')?.classList.remove('show')
        })
    }

    setTwoDigits(num) {
        const intNum = Number(num)
        return intNum < 10  ? '0'+intNum : intNum;
    }

    setInTwelve(num) {
        return num > 12 ? this.setTwoDigits(num - 12) : this.setTwoDigits(num);
    }

    /**
     * 현재 시간과 설정한 분에 가까운 시, 분 반환
     * @param currentHour
     * @param currentMinute
     * @returns {{closeHour, closeMinute}|string}
     */
    getCloseTime(currentHour, currentMinute) {
        const { step } = this.$element.dataset;
        const minArr = [...new Array(Math.floor(60 / step))].map((v, i) => i === 0 && currentMinute > 30 ? 60 : i * step);
        if(minArr.findIndex(v => v === currentMinute) >= 0) {
            return ({ closeHour: this.setTwoDigits(currentHour), closeMinute: this.setTwoDigits(currentMinute)})
            return this.setTwoDigits(currentMinute);
        }
        const getMin = Math.min(...minArr.map(v => Math.abs(currentMinute - v)));
        let closeMin = minArr.find((v) => Math.abs(currentMinute - v) === getMin);

        if(closeMin < currentMinute) {
            closeMin += Number(step);
        }
        if(closeMin >= 60) {
            closeMin -= 60;
            currentHour++;
        }
        return ({ closeHour: this.setTwoDigits(currentHour), closeMinute: this.setTwoDigits(closeMin) });
    }
}

// document.querySelectorAll('.mykl-time').forEach(el => new Time(el))