import Component from "../../basic/Component.js";

export default class AutoComplete extends Component {
    setElements() {
        this.originVal = null;
        const button = document.createElement("button");
        button.classList.add('directly');
        button.innerHTML = '직접입력';
        this.$element.appendChild(button);
    }

    setEvents() {
        this.$element.querySelector('input').addEventListener('focus', () => {
            this.$element.querySelector('.disabled')?.classList.remove('disabled');
            this.$element.querySelector('.selected')?.classList.remove('selected');
        })

        this.$element.querySelector('.add-item')?.addEventListener('click', (e) => {
            const div = document.createElement('div');
            div.classList.add('auto-completes');
            div.innerHTML = `
                <input type="text" name="" id="" class="search-input">
                <div class="auto-complete-group"></div>
                <button type="button" class="add-item">추가</button>
                <button type="button" class="remove-item">삭제</button>
            `
            this.$element.parentElement.appendChild(div);
            new AutoComplete(div);
        })

        this.$element.querySelector('.remove-item')?.addEventListener('click', (e) => {
            const childCount = this.$element.parentElement.childElementCount;
            (childCount > 1) && (this.$element.remove());
        })

        this.$element.addEventListener('keyup', this.throttle(this.keyUpHandler.bind(this), 100));

        this.$element.addEventListener('keydown', this.throttle(this.keyDownHandler.bind(this), 300));

        this.$element.addEventListener('click', ({ target }) => {
            if(target.classList.contains('directly')) {
                this.$element.querySelector('.auto-complete-group').classList.add('disabled');
            }

            if(target.classList.contains('auto-complete')) {
                this.$element.querySelector('input').value = target.dataset.val;
                this.$element.querySelector('.auto-complete-group').classList.add('disabled');
            }
        })
    }

    throttle(func, delay) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            const context = this;
            if(!lastRan) {
                func.call(context, ...args);
                lastRan = Date.now();
            } else {
                if (lastRan) clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if((Date.now() - lastRan) >= delay) {
                        func.call(context, ...args);
                        lastRan = Date.now();
                    }
                }, delay - (Date.now() - lastRan));
            }
        }
    }

    keyUpHandler(e) {
        if(e.key === 'Process') {
            return;
        }
        if(e.key === 'ArrowDown') {
            console.log('keyup', this.originVal, e)

            let selectedEl = this.$element.querySelector('.auto-complete.selected');
            if(selectedEl) {
                selectedEl.classList.remove('selected');
                selectedEl = selectedEl.nextElementSibling;
                selectedEl?.classList.add('selected');
            } else {
                selectedEl = this.$element.querySelector('.auto-complete');
                selectedEl.classList.add('selected');
            }
            this.$element.querySelector('input').value = selectedEl ? this.$element.querySelector('.auto-complete.selected')?.dataset.val : this.originVal;
            return;
        }

        if(e.key === 'ArrowUp') {
            let selectedEl = this.$element.querySelector('.auto-complete.selected');
            if(selectedEl) {
                selectedEl?.classList.remove('selected');
                selectedEl = selectedEl.previousElementSibling;
                selectedEl?.classList.add('selected');
            } else {
                selectedEl = this.$element.querySelector('.auto-complete-group').lastElementChild;
                selectedEl.classList.add('selected');
            }
            this.$element.querySelector('input').value = selectedEl ? this.$element.querySelector('.auto-complete.selected')?.dataset.val : this.originVal;
            return;
        }
    }

    keyDownHandler(e) {
        if(this.$element.querySelector('.auto-complete-group').classList.contains('disabled')) {
            return;
        }

        if(e.code === 'ArrowDown' || e.code === 'ArrowUp') {
            return;
        }

        if(e.key === 'Enter') {
            if(!this.$element.querySelector('.auto-complete.selected')) {
                return;
            }
            this.$element.querySelector('input').value = e.target.value;
            this.$element.querySelector('.auto-complete-group').classList.add('disabled');
            this.$element.querySelector('input').blur();
            return;
        }
        console.log('keydown', e);

        fetch("http://localhost:3000/autoComplete")
            .then(response => response.json())
            .then(datas => {
                console.log('fetch')
                this.$element.querySelector('.auto-complete-group').innerHTML = '';
                this.originVal = this.$element.querySelector('input').value;

                const template = document.createElement('template');
                const fragment = new DocumentFragment();
                template.innerHTML = datas.map(data => `
                        <div class="auto-complete" data-val="${data}">${data.replace(this.originVal, `<b>${this.originVal}</b>`)}</div> 
                    `).join("");
                fragment.appendChild(template.content);

                this.$element.querySelector('.auto-complete-group').appendChild(fragment);
            })
    }
}

document.querySelectorAll('.auto-completes').forEach(el => new AutoComplete(el));