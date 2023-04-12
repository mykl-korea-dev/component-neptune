import Component from "../../basic/Component.js";
import errorMessage from "../../basic/Error.js";

export default class Accordion extends Component {
    setEvents() {
        this.$element.addEventListener('click', (e) => {
            const { target } = e;
            // e.stopPropagation();
            if(target.matches('.accordion-toggle')) {
                let el = null;
                try {
                    el = e.composedPath().find(el => el.classList.contains('accordion-item'));
                } catch(e) {
                    errorMessage({
                        message: "the selector(.accordion-item) is undefined",
                        component: "Accordion",
                        element: '#' + this.$element.id
                    });
                    return;
                }
                if(el.classList.contains('show')) {
                    el.classList.remove('show');
                    el.querySelector('.accordion-body').style.height = '0';
                } else {
                    // 이전 accordion-item.show 처리
                    const showedEl = this.$element.querySelector('.accordion-item.show');
                    showedEl && (showedEl.querySelector('.accordion-body').style.height = '0');
                    showedEl?.classList.remove('show');
                    // accordion-item.show 추가
                    el.classList.add('show');
                    let bodyHeight = null;
                    [...el.querySelectorAll('.accordion-body-item')].forEach(el => bodyHeight += el.getBoundingClientRect().height);
                    el.querySelector('.accordion-body').style.height = bodyHeight + 'px';
                }
            }
        })
    }
}

// if(!this.$element.classList.contains('show-always')) {
//     el?.querySelector('.accordion-body.show') !== this.$element.querySelector('.accordion-body.show')
//     && }this.$element.querySelector('.accordion-body.show')?.classList.remove('show');
// }