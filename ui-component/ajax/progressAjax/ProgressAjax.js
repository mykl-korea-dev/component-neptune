import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class ProgressAjax extends Component {
    setElements() {
        // const {min, max, value} = progress.dataset;
        // progress.style.width = `${(parseInt(max, 10)-parseInt(min, 10)) * 5}px`;
        // progressBar.style.width = `${parseInt(value, 10) / (parseInt(max, 10)-parseInt(min, 10))* 100}%`;

        const {min, max, value} = this.$data;
        console.log(this.$data)
        // this.$element.style.width = `${(parseInt(max, 10)-parseInt(min, 10)) * 5}px`;
        this.$element.style.width = `100%`;
        this.$element.querySelector('.progress-bar').style.width = `${Number(value) / (Number(max)-Number(min))* 100}%`;

    }
}

getData("http://localhost:3000/progress", (data) => new ProgressAjax(document.querySelector('.progress-ajax'), data));

