import Component from "../../basic/Component.js";

export default class ContextMessage extends Component {
    setEvents() {
        this.$element.querySelector('input').addEventListener('keyup', this.$data.bind(this))
    }
}

// new ContextMessage(document.querySelector('.context-message'), getFunc)
// function getFunc() {
//     const reg = /^hi$/;
//     console.log('hi');
//     (reg.test(this.$element.querySelector("input").value)) ? (this.$element.querySelector('.message').classList.add('show')) : (this.$element.querySelector('.message.show')?.classList.remove('show'));
// };