import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";

export default class PaginationAjax extends Component {
    setTemplate() {
        const url = window.location.href.replace(/&page=.*/, '');
        const { totalCount, start, end, prev, next, displayPageNum, currentPage } = this.$data;
        return `
            <li class="page-item><a href="${url}&page="${prev ? currentPage - 1 : 1}">이전</li>
            ${[...new Array(end - start)].map((page, i) => `
                <li class="page-item ${(start + i == currentPage) ? "active" : ""}">
                    <a href="${url}&page=${page + i}">${start + i}</a>
                </li>
            `).join('')}
            <li class="page-item><a href="${url}&page="${next ? currentPage + 1 : currentPage}">다음</li>            
        `
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}

getData("http://localhost:3000/pagination", (data) => new PaginationAjax(document.querySelector('.pagination-ajax'), data));

