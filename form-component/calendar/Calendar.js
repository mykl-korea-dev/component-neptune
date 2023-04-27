import Component from "../../basic/Component.js";

export default class Calendar extends Component {
    setElements() {
        this.year = new Date().getFullYear();
        this.month =  this.setTwoDigits(new Date().getMonth() + 1);
        this.date = this.setTwoDigits(new Date().getDate());
        this.mark = this.date;
        this.state = {}
        const div = document.createElement('div');
        div.classList.add('calendar-wrapper');
        this.$element.appendChild(div);
        this.$element.querySelector('input').value = `${this.year}-${this.month}-${this.date}`;
        this.isShow = false;
    }

    setTemplate() {
        let firstDay = new Date(this.year, this.month-1, 1, 0, 0, 0).getDay();
        let lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
        let weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
        return `
        <div class="clicked-date">
            <span>
                <span class="selected-year">${this.year}</span>-<span class="selected-month">${this.setTwoDigits(this.month)}</span>-<span class="selected-day">${this.setTwoDigits(this.date)}</span>
            </span>
            <button type="button" class="calendar-btn">기간</button>
        </div>    
        <div class="calendar-container ${this.isShow ? 'show' : ''}">
            <div class="year-month">
                <div class="year">${this.year}</div>
                <div class="month">${this.month}</div>
                <div class="calendar-button-group">
                    <button class="prev" type="button">Prev</button>
                    <button class="next" type="button">Next</button>
                </div>
            </div>
            <div class="weekday">
              <div>일</div>
              <div>월</div>
              <div>화</div>
              <div>수</div>
              <div>목</div>
              <div>금</div>
              <div>토</div>
            </div>
            ${[...Array(weekSeq)].map((_, i) =>`
                <div class="week${i}">
                    ${[...Array(7)].map((_, j) => {
            const date = i * 7 + j - firstDay + 1;
            if(date < 1 || date > lastDate) return `<div></div>`
            return `<div class="day ${date == this.mark ? 'mark' : ''}">${date}</div>`}).join('')}
                </div>
            `).join('')}
        </div>
        `
    }

    render() {
        this.$element.querySelector('input').value = `${this.year}-${this.setTwoDigits(this.month)}-${this.setTwoDigits(this.date)}`;

        if(this.state[`${this.year}-${this.month}`]) {
            this.holiArr = [...this.state[`${this.year}-${this.month}`]];
            this.$element.querySelector('.calendar-wrapper').innerHTML = this.setTemplate();
            this.holiArr.map(day => this.$element.querySelectorAll('.day')[+day - 1].style.color = "red");
        } else {
            fetch(`http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${this.year}&solMonth=${this.setTwoDigits(this.month)}&_type=json&ServiceKey=T9vZVWD4DUCcBZITtVWmnhlD5hkaLI%2BVQcpHsxNuUdqSYscKbqO6KWnV0PQAgFIvV89g%2BjEirNcPf60sC7C2CA%3D%3D`)
                .then(response => response.json())
                .then(data => {
                        if(typeof data.response.body.items.item === 'undefined') {
                            this.holiArr = [];
                        } else if(Array.isArray(data.response.body.items.item)) {
                            this.holiArr = data.response.body.items.item.map(data => data.isHoliday === 'Y' && data.locdate.toString().substring(6, 8)) || [];
                        } else if(typeof data.response.body.items.item === 'object') {
                            this.holiArr =  data.response.body.items.item.isHoliday === 'Y' ? [data.response.body.items.item.locdate.toString().substring(6, 8)]: [];
                        }
                        this.state[`${this.year}-${this.month}`] = this.holiArr;
                        this.$element.querySelector('.calendar-wrapper').innerHTML = this.setTemplate();
                        this.holiArr.map(day => this.$element.querySelectorAll('.day')[+day - 1].style.color = "red");
                    }
                );
        }

    }

    setEvents() {
        document.addEventListener('click', (e) => {
            if((e.composedPath().find(el => el === this.$element) === undefined)) {
                this.$element.querySelector('.calendar-container.show')?.classList.remove('show');
                this.isShow = false;
            }
        })
        this.$element?.addEventListener('click', ({target}) => {
            if(target.classList.contains('prev')) {
                --this.month;
                if(this.month === 0) {
                    this.month = 12;
                    --this.year;
                }
                this.render();
            }

            if(target.classList.contains('next')) {
                ++this.month;
                if(this.month === 13) {
                    this.month = 1
                    ++this.year
                }
                this.render();
            }

            if(target.classList.contains('calendar-btn')) {
                this.isShow = !this.isShow;
                this.$element.querySelector('.calendar-container')?.classList.toggle('show');
            }

            if(target.classList.contains('day')) {
                this.$element.querySelector('.mark')?.classList.remove('mark');
                const year = this.$element.querySelector('.year').textContent;
                const month = this.$element.querySelector('.month').textContent;
                target.classList.add('mark');
                this.mark = target.textContent;
                this.date = this.mark;
                const day = target.textContent;
                this.$element.querySelector('.selected-year').textContent = year;
                this.$element.querySelector('.selected-month').textContent = this.setTwoDigits(month);
                this.$element.querySelector('.selected-day').textContent = this.setTwoDigits(day);
                this.$element.querySelector('input').setAttribute("value", `${year}-${this.setTwoDigits(month)}-${this.setTwoDigits(day)}`);
            }
        })
    }

    setTwoDigits(value) {
        return +value < 10 ? `0${+value}` : +value;
    }
}
