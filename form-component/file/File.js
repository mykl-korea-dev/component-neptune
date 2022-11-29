import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class File extends Component {
    setElements() {
        this.uploadedFiles = [];
        this.input = this.$element.querySelector('.file-input');
        this.input.setAttribute('name', getDataset(this.$element, "name") || '')
        this.$element.innerHTML += `
            <button type="button" class="file-btn">파일등록</button>
            <ul class="uploaded-list">
            </ul>
        `;
    }

    setTemplate() {
        return super.setTemplate();
    }

    render() {
        super.render();
    }

    setEvents() {
        this.input?.addEventListener('change', (e) => {
            let files = e.target.files;

            for(let i = 0; i < files.length; i++) {
                this.uploadedFile(files[i], e);
                console.log(files[i])
            }
        })

        this.$element.addEventListener('click', (e) => {
            const { target } = e;
            if(target.classList.contains('file-btn')) {
                this.input?.click();
            }
            if(target.classList.contains('delete-file-btn')) {
                const deleteName = e.composedPath().find(el => el.tagName === "LI");
                const a = deleteName.querySelector('a');
                const targetFile = this.uploadedFiles.find(file => file?.name == a.textContent);
            }
        })
    }

    uploadedFile(file) {
        this.uploadedFiles.push(file);
        if(this.$data.showImage && this.checkImageType(file.name)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${e.target.result}"><img src="${e.target.result}">${file.name}</a><button type="button" class="delete-file-btn" data-index="${file.lastModified}">삭제</button><input type="hidden" name="attachment" value="${file.name}">`;

                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            }

        } else {
            const reader = new FileReader();
            console.log(reader)
            reader.onload = (e) => {
                console.log(e.target)
                const li = document.createElement('li');
                li.innerHTML = `<a href="${e.target.result}">${file.name}</a><button type="button" class="delete-file-btn" data-index="${file.lastModified}">삭제</button><input type="hidden" name="attachment" value="${e.target.result}">`;
                const a = document.createElement('a');
                a.textContent = "다운로드"
                a.href = file.name;
                li.insertBefore(a, li.firstChild);
                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            }
            reader.readAsDataURL(file)
        }
    }

    checkImageType(fileName) {
        const pattern = /.(jpg|gif|png|jpeg|svg)$/i;

        return pattern.test(fileName);
    }
}