import Component from "../../basic/component.js";

export default class Calendar<T> extends Component<T> {

    year = new Date().getFullYear();
    month = new Date().getMonth() + 1;

    setTemplate() {
        if(this.year === undefined) {
            return `
                <div class="clickedDate">
                    <span>${new Date().getFullYear()}-${this.setTwoDigits(new Date().getMonth() + 1)}-${this.setTwoDigits(new Date().getDate())}</span>
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
                <span>${new Date().getFullYear()}-${this.setTwoDigits(new Date().getMonth() + 1)}-${this.setTwoDigits(new Date().getDate())}</span>
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
        this.$element.innerHTML = this.setTemplate();
    }

    setEvents() {
        const parent = this.$element.parentElement
        const calendar = parent?.querySelector('.calendar');
        const calendarBtn = this.$element.querySelector('.calendar-btn');
        const calendarButtonGroup = parent?.querySelector('.calendar-button-group');
        const prevBtn = calendarButtonGroup?.querySelector('.prev');
        const nextBtn = calendarButtonGroup?.querySelector('.next');
        console.log(prevBtn)
        calendarBtn?.addEventListener('click', (e) => {
            this.setElements()
            this.setEvents()
        })


        prevBtn?.addEventListener('click', () => {
            console.log(this.month)
            --this.month
            if(this.month === 0) {
                this.month = 12
                --this.year
            }
            this.setElements()
            this.setEvents()

        })

        nextBtn?.addEventListener('click', () => {
            ++this.month
            if(this.month === 13) {
                this.month = 1
                ++this.year
            }
            this.setElements()
            this.setEvents()
        })

        parent?.addEventListener('click', (e) => {
            if((e.target as Element).classList.contains('day')) {
                const formInput = document.querySelector('.form-input') as HTMLInputElement;
                // console.log('hi', formInput)
                const day = (e.target as HTMLElement).textContent;

                (formInput as HTMLInputElement).value = `${this.year}-${this.month < 10 ? `0${this.month}` : this.month}-${parseInt(day as string, 10) < 10 ? `0${day}` : day}`

            }
        })
    }

    setTwoDigits(value: number) {
        return value < 10 ? `0${value}` : value
    }
}