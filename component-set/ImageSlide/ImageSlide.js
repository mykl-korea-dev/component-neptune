import Component from "../../basic/Component.js";

export default class ImageSlide extends Component {
    setElements() {
        const { height } = this.$element.querySelector('.slider-group li').getBoundingClientRect();
        console.log(height);
        this.$element.querySelector('.slider-group').style.height = height + 'px';

        let prevWidth = 0;
        this.$element.querySelectorAll('.slider-group li').forEach((el, i) => {
            const { width } = el.getBoundingClientRect();
            el.style.transform = `translateX(${prevWidth + (i * 10)}px)`;
            prevWidth += width;
            // console.log(prevWidth);
        })
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

            this.$element.querySelectorAll('.slider-group li').forEach((el, i) => {
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
        this.$element.querySelectorAll('.slider-group li').forEach((el, i) => {
            const currentPosX = el.style.transform.replace(/translateX\(|px\)/gi, "");
            el.style.transform = `translateX(${Number(currentPosX) + Number(groupWidth)}px)`;
        })
    }

}

document.querySelectorAll('.slider').forEach(el => new ImageSlide(el));