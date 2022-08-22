class Calendar {
    constructor(element) {
        this.$el = element;
        this.setElements();
        this.render();
        this.setEvents();
    }

    setElements() {
        const template = document.createElement('template');
        const fragment = new DocumentFragment();
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;

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
        this.$el.appendChild(fragment);
    }

    setTemplate() {
        let firstDay = new Date(this.year, this.month-1, 1, 0, 0, 0).getDay();
        let lastDate = new Date(this.year, this.month, 0, 0, 0, 0).getDate();
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
        this.$el.querySelector('.calendar').innerHTML = this.setTemplate();
    }

    setEvents() {
        this.$el?.addEventListener('click', ({target}) => {
            if(target.classList.contains('prev')) {
                --this.month;
                if(this.month === 0) {
                    this.month = 12;
                    --this.year;
                }
                this.render();
            }

            if(target.classList.contains('next')) {
                ++this.month
                if(this.month === 13) {
                    this.month = 1
                    ++this.year
                }
                this.render();
            }

            if(target.classList.contains('day')) {
                const formInput = document.querySelector('.form-input');
                console.log('hi', formInput)
                const day = target.textContent;

                formInput.value = `${this.year}-${this.month < 10 ? `0${this.month}` : this.month}-${parseInt(day, 10) < 10 ? `0${day}` : day}`
                this.$el.querySelector('.selected-day').textContent = this.setTwoDigits(parseInt(day, 10)).toString();
            }

            if(target.classList.contains('calendar-btn')) {
                this.$el.querySelector('.calendar')?.classList.toggle('show');
            }

        })
    }

    setTwoDigits(value) {
        return value < 10 ? `0${value}` : value
    }
}

new Calendar(document.querySelector('.form-calendar'));