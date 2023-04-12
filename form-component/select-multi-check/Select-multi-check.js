import Component from "../../basic/Component.js";

export default class SelectMultiCheck extends Component {
  setElements() {
    this.list = [];
    this.selectDom = document.querySelectorAll("select");
    [...this.selectDom].map((el) => {
      this.list.push({
        id: el.id,
        option: el.options,
        value: el.value,
        name: el.name,
      });
    });
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

  setOptionsTemplate(triggerElement) {
    const resetDom = document.querySelectorAll(".select-trigger");
    [...resetDom]
      .filter((dom) => dom.id !== triggerElement.id)
      .map((el) => el.classList.remove("on"));

    const select = this.list.find((el) => el.id === triggerElement.id);
    const selectOptionsDom = document.querySelector(".select-options");

    if (triggerElement.classList.contains("on")) {
      triggerElement.classList.remove("on");
      selectOptionsDom.style.display = "none";
    } else {
      triggerElement.classList.add("on");
      selectOptionsDom.style.display = "";
    }

    const template = `
            ${[...select.option]
              .map(
                (option) =>
                  `
                    <div>
                        <input type="checkbox" class="mykl-check" id="${option.value}" name="${select.name}" value="${option.value}">
                        <label for="${option.value}">${option.innerText}</label>
                    </div>
                `
              )
              .join("")}
        `;

    selectOptionsDom.innerHTML = template;
  }

  setEvents() {
    const triggers = this.$element.querySelectorAll(".select-trigger");
    [...triggers].map(
      (trigger) => (trigger.onclick = (e) => this.setOptionsTemplate(e.target))
    );

    const check = this.$element.querySelectorAll(".mykl-check");
    [...check].map(
      (el) =>
        (el.onchange = (e) => {
          console.log(e.target);
        })
    );
  }

  render() {
    this.$element.innerHTML = this.setTemplate(this.list);
  }
}
