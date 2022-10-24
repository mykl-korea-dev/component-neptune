import { store } from "../index.js";
import Component from "../../../basic/Component.js";

export default class AccordionTable extends Component {
    setElements() {
        // Count 표시
        // const { coreNames, coreIds } = store.getState();
        // const { coreId } = coreNames[this.$props.idx];
        // this.totalCount = coreIds[coreId].length;

        // h2 형제 요소로 적용
        const div = document.createElement('div');
        div.classList.add('count');
        div.id = "coreId" + coreId;
        this.$element.querySelector('.accordion-header').insertAdjacentElement('beforebegin', div);
        new Count(this.$element.querySelector('.count'), { total: this.totalCount, setCount: this.setCount.bind(this) });

        if(this.$props.idx === 0) {
            this.$element.querySelector('.accordion-body').classList.add('show');
        }
    }

    setTemplate() {
        const accordionData = store.getState().lists[this.$props.idx].items;
        return accordionData.map(item => `
            <li>
                <ul id="questionId${item.data['questionId']}">
                    <li>${item.data['competencyName']}</li>
                    <li>${item.data['question']}</li>
                    <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="1"></li>
                    <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="2"></li>
                    <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="3"></li>
                    <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="4"></li>
                    <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="5"></li>
                </ul>
            </li>
        `).join('');
    }

    render() {
        this.$element.querySelector('.accordion-body').innerHTML = this.setTemplate();

        // localStorage 의 값을 가져와 input checked 표시
        const getLocalStorage = JSON.parse(localStorage.getItem('question'));
        for (const id in getLocalStorage) {
            const element = this.$element.querySelector(`input[name=range${id}][value='${getLocalStorage[id]}']`);
            element && (element.checked = true);
        }
    }

    setEvents() {
        this.$props.parent.addEventListener('click', ({target}) => {
            if(target.classList.contains('reset-btn')) {
                this.render();
                this.removeFilter();
            }
        })

        this.$element.addEventListener('click', ({target}) => {
            if(target.tagName === "INPUT") {
                store.dispatch({type: 'clickInput', payload: {...this.counts, [target.dataset.name] : target.value} });

                const { inputs, coreIds } = store.getState();
                const intersected = coreIds[target.dataset.id].filter(el => Object.keys(inputs).includes(el.toString()));
                console.log()
                const beforeCount = store.getState().count[target.dataset.id];
                const afterCount = intersected.length;
                if(beforeCount != afterCount) {
                    store.dispatch({type: 'setCount', payload: {[target.dataset.id]: intersected.length}});
                }
            }
        })
    }

    setCount() {
        const { coreNames, count } = store.getState();
        const { coreId } = coreNames[this.$props.idx];
        return (count && count[coreId]) || 0;
    }

    removeFilter() {
        this.$element.querySelectorAll('[id^=question]').forEach(el => el.addEventListener('click', () => {
            if(el.classList.contains('filter')) {
                el.classList.remove('filter');
            }
        }))
    }
}

export class Count extends Component {
    constructor(el, props) {
        super(el, props);
        // store값 변경 시 자동 변경
        store.subscribe(this.render.bind(this));
    }

    setElements() {
        this.$element.innerHTML = `<span></span><span>/</span><span>${this.$props.total}</span>`
    }

    setTemplate() {
        return this.$props.setCount()
    }

    render() {
        this.$element.querySelector('span').innerHTML = this.setTemplate();
    }
}

export class Filter extends Component {
    setElements() {
        this.el = document.createElement('button');
        this.el.classList.add('filter-btn');
        this.el.textContent = "Filter";
        this.$element.appendChild(this.el);
    }

    setEvents() {
        this.el.addEventListener('click', this.$props.filter);
    }
}

export class Reset extends Component {
    setElements() {
        this.el = document.createElement('button');
        this.el.classList.add('reset-btn');
        this.el.textContent = "Reset";
        this.$element.appendChild(this.el);
    }

    setEvents() {
        this.el.addEventListener('click', this.$props.reset)
    }
}