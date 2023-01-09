import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class FileAjax extends Component {
    setElements() {
        this.$element.classList.add("mykl-file");
        this.uploadedFiles = this.$data.files || [];
        this.input = this.$element.querySelector('.file-input');
        this.name = this.input.getAttribute('name');
        this.input.removeAttribute('name');

        const div = document.createElement('div');

        div.innerHTML = `
            ${this.$data.uploadUrl ? `<button type="button" class="file-btn">파일등록</button>` : ''}
            <ul class="uploaded-list">
                ${this.uploadedFiles?.map((data, i) => `
                    <li>
                        <a href="${data.download_url}">${this.$data.showImage && this.checkImageType(data.file_org_name) ? `<img src="${data.display_url}">${data.file_org_name}` : data.file_org_name}</a>
                        ${this.$data.uploadUrl ? `<button type="button" class="delete-file-btn" data-delete=${data.file_name} >삭제</button>` : ''}
                        <input type="hidden" name="${this.name}" value="${data.file_name} ">
                    </li>`).join("")
        }
            </ul>
        `
        this.$element.innerHTML += div.innerHTML;
    }

    setEvents() {
        this.input?.addEventListener('change', (e) => {
            let files = e.target.files;

            for(let i = 0; i < files.length; i++) {
                this.uploadedFile(files[i]);
            }
        })

        this.$element.addEventListener('click', (e) => {
            const { target } = e;
            if(target.classList.contains('file-btn')) {
                this.input?.click();
            }
            if(target.classList.contains('delete-file-btn')) {
                const deleteName = e.composedPath().find(el => el.tagName === "LI");
                const targetFile = this.uploadedFiles.find(file => file?.file_name == getDataset(target, 'delete'));
                fetch(targetFile.delete_url, {
                    method: "DELETE"
                })
                    .then(res => res)
                    .then(data => {
                        const dataTransfer = new DataTransfer();
                        this.uploadedFiles.filter(file => file?.file_name != getDataset(target, 'delete'));
                        let files = this.input.files;

                        Array.from(files)
                            .filter(file => file.lastModified != getDataset(target, "index"))
                            .forEach(file => {
                                dataTransfer.items.add(file);
                            });

                        this.input.value = '';
                        this.$element.querySelector('.uploaded-list').removeChild(target.parentElement);
                    })

            }
        })
    }

    async uploadedFile(file) {
        let formData = new FormData();
        formData.append(this.name, file);

        try {
            const response = await fetch(this.$data.uploadUrl, {
                method: 'POST',
                headers: {'data-type': "text"},
                body: formData
            });

            const data = await response.json();
            this.uploadedFiles.push(data);
            if(this.$data.showImage && this.checkImageType(data.file_org_name)) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${data.download_url}"><img src="${data.display_url}/">${data.file_org_name}</a><button type="button" class="delete-file-btn" data-delete={data.file_name} data-index="${file.lastModified}">삭제</button><input type="hidden" name="${this.name}" value="${data.file_name}">`;

                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            } else {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${data.download_url}">${data.file_org_name}</a><button type="button" class="delete-file-btn" data-delete={data.file_name} data-index="${file.lastModified}">삭제</button><input type="hidden" name="${this.name}" value="${data.file_name}">`;

                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            }
        } catch (e){
            alert("error: " + e.message);
        }
    }

    checkImageType(fileName) {
        const pattern = /.(jpg|gif|png|jpeg|svg)$/i;

        return pattern.test(fileName.trim());
    }
}
