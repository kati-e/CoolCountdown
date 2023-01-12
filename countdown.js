// Countdown Timer Script (+ comments for further explainations)

// Set time/date you need to countdown to here (make sure you set the GMT to the necessary timezone)
const timerEndDate = new Date("February 26, 2026 00:00:00 GMT+10:00").getTime();

// Adds "opacity" class once giveaway is over (this triggers change in styles)
function giveawayOver () {
    const countdownNumbers = document.getElementById("countdown");
    countdownNumbers.classList.add("opacity");
}

// Calculations for the time between today's date and the end date
let x = setInterval(function() {

  const todaysDate = new Date().getTime();
  const distanceBetweenDates = timerEndDate - todaysDate;
  const dots = " : ";
  
  let sec = Math.floor((distanceBetweenDates / 1000) % 60);
  let min = Math.floor((distanceBetweenDates / 1000 / 60) % 60);
  let hr = Math.floor((distanceBetweenDates / (1000 * 60 * 60)) % 24);
  let day = Math.floor(distanceBetweenDates / (1000 * 60 * 60 * 24));
  let year = 0;

  // Ensuring the day value (if over 365) shows as the remaining days outside of the year sum
  if (day > 365) {
    year = Math.floor(day / 365);
    day = day % 365;
  }

  // Makes the numbers all 2-digits (eg. '1' would become '01', but '12' would remain '12')
  day = day < 10 ? '0' + day.toString() : day;
  hr = hr < 10 ? '0' + hr.toString() : hr;
  min = min < 10 ? '0' + min.toString() : min;
  sec = sec < 10 ? '0' + sec.toString() : sec;

  // Displays the timer within the countdown element as a string ('dots' was declared above as ' : ')
  document.getElementById("countdown").innerHTML = year + dots + day + dots + hr + dots + min + dots + sec;
    
  // Ending condition when countdown is over
  if (distanceBetweenDates < 0) {
    clearInterval(x); // This stops the numbers from going into the negatives
    
    // Displays 00s in place of the numbers of the timer to show the countdown is over
    document.getElementById("countdown").innerHTML = "00 : 00 : 00 : 00";

    // Displays a special message once the countdown is over
    document.getElementById("over").innerHTML = "Congratulations! The countdown is over!";

    // Calling the function that applies the "opacity" class and makes it take on new styles
    giveawayOver(); 
  }
}, 1000); //Runs every 1000ms - equivalent to 1 second - (just like a normal clock would do)