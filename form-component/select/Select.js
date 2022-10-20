import Component from "../../basic/Component.js";

export default class Select extends Component{
    setElements() {
        this.select = this.$element.querySelector('select');
        const className = this.select.className;
        this.options = Array.from(this.select.querySelectorAll('option'));
        const div = document.createElement('div');
        className && div.classList.add(className);
        div.innerHTML = `
            <div class="select-group">
                <div class="select-selected">
                    ${this.select?.options[this.select.selectedIndex].textContent}
                </div>
                <div class="select-items select-hide">
                    ${this.options.map(el => `<div>${el.text}</div>`).join('')}
                </div>
            </div>
            `
        this.$element.innerHTML += div.innerHTML;
    }

    setEvents() {
        const selectedDiv = this.$element.querySelector('.select-selected');
        const selectDiv = this.$element.querySelector('.select-items');

        document.addEventListener('click', (e) => this.closeAllSelect(e.target));

        selectedDiv?.addEventListener('click', function () {
            selectDiv?.classList.toggle('select-hide');
            selectedDiv?.classList.toggle('select-arrow-active');
        })

        selectDiv?.addEventListener('click', (e) => {
            this.$element.querySelector('.same-as-selected')?.removeAttribute('class');
            const target = e.target;
            for (let i = 0; i < this.options.length; i++) {
                if(this.select?.options[i].innerHTML === target?.textContent) {
                    this.select.selectedIndex = i;
                    selectedDiv.textContent = target.textContent;
                    target.classList.add('same-as-selected');
                    selectDiv?.classList.toggle('select-hide');
                    selectedDiv?.classList.toggle('select-arrow-active');
                    break;
                }
            }
        })
    }

    closeAllSelect(element) {
        /*a function that will close all selectAjax boxes in the document,
        except the current selectAjax box:*/
        let selectDivEl;
        let selectDivElLength;
        let selectedDivEl;
        let SelectedDivElLength;
        let arrNo = [];
        selectDivEl = document.getElementsByClassName("select-items");
        selectedDivEl = document.getElementsByClassName("select-selected");
        selectDivElLength = selectDivEl.length;
        SelectedDivElLength = selectedDivEl.length;

        for (let i = 0; i < SelectedDivElLength; i++){
            if (element == selectedDivEl[i]) {
                arrNo.push(i)
            }
            else {
                selectedDivEl[i].classList.remove("select-arrow-active");
            }

        }
        for (let i = 0; i < selectDivElLength; i++) {
            if (arrNo.indexOf(i)) {
                selectDivEl[i].classList.add("select-hide");
            }
        }
    }
}

// document.querySelectorAll('.mykl-form-select').forEach(el => new Select(el, []));