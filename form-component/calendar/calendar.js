import Component from "../../basic/component.js";

export default class Calendar extends Component {

    year = new Date().getFullYear();
    month = new Date().getMonth() + 1;
    originTemplate = '';

    setTemplate() {
        if(this.year === undefined) {
            return `
                <div class="clickedDate">
                    <span>
                        <span class="selected-year">${new Date().getFullYear()}</span>
                        -
                        <span class="selected-month">${this.setTwoDigits(new Date().getMonth() + 1)}</span>
                        -
                        <span class="selected-day">${this.setTwoDigits(new Date().getDate())}</span>
                    </span>
                    <button class="calendar-btn">기간</button>
                </div>
                <div class="week-container">
                </div>
            `
        }
        console.log(this.year, this.month)
        let firstDay = new Date(this.year, this.month-1, 1, 0, 0, 0).getDay()
        let lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate()
        let weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1)

        let template = document.createElement('template');
        let fragment = new DocumentFragment();

        return `
            <div class="clickedDate">
                <span>
                    <span class="selected-year">${new Date().getFullYear()}</span>
                    -
                    <span class="selected-month">${this.setTwoDigits(new Date().getMonth() + 1)}</span>
                    -
                    <span class="selected-day">${this.setTwoDigits(new Date().getDate())}</span>
                </span>
                <button class="calendar-btn">기간</button>
            </div>                
            <div class="calendar show">
                <div class="yearMonth">
                  <div class="year">${this.year}</div>
                  <div class="month">${this.month}</div>
                  <div class="calendar-button-group">
                    <button class="prev">Prev</button>
                    <button class="next">Next</button>
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
                ${[...Array(weekSeq)].map((_, i) =>
            `<div class="week${i}">
                        ${[...Array(7)].map((_, j) => {
                const date = i * 7 + j - firstDay + 1;
                if(date < 1 || date > lastDate) return `<div class="day"></div>`
                return `<div class="day">${date}</div>`}).join('')
            }
                    </div>`
        ).join('')}
            `
    }

    setElements() {
        if(!this.originTemplate) {
            // this.originTemplate = this.$el
        }
        console.log(this.$element.innerHTML);
        this.$element.innerHTML = this.setTemplate();
    }

    setEvents() {
        console.log(this.$element);
        const parent = this.$element.parentElement
        console.log(parent);
        const calendarBtn = this.$element.querySelector('.calendar-btn');

        this.$element?.addEventListener('click', ({target}) => {
            if((target as HTMLElement).classList.contains('prev')) {
                --this.month;
                if(this.month === 0) {
                    this.month = 12;
                    --this.year;
                }
                this.setElements();
            }

            if((target as HTMLElement).classList.contains('next')) {
                ++this.month
                if(this.month === 13) {
                    this.month = 1
                    ++this.year
                }
                this.setElements();
            }

            if((target as HTMLElement).classList.contains('day')) {
                const formInput = document.querySelector('.form-input') as HTMLInputElement;
                console.log('hi', formInput)
                const day = (target as HTMLElement).textContent;

                (formInput as HTMLInputElement).value = `${this.year}-${this.month < 10 ? `0${this.month}` : this.month}-${parseInt(day as string, 10) < 10 ? `0${day}` : day}`
                this.$element.querySelector('.selected-day')!.textContent = this.setTwoDigits(parseInt(day as string, 10)).toString();
            }

        })

        calendarBtn?.addEventListener('click', (e) => {
            this.setElements()
        })

        // parent?.addEventListener('click', (e) => {
        //
        // })


    }

    setTwoDigits(value: number) {
        return value < 10 ? `0${value}` : value
    }
}