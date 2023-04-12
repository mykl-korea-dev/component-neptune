import Tag from "../../tag/Tag.js";

export default class TagAjax extends Tag {
    setElements() {
        super.setElements();
        this.$element.classList.add("mykl-tag");
        const value = this.$element.querySelector('.tag-input').getAttribute('value').replace('$', "")
        this.$element.querySelector('.tag-input').setAttribute("value", "");
        this.uploadedTags = this.$data[value] || null;

        const tagInputBoxEl = this.$element.querySelector('.tag-input-box');
        const div = document.createElement("div");

        div.innerHTML = this.uploadedTags?.map((data, i) => `
            <div class="tag-item">
                <em class="tag-text">${'#' + data}</em>
                <input type="hidden" value="${data}" name="${this.name}">
            </div>
        `).join('');

        tagInputBoxEl.parentElement.innerHTML = div.innerHTML + tagInputBoxEl.parentElement.innerHTML;
    }

    setTemplate() {
        return super.setTemplate();
    }

    render() {
        super.render();
        if(this.uploadedTags.length > 0) {
            this.$element.querySelector('.tag-input-box').classList.add('focus');
            this.$element.querySelector('.tag-input').setAttribute('placeholder', '');
            this.setInputWidth();
        }
        ((this.$element.querySelector('.tag-input')).getAttribute("disabled") === "") && (this.$element.querySelector('.tag-input-box').style.display = 'none');
    }
}

