import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import {setItem} from "../../../extended-component/slideitem/SlideItem.js";

export default class ImageSlideAjax extends Component {
    setTemplate() {
        return [...Object.keys(this.$data)].map((el) => `<li class="slide-item"></li>`).join("");
    }

    render() {
        this.$element.querySelector('.slider-group').innerHTML = this.setTemplate();
        this.$element.querySelectorAll('.slide-item').forEach(el => el.appendChild(setItem(this.$data.data)));
    }

    setEvents() {
        this.$element.querySelector('.prev').addEventListener('click', this.throttle(this.clickPrevBtn.bind(this), 500))
        this.$element.querySelector('.next').addEventListener('click', () => {
            const { width: groupWidth } = this.$element.querySelector('.slider-group').getBoundingClientRect();
            const lastImage = this.$element.querySelector('.slider-group').lastElementChild;
            const { width: lastImgWidth , x: lastImgX } = lastImage.getBoundingClientRect();
            if(lastImgX + lastImgWidth <= groupWidth) {
                return;
            }

            this.$element.querySelectorAll('.slide-item').forEach((el, i) => {
                const currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
                el.style.transform = `translateX(${Number(currentPosX) - Number(groupWidth)}px)`;
            })
        })

        window.addEventListener('resize', this.setElements.bind(this));
    }

    throttle(func, delay) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            const context = this;
            if(!lastRan) {
                func.call(context, ...args);
                lastRan = Date.now();
            } else {
                if (lastRan) clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if((Date.now() - lastRan) >= delay) {
                        func.call(context, ...args);
                        lastRan = Date.now();
                    }
                }, delay - (Date.now() - lastRan));
            }
        }
    }

    clickPrevBtn() {
        const firstImage = this.$element.querySelector('.slider-group').firstElementChild;
        const { width: firstImgWidth , x: firstImgX } = firstImage.getBoundingClientRect();
        if(firstImgX <= firstImgWidth && firstImgX >= 0) {
            return;
        }
        const { width: groupWidth } = this.$element.querySelector('.slider-group').getBoundingClientRect();
        this.$element.querySelectorAll('.slide-item').forEach((el, i) => {
            const currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
            el.style.transform = `translateX(${Number(currentPosX) + Number(groupWidth)}px)`;
        })
    }

}

// getData("http://localhost:3000/imageSlide", (data) =>  new ImageSlideAjax(document.querySelector('.image-slide-ajax'), {data, type: 'type2'}));