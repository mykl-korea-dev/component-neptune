import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";
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
        this.$element.querySelector('input').setAttribute('autocomplete', 'off');
    }

    setEvents() {
        this.$element.addEventListener('keydown', this.keyDownHandler.bind(this));

        this.$element.querySelector('input').addEventListener('focus', () => {
            this.closeAllAutoComplete();
            this.$element.classList.add('active');
            this.$element.querySelector('.auto-complete-list').classList.add('show');
        })

        this.$element.querySelector('.btn-direct').addEventListener('click', () => {
            this.$element.querySelector('input').value = this.currentValue || this.originVal;
            this.inputBlur();
            // this.$element.querySelector('.auto-complete-list').classList.remove('show');
        })

        this.$element.querySelector('.btn-remove')?.addEventListener('click', () => {
            const childCount = this.$element.parentElement.childElementCount;
            // 모두 삭제 가능하도록 변경 가능?
            (childCount > 1) && (this.$element.remove());
        })

        this.$element.querySelector('.auto-complete-list')?.addEventListener('mouseover', (e) => {
            this.$element.querySelector('.selected')?.classList.remove('selected');
            const target = e.composedPath().find(el => el.classList.contains('auto-complete'));
            target.classList.add('selected');
        })

        this.$element.querySelector('.auto-complete-list')?.addEventListener('click', () => {
            this.currentValue = getDataset(this.$element.querySelector('.selected'), 'val');
            this.$element.querySelector('input').value = this.currentValue;
            this.inputBlur();
        })

        document.addEventListener('click', ({target}) => {
            if(!this.$element.classList.contains('active') || target.tagName === "INPUT") {
                return;
            }
            this.currentValue = getDataset(this.$element.querySelector('.selected'), 'val') || this.currentValue;
            this.$element.querySelector('input').value = this.currentValue || '';
            this.inputBlur();
        })

    }

    keyDownHandler(e) {
        // console.log(e.key, e.keyCode, e.code, e.key == 'Down', e.key === 'Down', e.keyCode === 229, e.keyCode != 229, e.keyCode !== 229);
        this.$element.querySelector('.auto-complete-list').classList.add('show');
        if((e.key === 'Process' && (e.code ==='ArrowDown' || e.code === 'ArrowUp'))) {
            return
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
            this.$element.querySelector('input').value = selectedEl ? getDataset(this.$element.querySelector('.auto-complete.selected'), 'val') : this.originVal;
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
            this.$element.querySelector('input').value = selectedEl ? getDataset(this.$element.querySelector('.auto-complete.selected'), 'val') : this.originVal;
            return;
        }

        if(e.code === 'Enter') {
            if(!selectedEl) {
                return;
            }
            this.currentValue = getDataset(selectedEl, 'val');
            this.$element.querySelector('input').value = this.currentValue;
            this.inputBlur();
            return;
        }

        fetch("http://localhost:3000/autoComplete")
            .then(response => response.json())
            .then(datas => {
                this.$element.querySelector('.auto-complete-list').innerHTML = '';
                this.originVal = this.$element.querySelector('input').value;

                const div = document.createElement('div');
                div.innerHTML = datas.map(data => `
                        <div class="auto-complete" data-val="${data}">${data.replace(this.originVal, `<b>${this.originVal}</b>`)}</div> 
                    `).join("");
                this.$element.querySelector('.auto-complete-list').innerHTML = div.innerHTML;
            })
    }

    closeAllAutoComplete() {
        document.querySelectorAll('.auto-complete-item.active').forEach(el => el.classList.remove('active'));
    }

    inputBlur() {
        this.$element.querySelector('input').blur();
        this.$element.classList.remove('active');
        this.$element.querySelector('.show')?.classList.remove('show');
        this.$element.querySelector('.selected')?.classList.remove('selected');
    }
}

export default class AutoComplete extends Component {
    setElements() {
        new AutoCompleteItem(this.$element.querySelector('.auto-complete-item'));
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(target.classList.contains('btn-add')) {
                // 1. node clone
                // 2. 원래 node show 제거
                // 3. 원래 node selected 제거
                // 4. clone node show 제거
                // 5. 원래 node selected 제거

                const currentEl = this.$element.querySelector('.auto-complete-item.active') || this.$element.querySelector('.auto-complete-item');
                const selectedEl = currentEl?.querySelector('.selected');
                currentEl.querySelector('input').value = selectedEl ? getDataset(selectedEl, 'val') : currentEl.classList.contains('active') ? '' : currentEl.querySelector('input').value;

                currentEl.classList.remove('active');
                currentEl.querySelector('.auto-complete-list.show')?.classList.remove('show');
                currentEl.querySelector('.auto-complete-list .selected')?.classList.remove('selected');

                const duplicatedEl = currentEl.cloneNode(true);
                duplicatedEl.querySelector('input').value = '';
                this.$element.querySelector('.auto-complete-group').appendChild(duplicatedEl);

                new AutoCompleteItem(duplicatedEl);
            }
        })
    }
}

// document.querySelectorAll('.mykl-auto-complete').forEach(el => new AutoComplete(el));