import Component from "../../../basic/Component.js";
import { getDataset } from "../../../basic/utils.js";

export default class PaginationAjax extends Component {
    setTemplate() {
        this.$element.classList.add("mykl-pagination");
        const { currentPage, pageCount } = this.$data;

        const getFirstAndLastNumber = (option) => {
            return option ? this.setAlwaysCenter(currentPage, pageCount)
                : this.setInGroup(currentPage, pageCount);
        }

        let { firstNumber, lastNumber } = getFirstAndLastNumber(this.$data["setCenter"]);

        const next = lastNumber + 1;
        const prev = firstNumber - 1;

        return `
            ${prev >= 1 ? `<li class="page-item page-prev"  ${prev >= 1 ? `data-page="${prev}"` : ''} >이전</li>`: ''}
            ${[...new Array(lastNumber - firstNumber + 1)].map((page, i) => `
                <li class="page-item ${(firstNumber + i == currentPage) ? "active" : ""}" data-page=${firstNumber + i}>
                    ${firstNumber + i}
                </li>
            `).join('')}
            ${next <= pageCount ? `<li class="page-item page-next" ${next <= pageCount ? `data-page="${next}"` : ''}>다음</li>` : ''}
        `
    }

    render() {
        fetch(this.$data.paginationUrl, {
            method: 'POST',
            headers: {
                ...this.$data.headers,
            },
            body: JSON.stringify(this.$data)
        }).then(res => res.json())
            .then(data => {
                this.$data = {
                    ...this.$data,
                    ...data
                }
                this.$data.callback(this.$data);
                this.$element.innerHTML = this.setTemplate();
            });
    }

    setEvents() {
        this.$element.addEventListener('click', ({target}) => {
            if(target.classList.contains('page-item')) {
                this.$data['start'] = (+getDataset(target, 'page') - 1) * this.$data.limit + 1;
                this.render();
            }
        })
    }

    // TODO: 수정
    // 페이지 숫자가 항상 가운데 위치하도록
    setAlwaysCenter(currentPage, totalCount, limit, pageCount) {
        let lastNumber = currentPage + Math.floor(((limit - 1) / 2));

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
    setInGroup(currentPage, pageCount) {
        const pageGroup = Math.floor((currentPage - 1) / 10);

        let lastNumber = (pageGroup + 1) * 10;

        (lastNumber >= pageCount) && (lastNumber = pageCount);

        let firstNumber = ((pageGroup + 1) * 10) - 9;
        return ({lastNumber, firstNumber});
    }

}


