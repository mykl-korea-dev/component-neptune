import Component from "../../basic/Component.js";

export default class Tag extends Component {
    setElements() {
        const inputEl = this.$element.querySelector(".tag-input");
        this.name = inputEl.getAttribute("name");
        inputEl.setAttribute("autocomplete", "off");
        inputEl.removeAttribute("name");
    }

    setTemplate() {
        return `
            <strong class="blind">태그입력</strong>
            <span class="tag-hidden-text"></span>
            <div class="tagLength mykl-tooltip">
                <div class="tooltip-icon"></div>
                <div class="tooltip-content">태그는 10개까지 입력할 수 있습니다.</div>
            </div>
            <div class="textLength mykl-tooltip">
                <div class="tooltip-icon"></div>
                <div class="tooltip-content">태그는 20자까지 입력할 수 있습니다.</div>
            </div>
        `;
    }

    render() {
        const tagInputBoxEl = this.$element.querySelector('.tag-input-box');
        tagInputBoxEl.innerHTML += this.setTemplate();
    }

    setEvents() {
        this.$element.querySelector('.tag-input').addEventListener('focus', () => {
            this.$element.querySelectorAll('.mykl-tooltip').forEach(el => el.classList.remove('tooltip-active'));
            this.$element.querySelector('.tag-input-box').classList.add('focus');
            this.$element.querySelector('.tag-input').setAttribute('placeholder', '');
            this.setInputWidth();
        })

        this.$element.querySelector('.tag-input').addEventListener('input', (e) => {
            const inputValue = this.$element.querySelector('.tag-input').value;
            const hiddenTextEl = this.$element.querySelector('.tag-hidden-text');
            // 입력 글자 수 제한
            if (inputValue.length > 20) {
                this.$element.querySelector('.tag-input').value = hiddenTextEl.textContent;

                const tooltipBox = this.$element.querySelector('.mykl-tooltip.textLength');
                tooltipBox.classList.add('tooltip-active');

                (e.inputType !== "deleteContentBackward") && this.$element.querySelector('.tag-input').blur();
                return
            } else {
                hiddenTextEl.textContent = inputValue;
            }

            // 태그 수 제한
            const inputItemLength = this.$element.querySelectorAll('.tag-item').length;
            if (inputItemLength >= 10) {
                this.$element.querySelector('.tag-input').value = '';
                const tooltipBox = this.$element.querySelector('.mykl-tooltip.tagLength');

                tooltipBox.classList.add('tooltip-active');
                setTimeout(() => {
                    tooltipBox.classList.remove('tooltip-active');
                }, 1000)
                return
            }

            this.setInputWidth();

            if (e.data?.includes(",")) {
                if (this.$element.querySelector('.tag-input').value.length === 1) {
                    this.$element.querySelector('.tag-input').value = "";
                    return;
                }
                this.addInputItem();
                return;
            }
        })

        this.$element.querySelector('.tag-input').addEventListener('keydown', (e) => {
            const input = this.$element.querySelector('.tag-input');

            // 태그 지우기
            if (input.value.length <= 0) {
                if (e.key === 'Backspace') {
                    const inputItemLength = this.$element.querySelectorAll('.tag-item').length;
                    if (inputItemLength === 0) {
                        return;
                    }

                    const lastItem = this.$element.querySelectorAll('.tag-item')[inputItemLength - 1];
                    lastItem.parentElement.removeChild(lastItem);

                    const input = this.$element.querySelector('.tag-input');
                    input.value = '';
                }
                return;
            }
            if (e.key === 'Enter') {
                this.addInputItem();
            }
        })

        this.$element.querySelector('.tag-input').addEventListener('blur', () => {
            if (this.$element.querySelector('.tag-input').value.length >= 20) {
                return;
            }
            if (this.$element.querySelector('.tag-input').value.length > 0) {
                this.addInputItem();
            }
        })
    }

    setInputWidth() {
        this.$element.querySelector('.tag-input').style.width = this.$element.querySelector('.tag-hidden-text').getBoundingClientRect().width + 'px';
    }

    addInputItem() {
        const input = this.$element.querySelector('.tag-input');
        const inputBox = this.$element.querySelector('.tag-input-box');

        const tag = document.createElement('div');
        tag.classList.add('tag-item');

        tag.innerHTML = `
            <em class="tag-text">${'#' + input.value.replaceAll(",", "")}</em>
            <input type="hidden" name="${this.name}" value="${input.value.replaceAll(",", "")}">
        `;

        input.value = '';
        this.$element.querySelector('.tag-hidden-text').textContent = '';
        this.setInputWidth()

        this.$element.querySelector('.tag-inner').insertBefore(tag, inputBox);
    }
}

