const errorContainer = document.querySelector(".error-popup-container")

const errorContent = document.querySelector(".error-popup-content")
const closer = document.querySelector(".error-popup-content-closer")
const button = document.querySelector(".continuar")

const handleButtonClick = (event) => {
  event.stopPropagation();
  errorContainer.style.display = "block";
};

const handleCloserClick = () => {
  errorContainer.style.display = "none";
};

const handleClickOutside = (event) => {
  if (!errorContent.contains(event.target) && event.target !== button) {
    errorContainer.style.display = "none";
  }
};

const handleEscKeyPress = (event) => {
  if (event.key === "Escape") {
    errorContainer.style.display = "none";
  }
};


closer.addEventListener("click", handleCloserClick);  

button.addEventListener("click", handleButtonClick);  

document.addEventListener("click", handleClickOutside);

document.addEventListener("keydown", handleEscKeyPress);

const TIME_LIMIT = 300;

let timePassed = 0;
let timeLeft = TIME_LIMIT;

function formatTimeLeft(time) {
  // Наибольшее целое число меньше или равно результату деления времени на 60.
  const minutes = Math.floor(time / 60);

  // Секунды – это остаток деления времени на 60 (оператор модуля)
  let seconds = time % 60;

  // Если значение секунд меньше 10, тогда отображаем его с 0 впереди
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
    // Количество времени, которое прошло, увеличивается на  1
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    // Обновляем метку оставшегося времени
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

// Обновляем значение свойства dasharray, начиная с 283
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

startTimer();
