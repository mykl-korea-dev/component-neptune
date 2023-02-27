import Component from "../../../basic/Component.js";

// 열마다 스타일 지정
// th, td 지정
// 인덱스 => true / false - ooo
// 클래스 네임 => 상태관리(조건, t, f) - 콜백? / 지정
// 해당 열 내용 => 상태관리(조건, t, f) - 콜백? / 지정 /
// 링크 입력 => pathname + /variable(생략가능)
//   순번         날짜     상태 (열)

export default class TableAjax extends Component {
    setTemplate() {
        this.$element.classList.add("mykl-table");
        const options = {
            index: {use: false, indexStart: 1, head: false, ...this.$data.options.index || {} },
            colOrder: [...this.$data.options.colOrder],
            link: {...this.$data.options.link || {}},
            class: {...this.$data.options.class || {}},
        }
        const { data } = this.$data;
        const { index, colOrder, link: links, class: className } = options;
        return data.map((v, i) => `
            <tr>
                ${index.use ? index.head ? `<th>${index.indexStart + i}</th>` : `<td>${index.indexStart + i}</td>`: ""}
                ${colOrder.map(key => {
                    const classType = className[key];
                    let style;
                    if(classType) {
                        if(typeof classType === "function") {
                            style = classType(v[key]);
                            style = Array.isArray(style) ? style.join(" ") : style;
                        } else if(Array.isArray(classType)) {
                            style = classType.join(" ");
                        } else if(typeof classType === "string") {
                            style = classType;
                        } 
                    } else {
                        style = "";
                    }
                    
                    const linkType = links[key];
                    let link;
                    if(linkType) {
                        if(typeof linkType === "function") {
                            link = linkType(v);
                            // link = Array.isArray(link) ? link.join(" ") : link;
                        } else if(typeof linkType === "string") {
                            link = linkType;
                        } else {
                            link = (linkType["pathname"] || "") + (linkType["variable"] ? "/" + v[linkType["variable"]] : "");
                        }
                    } else {
                        link = "";
                    }

                    return `
                        <td class="${style}">
                            ${links[key] ? `<a href="${link}">${v[key]}</a>` : v[key]}
                        </td>
                    `})
                .join("")}
            </tr>
        `).join("");
    }

    render() {
        this.$element.querySelector('tbody').innerHTML = this.setTemplate();
    }
}