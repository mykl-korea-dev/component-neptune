import Component from "../../basic/Component.js";

export default class Tag extends Component {
    setTemplate() {
        return  `<span class="tag-hidden-text"></span>`
    }

    render() {
        this.$element.querySelector('.tag-input-box').innerHTML += this.setTemplate();
    }

    setEvents() {
        this.$element.querySelector('.tag-input').addEventListener('focus', () => {
            console.log('focus', this.$element.querySelector('.tag-hidden-text').clientWidth);
            this.$element.querySelector('.tag-input-box').classList.add('focus');
            this.$element.querySelector('.tag-input').setAttribute('placeholder', '');
            this.$element.querySelector('.tag-input').style.width = this.$element.querySelector('.tag-hidden-text').getBoundingClientRect().width + 'px';
        })

        this.$element.querySelector('.tag-input').addEventListener('input', () => {
            const inputValue = this.$element.querySelector('.tag-input').value;
            const hiddenTextEl = this.$element.querySelector('.tag-hidden-text');

            hiddenTextEl.textContent = inputValue;
            this.$element.querySelector('.tag-input').style.width = hiddenTextEl.getBoundingClientRect().width + 'px';

            const inputItemLength = this.$element.querySelectorAll('.tag-item').length;
            if(inputItemLength > 10) {
                console.log('태그는 10개까지 입력할 수 있습니다.')
            }
        })

        this.$element.querySelector('.tag-input').addEventListener('keyup', (e) => {
            const input = this.$element.querySelector('.tag-input');
            console.log(e.key, e.code, e.keyCode)
            if(input.value.length >= 20 && e.key !== 'Backspace') {
                input.blur();
            }
        })

       this.$element.querySelector('.tag-input').addEventListener('keydown', (e) => {
            const input = this.$element.querySelector('.tag-input');

            if(e.key === 'Enter') {
               this.addInputItem();
               return;
           }

            if(input.value.length <= 0) {
                if(e.key === 'Backspace') {
                    const inputItemLength = this.$element.querySelectorAll('.tag-item').length;
                    if(inputItemLength === 0) {
                        return;
                    }

                    const lastItem = this.$element.querySelectorAll('.tag-item')[inputItemLength -1];
                    lastItem.parentElement.removeChild(lastItem);

                    const input = this.$element.querySelector('.tag-input');
                    input.value = '';

                }
            }

           if(input.value.length >= 20) {
               if(e.code) {
                   (e.code !== 'Backspace') && input.blur();
               } else {
                   input.blur();
               }
           }
        })

        this.$element.querySelector('.tag-input').addEventListener('blur', (e) => {
            if(this.$element.querySelector('.tag-input').value.length >= 20) {
                console.log(this.$element.querySelector('.tag-input').value, this.$element.querySelector('.tag-input').value.length)
                return;
            }
            if(this.$element.querySelector('.tag-input').value.length > 0) {
                this.addInputItem();
                return;
            }

            if(!this.$element.querySelector('.tag-item')) {
                this.$element.querySelector('.tag-input-box').classList.remove('focus')
                this.$element.querySelector('.tag-input').setAttribute('placeholder', '태그를 입력해주세요 (최대 10개...?)');
                this.$element.querySelector('.tag-input').style.width = "200px";
                return;
            }
        })
    }

    addInputItem() {
        const input = this.$element.querySelector('.tag-input');

        const inputBox = this.$element.querySelector('.tag-input-box');

        const tag = document.createElement('div');
        tag.classList.add('tag-item');
        tag.innerHTML = `
            <em class="tag-text">${'#' + input.value}</em>
            <input type="hidden" name="${input.getAttribute('name') || ''}" value="${input.value}">
        `;

        input.value = '';
        this.$element.querySelector('.tag-hidden-text').textContent = '';
        input.style.width = this.$element.querySelector('.tag-hidden-text').getBoundingClientRect().width + 'px';
        // input.focus();
        // console.log(this.$element.querySelector('.tag-hidden-text').clientWidth);
        this.$element.querySelector('.tag-inner').insertBefore(tag, inputBox);
    }
}

new Tag(document.querySelector('.mykl-tag'));