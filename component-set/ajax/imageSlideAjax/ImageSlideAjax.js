import ImageSlide from "../../imageSlide/ImageSlide.js";
import {throttle} from "../../../basic/utils.js";

/*
채우는 방법
컴포넌트
html => 아이템 하나만 지정
 */
export default class ImageSlideAjax extends ImageSlide {
    setElements() {
        this.component = null;
    }

    render() {
        const { url, component, method, headers } = this.$data;
        fetch(url, {
            method,
            headers
        })
            .then(res => res.json())
            .then(data => {
                this.component = this.component ? this.component.setData(data) : component(this.$element, data);
                (this.$data.tempImage) && this.$element.querySelectorAll('img').forEach(el => el.setAttribute('src', this.$data.tempImage));
            }).catch(err => {
                throw new Error("failed to render from ImageSlideAjax::: " + err);
        })
    }

    setEvents() {
        // super.setEvents();
        this.$element.querySelector('.slide-prev').addEventListener('click', throttle(this.render.bind(this), 500));
        this.$element.querySelector('.slide-next').addEventListener('click', throttle(this.render.bind(this), 500));
    }
}