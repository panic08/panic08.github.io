const input = document.querySelector("#input");

const handleClick = () => {
  if (input.value === "") {
    input.style.border = "1px solid red";

    document.querySelector(".campo").style.display = "inline-block";
  }
};

input.addEventListener("input", function () {
  const inputValue = input.value;
  const filteredValue = inputValue.replace(/[^0-9.,/]/g, "");

  if (inputValue !== filteredValue) {
    input.value = filteredValue;
  }


  if (input.value.length >= 1) {
    input.style.border = "none";

    document.querySelector(".campo").style.display = "none";
  }

});

const TIME_LIMIT = 300;

let timePassed = 0;
let timeLeft = TIME_LIMIT;

function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // Вывод в формате MM:SS
  return `${minutes}:${seconds}`;
}

let timerInterval = null;

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    document.querySelector(".timer-value").innerHTML = formatTimeLeft(timeLeft);

    setCircleDasharray();

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

const FULL_DASH_ARRAY = 283;

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

startTimer();
