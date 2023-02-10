import Component from "../../../basic/Component.js";
/*            1. 컴포넌트 수 : 열의 개수
                2. 모양 선택 : 원 / 차트
                3. 제목 입력
                4. 상태 입력 => 아이콘
                5. 상태에 따라 버튼입력 / 내용입력
*/

export class StateProcessItem extends Component {
    setTemplate() {
        const { type, name, state, tooltip, link } = this.$data;
        return `
            <div class="state-process-${type}">
                <span class="state-process-name">${name}</span>
                <div class="mykl-tooltip">
                    <span class="tooltip-icon">
                        <img src="${state ? '../../../images/tool_tip_icon2.png' : '../../../images/tool_tip_icon1.png'}">
                    </span>
                    ${tooltip ? `<div class="tooltip-content">${tooltip}</div>` : ""}
                </div>
            </div>
            ${link ? `<a href="${link.url}" class="mykl-btn btn-primary-rev">&gt; ${link.text || link.url}</a>` : ""}
        `
    }

    render() {
        const div = document.createElement('div');
        div.classList.add("state-process-item");
        div.innerHTML = this.setTemplate();
        this.$element.appendChild(div);
        const parentPosInfo = this.$element.parentElement.getBoundingClientRect();
        const itemPosInfo = div.firstElementChild.getBoundingClientRect();
        this.$data.arrowGroup && this.$data.arrowGroup.setData({height: parentPosInfo.height});
        this.$data.addArrow && this.$data.addArrow({parentPosInfo, itemPosInfo});
    }
}
export class StateProcess extends Component {
    render() {
        this.element = document.createElement('div');
        this.element.classList.add("mykl-state-process");
        this.$element.appendChild(this.element);
    }

    addItem(data) {
        new StateProcessItem(this.element, {parent: this.$element, ...this.$data, ...data});
    }
}

export default class StateProcessGroup extends Component {
    setElements() {
        this.$element.classList.add("state-process-group");
    }

    addItem() {
        if(this.$element.childElementCount >= 1) {
            const arrowGroup = new StateArrowGroup(this.$element);
            this.addArrow = arrowGroup.addItem();
            return new StateProcess(this.$element, {addArrow: this.addArrow, arrowGroup});
        };
        return new StateProcess(this.$element);
    }
}

export class StateArrow extends Component {
    setTemplate() {
        const { parentPosInfo, itemPosInfo, prevStateEl } = this.$data;
        const rightYpos = itemPosInfo.top - parentPosInfo.top  + itemPosInfo.height / 2;
        return [...prevStateEl.querySelectorAll('.state-process-item')].map((el) => {
            const leftPos = el.firstElementChild.getBoundingClientRect();
            const leftYpos = leftPos.top - parentPosInfo.top + leftPos.height / 2;
            return `
                <svg width="100" height="${parentPosInfo.height}">
                    <defs>
                        <marker id="Triangle" viewBox="0 0 10 10" refX="1" refY="5"
                            markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M 0 0 L 10 5 L 0 10 z" />
                        </marker>
                    </defs>
                    <polyline points="0,${leftYpos}
                                ${Math.abs(leftYpos - rightYpos) <= 50 ? 90 : 95 }, ${Math.abs(leftYpos - rightYpos) <= 50 ? rightYpos :(rightYpos > leftYpos ? rightYpos - (itemPosInfo.height / 5 * 2) : rightYpos + 10)}" fill="none" stroke="black" 
                    stroke-width="2" marker-end="url(#Triangle)" />
                </svg>
            `
        }).join("");

    }
    render() {
        this.$element.innerHTML += this.setTemplate();
    }
}

export class StateArrowGroup extends Component {
    setTemplate() {
        return `
            <svg width="100" height="300"></svg>
        `
    }

    render() {
        if(this.element) {
            this.svgEl.setAttribute("height", this.$data.height || 100);
            return;
        }
        this.element = document.createElement("div");
        this.element.classList.add("state-process-arrow");
        this.element.innerHTML = this.setTemplate();
        this.svgEl = this.element.querySelector('svg');
        this.$element.appendChild(this.element);
    }

    addItem() {
        const prevStateEl = this.element.previousElementSibling;
        return (args) => new StateArrow(this.svgEl, {...args, prevStateEl});
    }
}