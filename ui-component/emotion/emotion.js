import Component from "../../basic/Component.js";

class EmotionButton extends Component{
    setTemplate() {
        return this.$data ? `<button class="btn-emotion emotion-add" type="button">+</button>` : `<button class="btn-emotion emotion-reset" type="button">x</button>`;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

export default class Emotion extends Component {
    setTemplate() {
        return `   
            <div class="clicked-emotion"></div> 
            <div class="emotion-group">
                <div class="emotion-item emotion-good">good</div>
                <div class="emotion-item emotion-sad">sad</div>
                <div class="emotion-item emotion-like">like</div>
                <div class="emotion-item emotion-bad">bad</div>
                <div class="emotion-item emotion-thumbsUp">thumbsUp</div>
                <div class="emotion-item emotion-thumbsDown">thumbsDown</div>
            </div>
        `
    }

    render() {
        this.state = true;
        this.$element.innerHTML = this.setTemplate();
        new EmotionButton(this.$element.querySelector('.clicked-emotion'), this.state);
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(target.classList.contains('btn-emotion')) {
                this.state = !this.state
                new EmotionButton(this.$element.querySelector('.clicked-emotion'), this.state);
            }

            if(target.classList.contains('emotion-add')) {
                this.$element.querySelector('.emotion-group').classList.add('show');
            }

            if(target.classList.contains('emotion-reset')) {
                this.$element.querySelector('.emotion-group').classList.remove('show');
            }
        })

        this.$element.querySelector('.emotion-group').addEventListener('click', ({target}) => {
            const emotions = this.$element.querySelector('.emotion-group').children;
            const clickedEl = [...emotions].find(el => el === target).cloneNode(true);
            this.$element.querySelector('.clicked-emotion').insertAdjacentElement('afterbegin', clickedEl);
            this.$element.querySelector('.emotion-group').classList.remove('show');
        })
    }
}

