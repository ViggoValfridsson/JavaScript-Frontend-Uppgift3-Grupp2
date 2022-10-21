"use strict";

let buttonStartStop = document.querySelector("#btn-start-stop");
let buttonReset = document.querySelector("#btn-reset");
let time = 0;
let intervalTimer;

buttonStartStop.addEventListener("click", () => {
  if (buttonStartStop.getAttribute("id") == "btn-start-stop") {
    buttonStartStop.setAttribute("id", "btn-pause");
    document.querySelector("#pause-icon").classList.remove("hidden");
    document.querySelector("#start-icon").classList.add("hidden");
    intervalTimer = setInterval(startTimer, 1000);
  } else {
    buttonStartStop.setAttribute("id", "btn-start-stop");
    document.querySelector("#pause-icon").classList.add("hidden");
    document.querySelector("#start-icon").classList.remove("hidden");
    clearInterval(intervalTimer);
  }
});

buttonReset.addEventListener("click", () => {
  buttonStartStop.setAttribute("id", "btn-start-stop");
  document.querySelector("#pause-icon").classList.add("hidden");
  document.querySelector("#start-icon").classList.remove("hidden");
  clearInterval(intervalTimer);
  document.querySelector("#timer").innerHTML = "00:00:00";

  time = 0;
});

function startTimer() {
  time++;

  let hour = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor((time % 3600) % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10 && minutes > 0) {
    minutes = "0" + minutes;
  } else {
    minutes = "00";
  }

  if (hour < 10 && hour > 0) {
    hour = "0" + hour;
  } else {
    hour = "00";
  }

  document.querySelector("#timer").innerHTML = hour + ":" + minutes + ":" + seconds;
}
