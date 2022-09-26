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
        this.$element.addEventListener('input', (e) => {
            if(this.$element.querySelector('.auto-complete-group').classList.contains('disabled')) {
                return;
            }
            const button = document.createElement('button');

            fetch("https://e83cb729-a641-499b-a9b2-0442a7837ad2.mock.pstmn.io/autoComplete")
                .then(response => response.json())
                .then(datas => {
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
        })

        this.$element.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowDown') {
                let selectedEl = this.$element.querySelector('.auto-complete.selected');
                if(selectedEl) {
                    console.log(e);

                    selectedEl.classList.remove('selected');
                    selectedEl = selectedEl.nextElementSibling;
                    selectedEl?.classList.add('selected');
                } else {
                    console.log(e);

                    selectedEl = this.$element.querySelector('.auto-complete');
                    selectedEl.classList.add('selected');
                }
                this.$element.querySelector('input').value = selectedEl ? this.$element.querySelector('.auto-complete.selected')?.dataset.val : this.originVal;
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
            }
        })

        this.$element.addEventListener('click', ({ target }) => {
            if(target.classList.contains('directly')) {
                this.$element.querySelector('.auto-complete-group').classList.add('disabled');
            }
        })
    }
}

new AutoComplete(document.querySelector('.auto-completes'));