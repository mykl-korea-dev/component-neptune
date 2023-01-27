import Component from "../../../basic/Component.js";
import {getDataset} from "../../../basic/utils.js";
// 1. keydown 이벤트 발생 시 API 목록 가져오기
// 2. ArrowDown 누르면 목록 리스트 중 아래로 이동
// 2-1. 최하단 목록 시 누르면 기본 입력 값
// 2-2. Enter 누르면 해당 값
// 3. ArrowUp 누르면 목록 리스트 중 위로 이동
// 3-1. 최상단 목록 시 누르면 기본 입력 값
// 3-2. Enter 누르면 해당 값
// 4. Enter 누를 때 해당 값 없으면 동작x
// 4-1. Enter 누를 때 blur
// 5. input focus 시 이전 동작 초기화
// 6. 직접 입력 시 blur;
// 4. add-item 버튼 클릭 시 AutoCompleteItem Component 추가
// 5. remove-item 버튼 클릭 시 해당 Component 삭제

class AutoCompleteItem extends Component {
    setElements() {
        this.originVal = null;
        this.currentValue = null;
        this.$element.classList.add("mykl-auto-complete");
        this.$element.querySelector('input[type=text]').setAttribute('autocomplete', 'off');
        this.$element.querySelector('.auto-complete-list').style.width = this.$element.querySelector('.auto-complete-input input').getBoundingClientRect().width + 'px';
    }

    setEvents() {
        this.$element.addEventListener('click',({ target }) => {
            if(target.classList.contains('btn-direct')) {
                this.$element.querySelector('input[type=text]').value = this.currentValue || this.originVal;
                this.inputBlur();
            }
        })

        this.$element.addEventListener('keyup', this.keyUpHandler.bind(this));

        this.$element.querySelector('input[type=text]').addEventListener('focus', () => {
            this.closeAllAutoComplete();
            this.$element.classList.add('active');
            this.$element.querySelector('.auto-complete-list').classList.add('show');
        })

        this.$element.querySelector('.btn-remove').addEventListener('click', () => {
            const childCount = this.$data.parentEl.querySelectorAll('.auto-complete-item').length;
            // 모두 삭제 가능하도록 변경 가능?
            (childCount > 1) && (this.$element.remove());
        })

        this.$element.querySelector('.auto-complete-list')?.addEventListener('mouseover', (e) => {
            const { target } = e;
            this.$element.querySelector('.selected')?.classList.remove('selected');
            if(target.matches('.auto-complete') || target.matches('.auto-complete *')) {
                const el = e.composedPath().find(el => el.classList.contains('auto-complete'));
                el ? el.classList.add('selected') : target.classList.add('selected');
            }
        })

        this.$element.querySelector('.auto-complete-list')?.addEventListener('click', ({target}) => {
            if(target.matches('.btn-direct')) {
                return;
            }
            this.setInputValue();
        })

        document.addEventListener('click', ({target}) => {
            if(!this.$element.classList.contains('active') || target.tagName === "INPUT" || target.matches('.btn-direct')) {
                return;
            }
            this.setInputValue();
        })
    }

    setInputValue() {
        // this.$element.querySelector('input[type=text]').value = getDataset(this.$element.querySelector('.selected'), 'val') || '';
        // this.$element.querySelector('input[type=hidden]').value = getDataset(this.$element.querySelector('.selected'), 'id') || '';
        const selectedEl = document.querySelector('.selected');
        console.log(selectedEl, selectedEl.querySelector('input[type=hidden]'), selectedEl.querySelector('input[type=hidden]').value);
        this.$element.querySelector('input[type=text]').value = selectedEl.querySelector('input[type=hidden]').value;
        this.$element.querySelector('input[type=hidden]').value = selectedEl.querySelector('input[type=radio]').value;

        this.inputBlur();
    }

