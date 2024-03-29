import MajorSlide from "./extended-component/slideitem/major/major.js";
import JobSlide from "./extended-component/slideitem/job/job.js";
import ExpertSlide from "./extended-component/slideitem/expert/expert.js";
import EducationSlide from "./extended-component/slideitem/education/education.js";
import CertificateSlide from "./extended-component/slideitem/certificate/certificate.js";
import Job from "./extended-component/match/Job.js";
import Certificate from "./extended-component/match/Certificate.js";

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

import Major from "./extended-component/match/SchoolnMajor.js";
import Subject from "./extended-component/match/Subject.js";
import AbilityResultInfo from "./extended-component/match/AbilityResultInfo.js";
import Expert from "./extended-component/match/Expert.js";
import StateProcessGroup from "./extended-component/mypage/StateProcess/StateProcess.js";

import './extended-component/mypage/StateProcess/stateProcess.css';
import ImageSlideAjax from "./component-set/ajax/imageSlideAjax/ImageSlideAjax.js";

const returnComponent = (component, initData) => {
    return (selector, data) => {
        if(!MYKL[selector]) {
            MYKL[selector] = new component(document.querySelector(selector), initData ? {...initData, ...data} : data);
        } else {
            MYKL[selector].setData(data);
        }
        return MYKL[selector]
    };
}

let MYKLExpanded = {
    ImageSlideAjax: function (selector, data) {
        return new ImageSlideAjax(document.querySelector(selector), data)
    },
    MajorSlide: () => {
        return (el, data) => new MajorSlide(el, data)
    },
    JobSlide: () => {
        return (el, data) => new JobSlide(el, data)
    },
    ExpertSlide: () => {
        return (el, data) => new ExpertSlide(el, data)
    },
    EducationSlide: () => {
        return (el, data) => new EducationSlide(el, data)
    },
    CertificateSlide: () => {
        return (el, data) => new CertificateSlide(el, data)
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
    DoughnutChart: returnComponent(Doughnut,{titlePrefix: "", titleSuffix: "", labelPrefix: "", labelSuffix: ""}),
    //     function (selector, data) {
    //     return new Doughnut(document.querySelector(selector), {titlePrefix: "", titleSuffix: "", labelPrefix: "", labelSuffix: "", ...data})
    // },
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
    MajorInfo: returnComponent(Major),
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
    },
//    MyPage
    StateProcessGroup: function(selector, data) {
        return new StateProcessGroup(document.querySelector(selector), data)
    }
}

window.MYKL = {...window.MYKL, ...MYKLExpanded};