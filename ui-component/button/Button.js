import Component from "../../basic/Component.js";
import errorMessage from "../../basic/Error";
export default class Button extends Component {
    // setElements() {
    // }

    setEvents() {
        this.$element.addEventListener('click', (e) => {
            this.click(e);
        })
    }

    click(e) {
    }
    toggle(selector) {
        this.$element.classList.toggle(selector);
    }

    remove(selector) {
        this.$element.classList.remove(selector);
    }

    add(selector) {
        this.$element.classList.add(selector);
    }

    submit({
       url="",
       method = "GET",
       headers = {},
       type = "json",
       body = null,
       callback = (data) => {},
    }={}) {
        if(!url) {
            errorMessage({
                message: "missing Url",
                component: "ButtonAjax",
                element: this.$element.id
            });
            return;
        }
        this.$element.addEventListener('click', async () => {
            // ajax 관련
            const res = await fetch(url, {
                method,
                headers,
                body
            });
            const data = type === "json" ? await res.json() : await res.text();
            callback(data);
        })
    }
}

