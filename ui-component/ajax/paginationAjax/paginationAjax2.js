import Component from "../../../basic/js/Component.js";
import { getDataset } from "../../../basic/js/utils.js";

export default class PaginationAjax extends Component {
    setTemplate() {
        this.$element.classList.add("mykl-pagination");
        this.$data.options = {};
        const { start: startKey="start" , limit: limitKey="limit", total:totalKey="total", setCenter=false } = this.$data.options;
        const [ start, limit, total ] = [startKey, limitKey, totalKey].map(v => this.$data.data[v]);

        const getFirstAndLastNumber = (option) => {
            return option ? this.setAlwaysCenter(start, total, limit)
                : this.setInGroup(start, total, limit);
        }

        let { firstNumber, lastNumber, pageCount, pageGroup } = getFirstAndLastNumber(setCenter=== true);

        const next = lastNumber + 1;
        const prev = firstNumber - 1;

        return `
            ${prev >= 1 ? `<li class="page-item page-prev"  ${prev >= 1 ? `data-page="${prev}"` : ''} >이전</li>`: ''}
            ${[...new Array(lastNumber - firstNumber + 1)].map((page, i) => `
                <li class="page-item ${Math.floor(start / limit) === (pageGroup * 10) + i ? "active" : ""}" data-page=${firstNumber + i}>
                    ${firstNumber + i}
                </li>
            `).join('')}
            ${next <= pageCount ? `<li class="page-item page-next" ${next <= pageCount ? `data-page="${next}"` : ''}>다음</li>` : ''}
        `
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(target.classList.contains('page-item')) {
                this.$data.data['start'] = (+getDataset(target, 'page') - 1) * this.$data.data.limit + 1;
                this.$data.callback && this.$data.callback(this.$data);
                this.render();
            }
        })
    }

    // TODO: 수정
    // 페이지 숫자가 항상 가운데 위치하도록
    setAlwaysCenter(start, total, limit, pageCount) {
        let lastNumber = start + Math.floor(((limit - 1) / 2));

        let firstNumber = lastNumber - (limit - 1);

        if(lastNumber > pageCount) {
            lastNumber = pageCount;
        }

        if(lastNumber - firstNumber < limit) {
            firstNumber = lastNumber - limit + 1;
        }

        return ({lastNumber, firstNumber});
    }

    // 페이지 숫자가 해당 그룹에 속하도록
    setInGroup(start, total, limit) {
        const pageGroup = Math.floor((start / limit) / 10);

        let pageCount = +total / +limit;
        pageCount = Math.ceil(pageCount);

        let lastNumber = (pageGroup + 1) * 10;

        (lastNumber >= pageCount) && (lastNumber = pageCount);

        let firstNumber = ((pageGroup + 1) * 10) - 9 || 1;

        return ({lastNumber, firstNumber, pageCount, pageGroup});
    }
}


