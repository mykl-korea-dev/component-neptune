// import { store } from "../index.js";
// import Component from "../../../basic/Component.js";
import Accordion from "../../ui-component/accordion/Accordion.js";

export default class PoolAccordion extends Accordion {
    constructor(id, data) {
        super(id, data);
        // this.$data.store.subscribe(this.render.bind(this));
    }
    setTemplate() {
        this.$element.classList.add('mykl-accordion');
        const { question, active, inputs, filter, complete, response } = this.$data.store.getState();
        console.log(this.$data.data);
        return this.$data.data.map(v => `
            <div class="accordion-item ${(filter && (complete.findIndex(id => id == v.ability_id) !== -1)) ? "hide" : ""}">
                <h2 class="accordion-header">
                    <button type="button" class="accordion-toggle ${active.findIndex(av => av == v.ability_id) !== -1 ? "show" : ""}">${v.ability_name}</button>
                </h2>
                <div class="accordion-body ${active.findIndex(av => av == v.ability_id) !== -1 ? "show" : ""}" id="abilitySnPool${v.ability_id}">
                <table class="accordion-body-item mykl-table">
                    <colgroup>
                        <col style="width:465px">
                        <col style="">
                        <col style="width:98px">
                    </colgroup>            
                    <thead>
                        <tr>
                        <th>문항</th>
                        <th>타당하지 않음</th>
                        <th>타당함</th>
                        </tr>
                    </thead>       
                    <tbody>
                    ${question[v.ability_id]?.map(q => `
                        <tr id="questionId${q.question_id}">
                            <td class="text-start text-sm">${q.question_content}</td>
                            <td colspan="2">
                                <ul>
                                ${q["question_type_name"] === '5점척도' &&
        ([...new Array(+q["question_range_end"] - (+q["question_range_start"] - 1))].map((value, i) =>
            `<li class="response">
                                        <input type="radio" id="response${q.question_id}_${i +  +q["question_range_start"]}" name="question${q.question_id}" value="${i +  +q["question_range_start"]}" ${response?.[q.question_id] == i + +q["question_range_start"] ? "checked" : ""}>
                                        <label for="response${q.question_id}_${i +  +q["question_range_start"]}">${i +  +q["question_range_start"]}</label>
                                    </li>`)).join("")}
                               </ul>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody> 
                </table>
</div>
            </div>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        const el = this.$element.querySelector('.accordion-body.show');
        let bodyHeight = null;
        // console.log(el, el?.querySelectorAll('.accordion-body-item'));
        el && [...el?.querySelectorAll('.accordion-body-item')].forEach(item => bodyHeight += item.getBoundingClientRect().height);
        el && (el.style.height = bodyHeight + 'px');
        // // localStorage 의 값을 가져와 input checked 표시
        // const getLocalStorage = JSON.parse(localStorage.getItem('question'));
        // for (const id in getLocalStorage) {
        //     const element = this.$element.querySelector(`input[name=range${id}][value='${getLocalStorage[id]}']`);
        //     element && (element.checked = true);
        // }
    }

    setEvents() {
        this.$element.addEventListener('click', (e) => {
            const {target} = e;
            e.stopPropagation();

            if(target.classList.contains('accordion-toggle')) {
                const el = e.composedPath().find(el => el.classList.contains('accordion-item'));

                if(!this.$element.classList.contains('show-always')) {
                    el?.querySelector('.accordion-body.show') !== this.$element.querySelector('.accordion-body.show')
                    && this.$element.querySelector('.accordion-body.show')?.classList.remove('show');
                }

                const accordionBodyEl = el?.querySelector('.accordion-body');
                const elementId = accordionBodyEl.id;
                const getIdNumber = elementId.replace("abilitySnPool", "");
                this.$data.dispatch.setAbility(getIdNumber);
                if(target.classList.contains('show')) {
                    target.classList.remove('show');
                    accordionBodyEl.classList.remove('show');
                    accordionBodyEl.style.height = 0;
                } else {
                    target.classList.add('show');
                    accordionBodyEl.classList.add('show');
                    let bodyHeight = null;
                    [...accordionBodyEl?.querySelectorAll('.accordion-body-item')].forEach(item => bodyHeight += item.getBoundingClientRect().height);
                    accordionBodyEl && (accordionBodyEl.style.height = bodyHeight + 'px');
                }
            }

            if(target.tagName === "LABEL") {
                const questionEl = e.composedPath().find(el => /questionId/gm.test(el.id));
                const questionId = questionEl.id;
                const getQuestionIdNumber = questionId.replace("questionId", "");

                const abilityEl = e.composedPath().find(el => /abilitySnPool/gm.test(el.id));
                const abilityId = abilityEl.id;
                const getAbilityIdNumber = abilityId.replace("abilitySnPool", "");

                const value = this.$element.querySelector('#' + target.getAttribute('for')).value;
                this.$data.dispatch.setAnswer({abilitySn: getAbilityIdNumber, questionSn: getQuestionIdNumber, value, target });
            }
        })
    }

}
