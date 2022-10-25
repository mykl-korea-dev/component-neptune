import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class PaginationAjax extends Component {
    setTemplate() {
        this.$element.classList.add("mykl-pagination");
        const url = window.location.href;
        const { currentPage, totalCount, pageCount, limit  } = this.$data;
        const totalPage = Math.ceil(totalCount / limit);

        // pageGroup으로 묶어서 현재 page의 위치가 해당 위치일 때 사용
        // const pageGroup = Math.ceil(currentPage / pageCount);
        // let lastNumber = pageGroup * pageCount;

        // 해당 페이지가 항상 중간에 위치하도록 하기 위함
        let lastNumber = currentPage + Math.floor(((pageCount - 1) / 2));

        if(lastNumber > totalPage) {
            lastNumber = totalPage;
        }

        let firstNumber = lastNumber - (pageCount - 1);

        if(firstNumber < 3) {
            firstNumber = 1;
            lastNumber = firstNumber + (pageCount - 1);
        }

        const next = lastNumber + 1;
        const prev = firstNumber - 1;
        const regex = /(page=[0-9]*)/gm;
        return `
            ${prev >= 1 ? `<li class="page-item"><a href="${url.replace(regex, `page=${prev}`)}">이전</a></li>` : ''}
            ${[...new Array(lastNumber - firstNumber + 1)].map((page, i) => `
                <li class="page-item ${(firstNumber + i == currentPage) ? "active" : ""}">
                    <a href="${url.replace(regex, `page=${firstNumber + i}`)}">${firstNumber + i}</a>
                </li>
            `).join('')}
            ${next <= totalPage ? `<li class="page-item"><a href="${url.replace(regex, `page=${next}`)}">다음</a></li>` : ''}
        `
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

// getData("http://localhost:3000/pagination", (data) => new PaginationAjax(document.querySelector('.pagination-ajax'), data));

