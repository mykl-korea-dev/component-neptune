// import { store } from "../index.js";
// import Component from "../../../basic/Component.js";
import Accordion from "../../../ui-component/accordion/Accordion.js";

export default class PoolAccordion extends Accordion {
    setTemplate() {
        this.$element.classList.add('mykl-accordion');
        // const accordionData = store.getState().lists[this.$props.idx].items;
        // return accordionData.map(item => `
        //     <li>
        //         <ul id="questionId${item.data['questionId']}">
        //             <li>${item.data['competencyName']}</li>
        //             <li>${item.data['question']}</li>
        //             <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="1"></li>
        //             <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="2"></li>
        //             <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="3"></li>
        //             <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="4"></li>
        //             <li><input type="radio" name="range${item.data['questionId']}" data-name="${item.data['questionId']}" data-id="${item.data['coreId']}" value="5"></li>
        //         </ul>
        //     </li>
        // `).join('');
        this.$element.classList.add("mykl-accordion");
        return this.$data.abilities.map(v => `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-toggle">${v.ability_name}</button>
                </h2>
                <ul class="accordion-body">
                    ${this.$data.question[v.ability_sn]?.map(q => `
                        <li class="accordion-body-item">
                            <p>${q.question_content}</p>
                            <ul>
                                <li><input type="radio" value="1"></li>
                                <li><input type="radio" value="2"></li>
                                <li><input type="radio" value="3"></li>
                                <li><input type="radio" value="4"></li>
                                <li><input type="radio" value="5"></li>
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join("");
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
        this.setElements();
        // // localStorage 의 값을 가져와 input checked 표시
        // const getLocalStorage = JSON.parse(localStorage.getItem('question'));
        // for (const id in getLocalStorage) {
        //     const element = this.$element.querySelector(`input[name=range${id}][value='${getLocalStorage[id]}']`);
        //     element && (element.checked = true);
        // }
    }
}
