import Component from "../../basic/Component.js";

export default class Expert extends Component {
    setTemplate() {
        return this.$data.map(data => `
            <li class="mykl-media">
                <div class="media-cover">
                    <img src="${data.image_url}" alt="${data.image_alt}">
                </div>
                <div class="media-body">
                    <div>
                        <p class="title">${data.user_duty}</p>
                        <p>${data.user_affiliation}</p>
                        <p>${data.user_position}</p>
                        <p>${data.user_name}</p>
                    </div>
                </div>
            </li>
        `).join('');
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}
