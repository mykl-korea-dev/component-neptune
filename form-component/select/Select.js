import Component from "../../basic/Component.js";

export default class Select extends Component {
    setElements() {
        this.select = this.$element.querySelector('select');
        this.options = Array.from(this.select.querySelectorAll('option'));
        this.$element.querySelector('.select-group')?.remove();
        const selectGroupEl = document.createElement('div');
        selectGroupEl.classList.add('select-group');
        this.$element.appendChild(selectGroupEl);
    }

    setTemplate() {
        return `
            <div class="select-selected">
                ${this.select?.options[this.select.selectedIndex].textContent}
            </div>
            <div class="select-items select-hide">
                ${this.options.map(el => `<div>${el.textContent}</div>`).join('')}
            </div>
        `;
    }

    render() {
        this.$element.querySelector('.select-group').innerHTML = this.setTemplate();
        const selectedElWidth = this.$element.querySelector('.select-selected').getBoundingClientRect().width;
        const selectItemElWidth = this.$element.querySelector('.select-items').getBoundingClientRect().width;
        this.$element.style.width = selectItemElWidth > selectedElWidth ? selectItemElWidth + 'px' : selectedElWidth + 'px';
        this.$element.querySelector('.select-selected').style.width = "100%";
        this.$element.querySelector('.select-items').style.width = "100%";
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
            const select = this.$element.querySelector('select');
            this.$element.querySelector('.same-as-selected')?.removeAttribute('class');
            const target = e.target;
            for (let i = 0; i < this.options.length; i++) {
                if(select.options[i].innerHTML === target?.textContent) {
                    select.selectedIndex = i;
                    select.value = select.options[i].value;
                    selectedDiv.textContent = target.textContent;
                    target.classList.add('same-as-selected');
                    selectDiv?.classList.toggle('select-hide');
                    selectedDiv?.classList.toggle('select-arrow-active');
                    break;
                }
            }
            this.select.click();
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
