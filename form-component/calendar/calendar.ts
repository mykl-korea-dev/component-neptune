import Component from "../../basic/component.js";

export default class Calendar<T> extends Component<T> {
    year: number | null | undefined;
    month: number | null | undefined;

    setElements() {
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;

        const template = document.createElement('template');
        const fragment = new DocumentFragment();

        template.innerHTML = `
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
            <div class="calendar">
            </div>
        `
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);
    }

    setTemplate() {
        let firstDay = new Date(this.year as number, this.month as number -1, 1, 0, 0, 0).getDay()
        let lastDate = new Date(this.year as number, this.month as number, 0, 0, 0, 0).getDate()
        let weekSeq = Math.floor((lastDate + firstDay - 1) / 7 + 1);
        return `
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
        ).join('')}`
    }

    render() {
        this.$element.querySelector('.calendar')!.innerHTML = this.setTemplate();
    }

    setEvents() {
        this.$element?.addEventListener('click', ({target}) => {
            if((target as HTMLElement).classList.contains('prev')) {
                console.log(this.month)
                if(this.month && this.year) {
                    --this.month;
                    if(this.month === 0) {
                        this.month = 12;
                        --this.year;
                    }
                }
                this.render();
            }

            if((target as HTMLElement).classList.contains('next')) {
                if(this.month && this.year) {
                    ++this.month
                    if(this.month === 13) {
                        this.month = 1
                        ++this.year
                    }
                }
                this.render();
            }

            if((target as HTMLElement).classList.contains('day')) {
                const formInput = document.querySelector('.form-input') as HTMLInputElement;
                console.log('hi', formInput)
                const day = (target as HTMLElement).textContent;

                (formInput as HTMLInputElement).value = `${this.year}-${this.month! < 10 ? `0${this.month}` : this.month}-${parseInt(day as string, 10) < 10 ? `0${day}` : day}`
                this.$element.querySelector('.selected-day')!.textContent = this.setTwoDigits(parseInt(day as string, 10)).toString();
            }

            if((target as HTMLElement).classList.contains('calendar-btn')) {
                this.$element.querySelector('.calendar')?.classList.toggle('show');

            }

        })

    }

    setTwoDigits(value: number) {
        return value < 10 ? `0${value}` : value
    }
}