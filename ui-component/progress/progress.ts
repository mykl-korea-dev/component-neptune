const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');

const {min, max, value} = (progress as HTMLElement).dataset;
(progress as HTMLElement).style.width = `${(parseInt(max!, 10)-parseInt(min!, 10)) * 5}px`;
(progressBar as HTMLElement).style.width = `${parseInt(value!, 10) / (parseInt(max!, 10)-parseInt(min!, 10))* 100}%`;