    keyUpHandler(e) {
        this.$element.querySelector('.auto-complete-list').classList.add('show');
        if((e.key === 'Process' && (e.code ==='ArrowDown' || e.code === 'ArrowUp'))) {
            return;
        }

        let selectedEl = this.$element.querySelector('.auto-complete-list .selected');

        if(e.code === 'ArrowDown' || (e.key === 'Down')) {
            if(e.keyCode === 229) {
                return;
            }
            if(selectedEl) {
                selectedEl.classList.remove('selected');
                selectedEl = selectedEl.nextElementSibling;
                selectedEl?.classList.add('selected');
            } else {
                selectedEl = this.$element.querySelector('.auto-complete-list').firstElementChild;
                selectedEl?.classList.add('selected');
            }
            this.$element.querySelector('input[type=text]').value = selectedEl ? getDataset(this.$element.querySelector('.auto-complete.selected'), 'val') : this.originVal;
            return;
        }

        if(e.code === 'ArrowUp' || e.key === 'Up') {
            if(selectedEl) {
                selectedEl?.classList.remove('selected');
                selectedEl = selectedEl.previousElementSibling;
                selectedEl?.classList.add('selected');
            } else {
                selectedEl = this.$element.querySelector('.auto-complete-list').lastElementChild;
                selectedEl?.classList.add('selected');
            }
            this.$element.querySelector('input[type=text]').value = selectedEl ? getDataset(this.$element.querySelector('.auto-complete.selected'), 'val') : this.originVal;
            return;
        }

        if(e.code === 'Enter') {
            if(!selectedEl) {
                return;
            }
            this.setInputValue();
            return;
        }

        const inputVal = this.$element.querySelector('input[type=text]').value;
        if(!inputVal) {
            return;
        }
        fetch(this.$data.recommendUrl + inputVal, {
            method: 'GET',
            headers: {
                ...this.$data.headers,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(response => response.json())
            .then(data => {
                this.$element.querySelector('.auto-complete-list').innerHTML = '';
                this.originVal = this.$element.querySelector('input[type=text]').value;

                const div = document.createElement('div');
                div.innerHTML = data.map((item) => `
                        <div class="auto-complete mykl-radio">
                            <input type="radio" value="${item[this.$data.id]}" id="${item[this.$data.id]}" class="radio-input">
                            <input type="hidden" value="${item[this.$data.value]}">
                            <label for="${item[this.$data.id]}">${item[this.$data.value].replace(this.originVal.trim(), `<b class="fw-bold">${this.originVal.trim()}</b>`)}</label>
                        </div>
                    `).join("")
                    + `<button type="button" class="btn-direct">직접입력 > </button>`;
                // <div className="auto-complete" data-id="${item[this.$data.id]}"
                //      data-val="${item[this.$data.value]}">${item[this.$data.value].replace(this.originVal.trim(), `<b class="fw-bold">${this.originVal.trim()}</b>`)}</div>

                this.$element.querySelector('.auto-complete-list').innerHTML = div.innerHTML;
            })
    }

    closeAllAutoComplete() {
        document.querySelectorAll('.auto-complete-item.active').forEach(el => el.classList.remove('active'));
    }

    inputBlur() {
        this.$element.querySelector('input[type=text]').blur();
        this.$element.classList.remove('active');
        this.$element.querySelector('.show')?.classList.remove('show');
        this.$element.querySelector('.selected')?.classList.remove('selected');
    }
}

export default class AutoComplete extends Component {
    setElements() {
        this.$element.classList.add('mykl-autoComplete');
        this.$element.querySelector('.auto-complete-list').classList.add('form-group');
        this.name = this.$element.querySelector("input").getAttribute("name");
        this.$element.querySelector('.auto-complete-input').classList.add('form-group');
        this.$element.querySelector('.auto-complete-input').classList.add('form-row');
        const originInput = this.$element.querySelector("input");
        originInput.removeAttribute("name");
        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('name', this.name);
        hiddenInput.setAttribute('type', 'hidden');
        originInput.parentElement.appendChild(hiddenInput);
    }

    setTemplate() {
        return `
            <a type="button" class="btn-remove hide mykl-btn btn-secondary">삭제</a>
        `
    }

    render() {
        this.$element.querySelector('.auto-complete-input').innerHTML += this.setTemplate();
        new AutoCompleteItem(this.$element.querySelector('.auto-complete-item'), { parentEl: this.$element, name: this.name, ...this.$data });
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(target.classList.contains('btn-add')) {
                // 1. node clone
                // 2. 원래 node show 제거
                // 3. 원래 node selected 제거
                // 4. clone node show 제거
                // 5. 원래 node selected 제거

                const currentEl = this.$element.querySelector('.auto-complete-item.active') || this.$element.querySelector('.auto-complete-group').lastElementChild;
                const selectedEl = currentEl?.querySelector('.selected');
                currentEl.querySelector('input[type=text]').value = selectedEl ? getDataset(selectedEl, 'id') : currentEl.classList.contains('active') ? '' : currentEl.querySelector('input').value;
                currentEl.querySelector('.auto-complete-list').innerHTML = "";

                currentEl.classList.remove('active');
                currentEl.querySelector('.auto-complete-list.show')?.classList.remove('show');
                currentEl.querySelector('.auto-complete-list .selected')?.classList.remove('selected');
                const duplicatedEl = currentEl.cloneNode(true);
                duplicatedEl.querySelector('input').value = '';
                duplicatedEl.querySelector('input[type=hidden]').value = "";
                this.$element.querySelector('.auto-complete-group').appendChild(duplicatedEl);
                currentEl.querySelector('.btn-add').classList.add("hide");
                currentEl.querySelector('.btn-remove').classList.remove("hide");

                new AutoCompleteItem(duplicatedEl, { parentEl: this.$element, name: this.name, ...this.$data });
            }
        })
    }
}

