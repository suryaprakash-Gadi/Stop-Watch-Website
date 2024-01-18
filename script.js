let timerInterval;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function toggleTimer() {
  const startStopButton = document.getElementById("startStop");

  if (isRunning) {
    stopTimer(startStopButton);
  } else {
    startTimer(startStopButton);
  }

  isRunning = !isRunning;
}

function startTimer(button) {
  timerInterval = setInterval(updateDisplay, 1000);
  updateButtonText(button, "Stop");
  button.style.backgroundColor = "#e53935"; // Change to red
  document.getElementById("displaycolor").style.backgroundColor="black";
  document.getElementById("timecolor").style.color="#ffffff";
}

function stopTimer(button) {
  clearInterval(timerInterval);
  updateButtonText(button, "Start");
  button.style.backgroundColor = "#4caf50"; // Reset to green
  document.getElementById("displaycolor").style.backgroundColor="white";
  document.getElementById("timecolor").style.color="#333";


 

}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();

  const startStopButton = document.getElementById("startStop");
  updateButtonText(startStopButton, "Start");
  startStopButton.style.backgroundColor = "#4caf50"; // Reset to green
  document.getElementById("displaycolor").style.backgroundColor="#ffffff";
  document.getElementById("timecolor").style.color="#333"


  
}

function updateDisplay() {
  const displayElement = document.querySelector(".display");
  displayElement.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  seconds = (seconds + 1) % 60;
  if (seconds === 0) {
    minutes = (minutes + 1) % 60;
    if (minutes === 0) {
      hours = (hours + 1) % 24;
    }
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateButtonText(button, text) {
  button.innerHTML = text;
}
