import Progress from '../../progress/Progress.js';

export default class ProgressAjax extends Progress {
    setElements() {
        this.$element.classList.add('mykl-progress');
        const inputEl = this.$element.querySelector('input');
        ["min", "max", "value"].map(key =>
            inputEl.setAttribute(key, this.$data[inputEl.getAttribute(key).replace("$", "")])
        )
        super.setElements();
    }
}


