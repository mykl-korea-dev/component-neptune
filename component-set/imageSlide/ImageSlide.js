import Component from "../../basic/js/Component.js";
import {throttle} from "../../basic/js/utils.js";

export default class ImageSlide extends Component {
    render() {
        this.checkPrevDisabled();
        this.checkNextDisabled();
    }

    setEvents() {
        this.$element.querySelector('.slide-prev')?.addEventListener('click', throttle(this.clickPrevBtn.bind(this), 500));
        this.$element.querySelector('.slide-next')?.addEventListener('click', throttle(this.clickNextBtn.bind(this), 500));

        window.addEventListener('resize', this.setElements.bind(this));
    }

    clickPrevBtn() {
        const isDisabled = this.checkPrevDisabled();
        if(isDisabled) {
            return;
        }
        this.$element.querySelector('.slide-next').classList.remove("disabled");
        const { width: groupWidth } = this.$element.querySelector('.slide-group').getBoundingClientRect();
        this.$element.querySelectorAll('.slide-item').forEach((el, i) => {
            const currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
            el.style.transform = `translateX(${Number(currentPosX) + Number(groupWidth)}px)`;
        });
        setTimeout(() => {
            this.checkPrevDisabled();
        }, 510);
    }

    clickNextBtn() {
        const isDisabled = this.checkNextDisabled();
        if(isDisabled) {
            return;
        }
        this.$element.querySelector('.slide-prev').classList.remove("disabled");
        const { width: groupWidth } = this.$element.querySelector('.slide-group').getBoundingClientRect();
        this.$element.querySelectorAll('.slide-item').forEach((el, i) => {
            const currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
            el.style.transform = `translateX(${Number(currentPosX) - Number(groupWidth)}px)`;
        });
        setTimeout(() => {
            this.checkNextDisabled();
        }, 510);
    }

    checkPrevDisabled() {
        const firstImage = this.$element.querySelector('.slide-group').firstElementChild;
        const { width: firstImgWidth , x: firstImgX } = firstImage.getBoundingClientRect();
        if(firstImgX <= firstImgWidth && firstImgX >= 0) {
            this.$element.querySelector('.slide-prev').classList.add("disabled");
            return true;
        }
        return false;
    }

    checkNextDisabled() {
        const { width: groupWidth, x: groupX } = this.$element.querySelector('.slide-group').getBoundingClientRect();
        const lastImage = this.$element.querySelector('.slide-group').lastElementChild;
        const { width: lastImgWidth , x: lastImgX } = lastImage.getBoundingClientRect();
        if(lastImgX + lastImgWidth <= groupX + groupWidth) {
            this.$element.querySelector('.slide-next').classList.add("disabled");
            return true;
        }
        return false;
    }
}
