import Component from "../../../basic/Component.js";

export default class MediaAjax extends Component {
    setTemplate() {
        const {data, options = {}} = this.$data;
        const { image, title, content, link, class: className } = options;
        return data.map(v => `
            <div class="mykl-media">
                <div class="media-cover">
                    <img src="${v[image["url"]]}" alt="${v[image["alt"]]}">
                </div>
                <div class="media-body">
                    <div class="media-title">
                        ${title.map(key =>
            link[key] ? `<a href="${v[link[key]["variable"]]}"><span>${v[key]}</span></a>`: `<span>${v[key]}</span>`
        ).join("")
        }
                    </div>
                    <div class="media-content">
                        ${content.map(key =>
            link[key] ? `<a href="${v[link[key]["variable"]]}"><span>${v[key]}</span></a>`: `<span>${v[key]}</span>`
        ).join("")}                    
                    </div>
                </div>
            </div>
        `).join('')
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}