import Component from "../../../basic/Component.js";
import {getData, getDataset} from "../../../basic/utils.js";
import Range from "../../range/Range.js";

export default class RangeAjax extends Range {
    setElements() {
        this.$element.classList.add('mykl-range');
        const minKey = this.$element.querySelector('.input-left').getAttribute('min').replace("$", "");
        const maxKey = this.$element.querySelector('.input-left').getAttribute('max').replace("$", "");
        const stepKey = this.$element.querySelector('.input-left').getAttribute('step').replace("$", "");
        const minValueKey = this.$element.querySelector('.input-left').getAttribute('value').replace("$", "");
        const maxValueKey = this.$element.querySelector('.input-right').getAttribute('value').replace("$", "");

        [this.min, this.max, this.minValue, this.maxValue, this.step] = [minKey, maxKey, minValueKey, maxValueKey, stepKey].map(v => this.$data[v]);
        this.$element.querySelector('.input-left').setAttribute('min', this.min);
        this.$element.querySelector('.input-right').setAttribute("min", this.min);
        this.$element.querySelector('.input-left').setAttribute('max', this.max);
        this.$element.querySelector('.input-right').setAttribute("max", this.max);
        this.$element.querySelector('.input-left').setAttribute('step', this.step);
        this.$element.querySelector('.input-right').setAttribute("step", this.step);
        this.$element.querySelector('.input-left').setAttribute('value', this.minValue);
        this.$element.querySelector('.input-right').setAttribute("value", this.maxValue);
    }
}
