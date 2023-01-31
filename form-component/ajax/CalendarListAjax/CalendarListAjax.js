import Component from "../../../basic/Component.js";

export default class Calendar extends Component {
    setElements() {
        this.$element.classList.add("mykl-calendarList");
        this.year = new Date().getFullYear();
        this.month =  this.setTwoDigits(new Date().getMonth() + 1);
        this.date = this.setTwoDigits(new Date().getDate());
        this.mark = this.date;
        this.state = {}
        const div = document.createElement('div');
        div.classList.add('calendar-wrapper');
        this.$element.appendChild(div);
        this.isShow = false;
    }

    setTemplate() {
        let firstDay = new Date(this.year, this.month-1, 1, 0, 0, 0).getDay();
        let lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
        let weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
        return `
        <div class="calendar-container">
            <div class="year-month">
                <div class="year">${this.year} <button type="button" class=""></button></div>
                <div class="calendar-button-group">
                    <button class="prev" type="button">&lt;</button>
                    <button class="next" type="button">&gt;</button>
                </div>
                <button type="button" class="today">
                    오늘
                </button>
            </div>
            <div class="month-group">
                ${[...Array(12)].map((_, i) => `
                    <div class="month ${+this.month === (i + 1) ? 'active' : ''}">${i + 1}</div>
                `).join("")}            
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
                        if(date < 1) {
                            const lastMonth = +this.month - 1;
                            const thisMonth = lastMonth < 1 ? 12 : lastMonth;
                            const lastYear = lastMonth < 1 ? +this.year - 1 : this.year;
                            let lastDate = new Date(lastYear, thisMonth, 0, 0, 0, 0).getDate();
                            
                            return `
                                <div class="day lastMonth">
                                    <div>
                                        <input type="date" value="${lastYear}-${thisMonth.toString().padStart(2, "0")}-${(lastDate + date).toString().padStart(2, "0")}" name="" id="">
                                        <label class="date" style="color: #bdbdbd">${lastDate + date}</label>                                    
                                    </div>
                                    <div class="content"></div>
                                </div>`
                        } else if(date > lastDate) {
                            const nextMonth = +this.month + 1;
                            const thisMonth = nextMonth > 12 ? 1 : nextMonth;
                            const nextYear = nextMonth > 12 ? +this.year + 1 : this.year;
                            
                            return `
                                <div class="day nextMonth">
                                    <div>
                                        <input type="date" value="${nextYear}-${thisMonth.toString().padStart(2, "0")}-${(date - lastDate).toString().padStart(2, "0")}" name="" id="">
                                        <label class="date" style="color: #bdbdbd">${date - lastDate}</label>                                    
                                    </div>
                                    <div class="content"></div>
                                </div>`
                        } else {
                            return `
                                <div class="day ${date == this.mark ? 'mark' : ''}">
                                    <div>
                                        <input type="date" value="${this.year}-${this.month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}" name="" id="">
                                        <label class="date">${date}</label>                                    
                                    </div>
                                    <div class="content"></div>
                                </div>
                            ` }
                        }).join('')}
                </div>
            `).join('')}
        </div>
        `
    }

    render() {
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
                --this.year;
                this.render();
            }

            if(target.classList.contains('next')) {
                ++this.year;
                this.render();
            }

            if(target.classList.contains('month')) {
                this.month = +target.textContent;
                this.render();
            }

            if(target.classList.contains('today')) {
                const todayDate = new Date()
                this.year = todayDate.getFullYear();
                this.month = todayDate.getMonth() + 1;
                this.date = todayDate.getDate();
                this.render();
            }

            // if(target.classList.contains('day')) {
            //     this.$element.querySelector('.mark')?.classList.remove('mark');
            //     const year = this.$element.querySelector('.year').textContent;
            //     const month = this.$element.querySelector('.month').textContent;
            //     target.classList.add('mark');
            //     this.mark = target.textContent;
            //     this.date = this.mark;
            //     const day = target.textContent;
            //     this.$element.querySelector('.selected-year').textContent = year;
            //     this.$element.querySelector('.selected-month').textContent = this.setTwoDigits(month);
            //     this.$element.querySelector('.selected-day').textContent = this.setTwoDigits(day);
            //     this.$element.querySelector('.calendar-input').value = `${year}-${this.setTwoDigits(month)}-${this.setTwoDigits(day)}`;
            // }
        })
    }



    setTwoDigits(value) {
        return +value < 10 ? `0${+value}` : +value;
    }
}
