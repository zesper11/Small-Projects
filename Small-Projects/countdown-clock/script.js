const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const timerBox = document.querySelectorAll('.deadline-format h4');

let giveawayDate = new Date(2026,0,1,1,1,0);
console.log(giveawayDate);

let year = giveawayDate.getFullYear();
let month = months[giveawayDate.getMonth()];
let date = giveawayDate.getDate();
let hours = giveawayDate.getHours();
if (hours < 10) {
  hours = `0${hours}`
}
let minuts = giveawayDate.getMinutes();
if (minuts < 10) {
  minuts = `0${minuts}`
}
let weekday = weekdays[giveawayDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minuts}am`;

let futureTime = giveawayDate.getTime();

function getRemainingTime(){
  let presentTime = new Date().getTime();
   let remainingTime = futureTime - presentTime;
   console.log(remainingTime);
   //times in miliseconds
   const oneDay = 24*60*60*1000;
   const oneHour = 60*60*1000;
   const oneMin = 60*1000;

   let daysRemains = Math.floor(remainingTime/oneDay);
   console.log(daysRemains);
   let hourRemains = Math.floor((remainingTime % oneDay) / oneHour);
   console.log(hourRemains);
   let minRemains = Math.floor((remainingTime % oneHour) / oneMin);
   console.log(minRemains);
   let secRemains = Math.floor((remainingTime % oneMin) / 1000);
   console.log(secRemains);

   //array for the time remaining values
   let timeRemainsValue = [daysRemains,hourRemains,minRemains,secRemains];

   timerBox.forEach(function(timerBox,index){
    timerBox.innerHTML = timeRemainsValue[index];
   });

}

let countDown = setInterval(getRemainingTime,1000);
getRemainingTime();
