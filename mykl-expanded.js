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

// import './extended-component/match/subject/subject.css';
// import './extended-component/match/schoolnmajor/schoolnmajor.css';
// import './extended-component/match/job/job.css';
// import './extended-component/match/certificate/certificate.css';

import DutyList from "./extended-component/ability/DutyList.js";
import AbilityList from "./extended-component/ability/AbilityList.js";
import AbilityCommon from "./extended-component/ability/AbilityCommon.js";
import PoolAccordion from "./extended-component/ability/PoolAccordion.js";

let MYKLExpanded = {
    MajorSlide: function (url, el) {
        return getData(url, (data) => new MajorSlide(el, data));
    },
    JobSlide: function(selector, data) {
        return new JobSlide(document.querySelector(selector), data)
    },
    ExpertSlide: function(selector, data) {
        return new ExpertSlide(document.querySelector(selector), data)
    },
    EducationSlide: function(selector, data) {
        return new EducationSlide(document.querySelector(selector), data)
    },
    CertificateSlide: function(selector, data) {
        return new CertificateSlide(document.querySelector(selector), data)
    },
    // 진단하기
    DutyList: function(selector, data) {
        return new DutyList(document.querySelector(selector), data)
    },
    AbilityList: function(selector, data) {
        return new AbilityList(document.querySelector(selector), data)
    },
    AbilityCommon: function (selector, data) {
        return new AbilityCommon(document.querySelector(selector), data)
    },
    PoolAccordion: function (selector, data) {
        return new PoolAccordion(document.querySelector(selector), data)
    },
    // 맞춤 추천?
    MatchSubject: function(selector, data) {
        return new MatchSubject(document.querySelector(selector), data)
    },
    MatchSchool: function(selector, data) {
        return new School(document.querySelector(selector), data)
    },
    MatchJob: function(selector, data) {
        return new Job(document.querySelector(selector), data)
    },
    MatchCertificate: function(selector, data) {
        return new Certificate(document.querySelector(selector), data)
    }
}

window.MYKL = {...window.MYKL, ...MYKLExpanded};