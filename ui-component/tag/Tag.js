import Component from "../../basic/Component.js";

export default class Tag extends Component {
    setElements() {
    }

    setEvents() {
        this.$element.querySelector('.tag-input').addEventListener('focus', () => {
            this.$element.querySelector('.tag-input-box').classList.add('focus');
            this.$element.querySelector('.tag-input').setAttribute('placeholder', '');
            this.$element.querySelector('.tag-input').style.width = '9px';
        })

        this.$element.querySelector('.tag-input').addEventListener('input', () => {
            const input = this.$element.querySelector('.tag-input').value;

            this.$element.querySelector('.tag-input').style.width = ((input.length) * 13) + 'px';

            const inputItemLength = this.$element.querySelectorAll('.tag-item').length;
            if(inputItemLength > 10) {
                console.log('태그는 10개까지 입력할 수 있습니다.')
            }
        })

        this.$element.querySelector('.tag-input').addEventListener('keydown', (e) => {
            const input = this.$element.querySelector('.tag-input');


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
                    input.style.width = '9px';
                }
            } else {
                if(e.key === 'Enter') {
                    this.addInputItem()
                }

                if(input.value.length >= 20) {

                    console.log('20넘음')

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                    if(e.key != 'Enter') {
                        return;
                    }
                }
            }
        })

        this.$element.querySelector('.tag-input').addEventListener('blur', (e) => {
            if(this.$element.querySelector('.tag-input').value.length > 0) {
                this.addInputItem()
            }

            if(!this.$element.querySelector('.tag-item')) {
                this.$element.querySelector('.tag-input').setAttribute('placeholder', '태그를 입력해주세요 (최대 10개...?)');
                this.$element.querySelector('.tag-input').style.width = "200px";
                return;
            }
            console.log(this.$element.querySelector('.tag-input').value.length)

        })
    }
    
    addInputItem() {
        const input = this.$element.querySelector('.tag-input');

        const inputBox = this.$element.querySelector('.tag-input-box');

        const tag = document.createElement('div');
        tag.classList.add('tag-item');
        tag.innerHTML = `<em class="tag-text">${'#' + input.value}</em>`;

        input.value = '';
        input.classList.remove('focus');
        input.style.width = '9px';

        this.$element.querySelector('.tag-inner').insertBefore(tag, inputBox);
    }
}

new Tag(document.querySelector('.tag'));