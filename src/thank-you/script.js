// thank-you script

if(window.addEventListener) {
  window.addEventListener('load', startTimer);
}

function startTimer() {
  let countdown = 4;
  let interval = setInterval(function() {
    document.getElementById("timer-readout").textContent = countdown.toString();
    console.log(countdown.toString());
    countdown--;
    if (countdown <= 0) {
      clearInterval(interval);
    } 
  }, 1000);

  setTimeout(() => window.location = "/#/more-info"
    , 5000);
}

