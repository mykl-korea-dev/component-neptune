import Component from "../../basic/js/Component.js";

export default class Loading extends Component {
    setElements() {
        const { loading = true } = this.$data;
        if(loading) {
            this.startLoading();
        } else {
            this.stopLoading();
        }
    }

    stopLoading() {
        this.$element.classList.add('loading-stop');
    }

    startLoading() {
        this.$element.classList.remove('loading-stop');
    }
}