import Component from "../../../basic/Component.js";
import {getData} from "../../../basic/utils.js";
import ImageSlide from "../../../component-set/imageSlide/ImageSlide.js";

export default class Major extends Component {
    setTemplate() {
        console.log('education');
        return this.$data.map(data => `
            <li class="slide-item item-group">
                ${data.image ? `<img src="${data.image}" alt="">` : ""}
                <div>
                ${data.title ? `<span class="title">${data.title}</span>` : ""}
                ${data.link ? `<a href="${data.link}">학과정보</a>` : ""}
                </div>                
                <div>
                    ${data.after ? `<span>졸업 후 진출분야</span>` : ""}
                    ${data.after ? `<ul>${data.after.map(data => `<li>${data}</li>`).join("")}</ul>`: ""}
                </div>
            </li>
        `).join("");
    }

    render() {
        this.$element.querySelector('.slider-group').innerHTML = this.setTemplate();
    }

    // 방법1
    setEvents() {
        this.$element.querySelector('.prev').addEventListener('click', () => {
            fetch("http://localhost:3000/imageSlide")
                .then(response => response.json())
                .then(data => {
                    this.$data = data.certificate;
                    this.render();
                });

        })

        this.$element.querySelector('.next').addEventListener('click', () => {
            fetch("http://localhost:3000/imageSlide")
                .then(response => response.json())
                .then(data => {
                    this.$data = data.major;
                    this.render();
                });

        })
    }
}

// getData("http://localhost:3000/imageSlide", (data) => {
//     console.log(data);
//     new Major(document.querySelector('#major'), data.major);
//     // new ImageSlide(document.querySelector( '.image-slide'));
// });

// 방법2
// document.querySelector('#major .prev').addEventListener('click', () => {
//     getData("http://localhost:3000/imageSlide", (data) => {
//         new Major(document.querySelector('#major'), data.certificate);
//     })
// })