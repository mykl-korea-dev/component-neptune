import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class Time extends Component {
    setElements() {
        [this.currentHour, this.currentMin] = [new Date().getHours(), new Date().getMinutes()];
        const div = document.createElement('div');
        div.classList.add('time-container');
        this.$element.appendChild(div);
    }

    setTemplate() {
        const {closeHour, closeMinute} = this.getCloseTime(this.currentHour, this.currentMin);
        const step = getDataset(this.$element, 'step');
        this.$element.querySelector('input').value = `${this.setInTwelve(closeHour)}:${closeMinute.toString().padStart(2, '0')}`;
        return `
            <span class="selected-time">
                ${(Number(closeHour) === 24 || Number(closeHour) < 12) ? '오전' : '오후'} ${this.setInTwelve(closeHour)}:${closeMinute}
            </span>
            <button type="button" class="toggle-button">시간</button>
            <div class="time-wrapper">
                <div class="day-night">
                    <span ${(Number(closeHour) === 24 || Number(closeHour) < 12) ? 'class="time-mark"':''}>오전</span>
                    <span ${(Number(closeHour) >= 12 && Number(closeHour) < 24) ? 'class="time-mark"':''}>오후</span>
                </div>
                <div class="time-box">
                    ${[...new Array(12)].map((v, i) => {
            return [...new Array(60/+step)].map((sv, j) => `
                            <div class="time-group ${(+this.setInTwelve(closeHour) === (i+1) && Number(closeMinute) === (j * +step)) ? "time-mark" : ''}">
                               ${this.setTwoDigits(i+1)}:${this.setTwoDigits(j * +step)}
                            </div>
                        `).join("")
        }).join("")}
                </div>
            </div>
        `
    }

    render() {
        this.$element.querySelector('.time-container').innerHTML = this.setTemplate();
    }

    setEvents() {
        const timeWrapper = this.$element.querySelector('.time-wrapper');

        this.$element.querySelector('.toggle-button')?.addEventListener('click', () => {
            this.$element.querySelectorAll('.selected')?.forEach(el => el.classList.remove('selected'));
            timeWrapper?.classList.toggle('show');
            const timeBoxEl = timeWrapper.querySelector('.time-box');
            const [firstEl, markEl] = [timeBoxEl.firstElementChild, timeBoxEl.querySelector('.time-mark')];

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
                const twelveHour = this.setInTwenty(this.$element.querySelector('.day-night .time-mark').textContent, selectedHour);
                console.log(twelveHour, selectedHour.trim() == 12)
                this.$element.querySelector('.time-input').value = `${twelveHour}:${selectedMinute}`.trim();
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
            const twelveHour = this.setInTwenty(this.$element.querySelector('.day-night .time-mark').textContent, selectedHour);
            this.$element.querySelector('.time-input').value = `${twelveHour}:${selectedMinute}`.trim();
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
        if(num <= 12) {
            return this.setTwoDigits(num)
        } else {
            return this.setTwoDigits(num - 12);
        }
    }

    setInTwenty(day, time) {
        if(day === "오전") {
            if(+time == 12) {
                return '00'
            } else {
                return time
            }
        } else {
            if(+time == 12) {
                return time
            } else {
                return (+time + 12).toString();
            }
        }
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

