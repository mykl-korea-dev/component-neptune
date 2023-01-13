// import ImageSlide from "./component-set/imageSlide/ImageSlide.js";
import MajorSlide from "./extended-component/slideitem/major/major.js";
import JobSlide from "./extended-component/slideitem/job/job.js";
import ExpertSlide from "./extended-component/slideitem/expert/expert.js";
import EducationSlide from "./extended-component/slideitem/education/education.js";
import CertificateSlide from "./extended-component/slideitem/certificate/certificate.js";
import {getData} from "./basic/utils.js";
import Job from "./extended-component/match/job/Job.js";
import Certificate from "./extended-component/match/certificate/Certificate.js";

// import './extended-component/match/subject/subject.css';
// import './extended-component/match/schoolnmajor/schoolnmajor.css';
// import './extended-component/match/job/job.css';
// import './extended-component/match/certificate/certificate.css';

import DutyList from "./extended-component/ability/DutyList.js";
import AbilityCommon from "./extended-component/ability/AbilityCommon.js";
import PoolAccordion from "./extended-component/ability/PoolAccordion.js";
import AbilityDuty from "./extended-component/ability/AbilityDuty.js";
import {Count} from "./extended-component/ability/Count.js";
import Doughnut from "./extended-component/ability/Doughnut.js";
import AbilityList from "./extended-component/ability/AbilityList.js";
import AbilityTab from "./extended-component/ability/AbilityTab.js";
import Filter from "./extended-component/ability/Filter.js";
import RadarChart from "./extended-component/ability/RadarChart.js";
import BarChart from "./extended-component/ability/BarChart.js";
import AbilityResult from "./extended-component/ability/AbilityResult.js";
import ResultContent from "./extended-component/ability/ResultContent.js";
import AbilityImprovement from "./extended-component/ability/AbilityImprovement.js";
import Major from "./extended-component/match/schoolnmajor/SchoolnMajor.js";
import Subject from "./extended-component/match/subject/Subject.js";
import AbilityResultInfo from "./extended-component/match/AbilityResultInfo.js";
import Expert from "./extended-component/match/Expert.js";

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
    AbilityDuty: function (selector, data) {
        return new AbilityDuty(document.querySelector(selector), data)
    },
    AbilityTab: function (selector, data) {
        return new AbilityTab(document.querySelector(selector), data)
    },
    PoolAccordion: function (selector, data) {
        return new PoolAccordion(document.querySelector(selector), data)
    },
    Count: function(selector, data) {
        return new Count(document.querySelector(selector), data)
    },
    DoughnutChart: function (selector, data) {
        return new Doughnut(document.querySelector(selector), {titlePrefix: "", titleSuffix: "", labelPrefix: "", labelSuffix: "", ...data})
    },
    Filter: function (selector, data) {
        return new Filter(document.querySelector(selector), data)
    },
    RadarChart: function (selector, data) {
        return new RadarChart(document.querySelector(selector), data)
    },
    BarChart: function (selector, data) {
        return new BarChart(document.querySelector(selector), data)
    },
    AbilityResult: function (selector, data) {
        return new AbilityResult(document.querySelector(selector), data)
    },
    ResultContent: function (selector, data) {
        return new ResultContent(document.querySelector(selector), data)
    },
    AbilityImprovement: function (selector, data) {
        return new AbilityImprovement(document.querySelector(selector), data)
    },
    // 맞춤 추천?
    SubjectInfo: function(selector, data) {
        return new Subject(document.querySelector(selector), data)
    },
    MajorInfo: function(selector, data) {
        return new Major(document.querySelector(selector), data)
    },
    JobInfo: function(selector, data) {
        return new Job(document.querySelector(selector), data)
    },
    CertificateInfo: function(selector, data) {
        return new Certificate(document.querySelector(selector), data)
    },
    ExpertInfo: function(selector, data) {
        return new Expert(document.querySelector(selector), data)
    },
    AbilityResultInfo: function(selector, data) {
        return new AbilityResultInfo(document.querySelector(selector), data)
    }
}

window.MYKL = {...window.MYKL, ...MYKLExpanded};