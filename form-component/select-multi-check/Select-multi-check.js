import Component from "../../basic/Component.js";

export default class SelectMultiCheck extends Component {
  setElements() {
    this.list = [];

    [...this.$element.querySelectorAll("select")].map((el) => {
      this.list.push({
        id: el.id,
        option: el.options,
        value: el.value,
        name: el.name,
      });
    });
  }

  selectClickEvent(optionDom) {
    // TODO : 옵션 선택시 컨테이너에 인풋 넣기
    const checkDom = optionDom.querySelector("input");

    if (checkDom.checked) {
      checkDom.checked = false;
    } else {
      checkDom.checked = true;
    }
  }

  setOptionsTemplate(triggerElement) {
    [...this.$element.querySelectorAll(".select-trigger")]
      .filter((dom) => dom.id !== triggerElement.id)
      .map((el) => el.classList.remove("on"));

    const selectOptionsDom = this.$element.querySelector(".select-options");
    if (triggerElement.classList.contains("on")) {
      triggerElement.classList.remove("on");
      selectOptionsDom.style.display = "none";
    } else {
      triggerElement.classList.add("on");
      selectOptionsDom.style.display = "";
    }

    const select = this.list.find((el) => el.id === triggerElement.id);
    selectOptionsDom.innerHTML = `
            ${[...select.option]
              .map(
                (option) =>
                  `
                    <div class="option-container">
                        <input type="checkbox" class="mykl-check" id="${option.value}" name="${select.name}" value="${option.value}">
                        <label for="${option.value}">${option.innerText}</label>
                    </div>
                `
              )
              .join("")}
        `;

    return [...this.$element.querySelectorAll(".option-container")].map(
      (option) => (option.onclick = (e) => this.selectClickEvent(e.target))
    );
  }

  setEvents() {
    return [...this.$element.querySelectorAll(".select-trigger")].map(
      (trigger) => (trigger.onclick = (e) => this.setOptionsTemplate(e.target))
    );
  }

  setTemplate(element) {
    return `
            <div class="select-multi-container">
                ${element
                  .map(
                    (selectItem) => `
                    <div class="select-trigger" id="${selectItem.id}">${selectItem.name}</div>
                `
                  )
                  .join("")}
                <div class="select-options" style="display: none"></div>
            </div>
        `;
  }

  render() {
    return (this.$element.innerHTML = this.setTemplate(this.list));
  }
}
