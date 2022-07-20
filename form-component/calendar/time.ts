import Component from "../../basic/component.js";

export default class Time<T> extends Component<T> {
    constructor(element: Element) {
        super(element);
    }

    setTemplate() {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-button';
        toggleButton.textContent = '시간';

        this.$element.appendChild(toggleButton);

        let template = document.createElement('template');
        let fragment = new DocumentFragment();

        template.innerHTML = `
        <div class="time-wrapper">
            <div class="hour-box">
                <button class="hour-selected">12</button>
                <div class="hour">
                </div>
            </div>
            <span>:</span>
            <div class="minute-box">
                <button class="minute-selected">00</button>
                <div class="minute">
                </div>
            </div>
        </div>
            `
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment);

        const timeWrapper = this.$element.querySelector('.time-wrapper');

        const { start, end, min, hour } = (this.$element as HTMLElement).dataset;
        const [startHour, startMin] = start!.split(':').map(el => parseInt(el, 10));
        let [endHour, endMin] = end!.split(':').map(el => parseInt(el, 10));

        const hourDiv = document.createElement('div');
        for (let i = startHour; i <= endHour; i += parseInt(hour!, 10)) {
            const template = document.createElement('template');
            template.innerHTML = `<div>${this.setTwoDigits(i)}</div>`
            hourDiv.appendChild(template.content);
        }
        timeWrapper!.querySelector('.hour')!.innerHTML = hourDiv.innerHTML;

        const minDiv = document.createElement('div');

        for (let i = 0; i < 60; i += parseInt(min!, 10)) {
            const template = document.createElement('template');
            template.innerHTML = `<div>${this.setTwoDigits(i)}</div>`
            minDiv.appendChild(template.content);
        }
        timeWrapper!.querySelector('.minute')!.innerHTML = minDiv.innerHTML;
    }

    setEvents() {
        const timeWrapper = this.$element.querySelector('.time-wrapper');
        const hourSelector = timeWrapper?.querySelector('.hour-selected');
        const minuteSelector = timeWrapper?.querySelector('.minute-selected');
        const hourBox = timeWrapper?.querySelector('.hour');
        const minuteBox = timeWrapper?.querySelector('.minute');

        this.$element.querySelector('.toggle-button')?.addEventListener('click', () => {
            timeWrapper?.classList.toggle('show')
        })

        hourSelector?.addEventListener('click', (e) => {
            hourBox?.classList.add('show');
        })

        hourBox?.addEventListener('click', ({target}) => {
            (target as HTMLElement).classList.add('selected');
            hourSelector!.textContent = (target as HTMLElement).textContent;
            hourBox?.classList.remove('show');
        })

        minuteSelector?.addEventListener('click', (e) => {
            minuteBox?.classList.add('show');
        })

        minuteBox?.addEventListener('click', ({target}) => {
            (target as HTMLElement).classList.add('selected');
            minuteSelector!.textContent = (target as HTMLElement).textContent;
            minuteBox?.classList.remove('show');
        })
    }

    setTwoDigits(num: number) {
        return num < 10  ? '00' : num;
    }
}