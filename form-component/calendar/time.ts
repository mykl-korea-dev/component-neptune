import Component from "../../basic/component.js";

export default class Time<T> extends Component<T> {
    constructor(element: Element) {
        super(element);
    }

    setTemplate() {
        console.log(this.$element)

        let template = document.createElement('template');
        let fragment = new DocumentFragment();
        template.innerHTML = `
        <div class="time-wrapper">
            <div class="hour">
                <button class="hour-up">Up</button>
                <div class="hour-selected">12</div>
                <button class="hour-down">Down</button>
            </div>
            <div class="minute">
                <button class="minute-up">Up</button>
                <div class="minute-selected">00</div>
                <button class="minute-down">Down</button>
            </div>
        </div>
            `
        fragment.appendChild(template.content);
        this.$element.appendChild(fragment)
    }

    setEvents() {
        const timeWrapper = this.$element.querySelector('.time-wrapper');
        const hour = timeWrapper?.querySelector('.hour');
        const hourUpBtn = hour?.querySelector('.hour-up');
        const hourDownBtn = hour?.querySelector('.hour-up');
        const hourValue = hour?.querySelector('.hour-selected');
        const minute = timeWrapper?.querySelector('.minute');
        const minuteUpBtn = minute?.querySelector('.minute-up');
        const minuteDownBtn = minute?.querySelector('.minute-up');

        hourUpBtn?.addEventListener('click', () => {
            let selectedHour = parseInt(hourValue!.textContent!, 10);
            selectedHour++;
            console.log(selectedHour)
            if(selectedHour > 24) {
                selectedHour = 0;
            }
            hourValue!.textContent = selectedHour.toString();
        })
    }
}