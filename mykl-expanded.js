// import ImageSlide from "./component-set/imageSlide/ImageSlide.js";
import MajorSlide from "./extended-component/slideitem/major/major.js";
import JobSlide from "./extended-component/slideitem/job/job.js";
import ExpertSlide from "./extended-component/slideitem/expert/expert.js";
import EducationSlide from "./extended-component/slideitem/education/education.js";
import CertificateSlide from "./extended-component/slideitem/certificate/certificate.js";
import {getData} from "./basic/utils.js";
import MatchSubject from "./extended-component/match/subject/Subject.js";
import School from "./extended-component/match/schoolnmajor/SchoolnMajor.js";
import Job from "./extended-component/match/job/Job.js";
import Certificate from "./extended-component/match/certificate/Certificate.js";

import './extended-component/match/subject/subject.css';
import './extended-component/match/schoolnmajor/schoolnmajor.css';
import './extended-component/match/job/job.css';
import './extended-component/match/certificate/certificate.css';

let MYKLExpanded = {
    MajorSlide: function (url, el) {
        return getData(url, (data) => new MajorSlide(el, data));
    },
    JobSlide: function(url, el) {
        return getData(url, (data) =>
            new JobSlide(el, data)
        );
    },
    ExpertSlide: function(url, el) {
        return getData(url, (data) =>
            new ExpertSlide(el, data)
        );
    },
    EducationSlide: function(url, el) {
        return getData(url, (data) =>
            new EducationSlide(el, data)
        );
    },
    CertificateSlide: function(url, el) {
        return getData(url, (data) =>
            new CertificateSlide(el, data)
        );
    },
    MatchSubject: function(url, el) {
        return getData(url, (data) =>
            new MatchSubject(el, data)
        );
    },
    MatchSchool: function(url, el) {
        return getData(url, (data) =>
            new School(el, data)
        );
    },
    MatchJob: function(url, el) {
        return getData(url, (data) =>
            new Job(el, data)
        )
    },
    MatchCertificate: function(url, el) {
        return getData(url, (data) =>
            new Certificate(el, data)
        )
    }
}

window.MYKL = {...window.MYKL, ...MYKLExpanded};