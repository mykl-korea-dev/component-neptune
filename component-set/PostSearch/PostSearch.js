import Component from "../../basic/Component.js";
import Select from "../../form-component/select/Select.js";
import Calendar from "../../form-component/calendar/Calendar.js";
import {getDataset} from "../../basic/utils.js";

export default class PostSearch extends Component {
    setElements() {
        this.originVal = this.$element.innerHTML;
    }

    setTemplate() {
        const todayDate = new Date().getTime();
        const dayTime = 60 * 60 * 24 * 1000;
        const oneDay = new Date(todayDate - dayTime);
        const oneWeek = new Date(todayDate - dayTime * 7);

        const beforeLastDate = new Date(todayDate - dayTime * new Date().getDate()).getDate();
        const oneMonth = new Date(todayDate - dayTime * beforeLastDate)

        return `
            <div class="mykl-select mykl-postSearch-date">
                <select>
                    <option value="whole">전체기간</option>
                    <option value="${this.setDate(oneDay)}">1일</option>                                                                                                                                                                                                                                                                                                                              일주일 전</option>
                    <option value="${this.setDate(oneWeek)}">1주</option>
                    <option value="${this.setDate(oneMonth)}">1개월</option>
                    <option value="directly">직접입력</option>
                </select>
            </div>
            <div class="mykl-posetSearch-directCalendar" style="display: none">
                <div class="mykl-calendar">
                   <label>시작</label>
                    <input type="date" class="calendar-input directCalendarStart">
                </div>
                <div class="mykl-calendar">
                   <label>끝</label>
                  <input type="date" class="calendar-input directCalendarEnd">
                </div>
            </div>
            $originVal
            <button type="button" class="postsearch-btn">클릭</button>
            <label for="">start</label><input type="date" name="${getDataset(this.$element, "startDate")}" data-date="start">
            <label for="">end</label><input type="date" name="${getDataset(this.$element, "endDate")}" data-date="end">
        `;
    }

    render() {
        const replacedTemplate = this.setTemplate().replace("$originVal", this.originVal);
        this.$element.innerHTML = replacedTemplate;
        document.querySelectorAll('.mykl-select').forEach(el => {
            this.originVal.includes(el.innerHTML) && el.removeChild(el.lastElementChild);
            new Select(el);
        });
        document.querySelectorAll('.mykl-calendar').forEach(el => new Calendar(el));
    }

    setEvents() {
        this.$element.querySelector('.postsearch-btn').addEventListener('click', () => {
            const objs = {};
            this.$element.querySelectorAll('[name]').forEach(el => objs[el.getAttribute("name")] = el.value);
            fetch(this.$data.url, {
                method: 'POST',
                headers: {
                    ...this.$data.headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(objs)
            }).then(res => res.json()).then((data) => {
                this.$data.callback(...this.$data, ...data);
            })
        })

        this.$element.addEventListener('click', () => {
            if(this.$element.querySelector('.mykl-postSearch-date select').value === 'directly') {
                this.$element.querySelector('.mykl-posetSearch-directCalendar').style.display = 'block';
                this.$element.querySelector('input[data-date=start]').value = this.$element.querySelector('.directCalendarStart').value;
                this.$element.querySelector('input[data-date=end]').value = this.$element.querySelector('.directCalendarEnd').value;
            } else if(this.$element.querySelector('.mykl-postSearch-date select').value === 'whole') {
                this.$element.querySelector('input[data-date=start]').value = '';
                this.$element.querySelector('input[data-date=end]').value = '';
            } else {
                this.$element.querySelector('.mykl-posetSearch-directCalendar').style.display = 'none';
                this.$element.querySelector('.directCalendarStart').value = this.setDate(new Date());
                this.$element.querySelector('.directCalendarEnd').value = this.setDate(new Date());
                this.$element.querySelector('input[data-date=start]').value = this.$element.querySelector('select').value;
                this.$element.querySelector('input[data-date=end]').value = this.setDate(new Date());
            }
        })

        this.$element.querySelector('.mykl-posetSearch-directCalendar').addEventListener('click', () => {
            this.$element.querySelector('input[data-date=start]').value = this.$element.querySelector('.directCalendarStart').value;
            this.$element.querySelector('input[data-date=end]').value = this.$element.querySelector('.directCalendarEnd').value;
        })
    }

    setDate(fullDate) {
        const year = new Date(fullDate).getFullYear();
        const month = new Date(fullDate).getMonth() + 1;
        const date = new Date(fullDate).getDate();
        return `${year}-${month}-${date}`
    }
}

