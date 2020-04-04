const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hour) + (minutes/12)}deg)`;
    mn.style.transform = `rotateZ(${minutes}deg)`;
    mn.style.transform = `rotateZ(${seconds}deg)`;


})


