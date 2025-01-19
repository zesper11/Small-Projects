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

let giveawayDate = new Date(2025,4,24,10,3,0);
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
}

getRemainingTime()
