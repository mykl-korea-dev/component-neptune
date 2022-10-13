// import ImageSlide from "./component-set/imageSlide/ImageSlide.js";
import MajorSlide from "./extended-component/slideitem/major/major.js";
import JobSlide from "./extended-component/slideitem/job/job.js";
import ExpertSlide from "./extended-component/slideitem/expert/expert.js";
import EducationSlide from "./extended-component/slideitem/education/education.js";
import CertificateSlide from "./extended-component/slideitem/certificate/certificate.js";
import {getData} from "./basic/utils.js";

let MYKL = {
    MajorSlide: function (url, id) {
        getData(url, (data) =>
            new MajorSlide(document.querySelector(`#${id}`), data)
        );
    },
    JobSlide: function(url, id) {
        getData(url, (data) =>
            new JobSlide(document.querySelector(`#${id}`), data)
        );
    },
    ExpertSlide: function(url, id) {
        getData(url, (data) =>
            new ExpertSlide(document.querySelector(`#${id}`), data)
        );
    },
    EducationSlide: function(url, id) {
        getData(url, (data) =>
            new EducationSlide(document.querySelector(`#${id}`), data)
        );
    },
    CertificateSlide: function(url, id) {
        getData(url, (data) =>
            new CertificateSlide(document.querySelector(`#${id}`), data)
        );
    },
}

window.MYKL = {...window.MYKL, ...MYKL};