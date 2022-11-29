import Component from "../../basic/Component.js";
import {getDataset} from "../../basic/utils.js";

export default class FileAjax extends Component {
     setElements() {
        this.uploadedFiles = this.$data.files || [];
        this.input = this.$element.querySelector('.file-input');

        const div = document.createElement('div');
        console.log(this.uploadedFiles)
        div.innerHTML = `
            ${this.$data.uploadUrl ? `<button type="button" class="file-btn">파일등록</button>` : ''}
            <input type="hidden" id="hidden-file">
            <ul class="uploaded-list">
                ${this.uploadedFiles?.map((data, i) => `
                    <li>
                        <a href="${data.download_url}">${this.$data.showImage && this.checkImageType(data.file_org_name) ? `<img src="${data.display_url}">${data.file_org_name}` : data.file_org_name}</a>
                        ${this.$data.uploadUrl ? `<button type="button" class="delete-file-btn" data-delete=${data.file_name} >삭제</button>` : ''}
                        <input type="hidden" name="${getDataset(this.$element, "name") || ''}" value="${data.file_name} ">
                    </li>`).join("")
                }
            </ul>
        `
        this.$element.innerHTML += div.innerHTML;
    }

    setTemplate() {
        return Array.from(this.uplodatedFiles).map((file, idx) => `
            <li>${file.file_org_name}<button type="button"  class="delete-file-btn">삭제</button></li>
        `).join('');
    }

    render() {
        this.$element.querySelector('#hidden-file').value = this.uploadedFiles.map(file => file.file_name);
        this.uplodatedFiles && (this.$element.querySelector('ul').innerHTML = this.setTemplate());
    }

    setEvents() {
        this.input?.addEventListener('change', (e) => {
            let files = e.target.files;
            // let fileArray = Array.from(files);
            //
            // const dataTransfer = new DataTransfer();

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
                const a = deleteName.querySelector('a');
                const targetFile = this.uploadedFiles.find(file => file?.file_name == getDataset(target, 'delete'));
                console.log(a, targetFile, this.uploadedFiles);
                console.log(this.uploadedFiles.find(file =>  file?.file_name == getDataset(target, 'delete')));
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
                    files = dataTransfer.files;
                    console.log(files);
                    this.input.value = '';
                    console.log(files);

//                    this.$element.querySelector('#hidden-file').value = this.uploadedFiles.map(file => file.file_name);
                    this.$element.querySelector('.uploaded-list').removeChild(target.parentElement);
                })

                // fetch(this.$data.deleteUrl + `/${targetFile.file_name}`, {
                //     method: "DELETE"
                // })
                // .then(res => res)
                // .then(data => {
                //     this.$element.querySelector('.uploaded-list').removeChild(target.parentElement);
                // })
            }
        })
    }

    async uploadedFile(file) {
        let formData = new FormData();
        formData.append(getDataset(this.$element, "name"), file);
        console.log(formData);

        try {
            const response = await fetch(this.$data.uploadUrl, {
                method: 'POST',
                headers: {'data-type': "text"},
                body: formData
            });

            const data = await response.json();
            this.uploadedFiles.push(data);
            this.$element.querySelector('#hidden-file').value = this.uploadedFiles.map(file => file.file_name);
            if(this.$data.showImage && this.checkImageType(data.file_org_name)) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${data.download_url}"><img src="${data.display_url}/">${data.file_org_name}</a><button type="button" class="delete-file-btn" data-delete={data.file_name} data-index="${file.lastModified}">삭제</button><input type="hidden" name="${getDataset(this.$element, "name") || ''}" value="${data.file_name}">`;

                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            } else {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${data.download_url}">${data.file_org_name}</a><button type="button" class="delete-file-btn" data-delete={data.file_name} data-index="${file.lastModified}">삭제</button><input type="hidden" name="${getDataset(this.$element, "name") || ''}" value="${data.file_name}">`;

                this.$element.querySelector(".uploaded-list").insertBefore(li, this.$element.querySelector(".uploaded-list").firstChild);
            }
            //this.uplodatedFiles.push(data);


        } catch (e){
            alert("error: " + e.message);
        }
    }

    getOriginalName(data) {
        return data
        // const idx = fileName.indexOf("_") + 1;
        // return fileName.substring(idx);
    }

    checkImageType(fileName) {
        const pattern = /.(jpg|gif|png|jpeg|svg)$/i;

        return pattern.test(fileName);
    }

    getThumbnailName(fileName) {
        const front = fileName.substr(0, 12);
        const end = fileName.substr(0, 12);
        return `${front}s_${end}`
    }
}
