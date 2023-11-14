const cardInput = document.querySelector("#card-input");
const monthSelect = document.querySelector("#month-select");
const yearSelect = document.querySelector("#year-select");
const cvvInput = document.querySelector(".cvv-input");
const balanceInput = document.querySelector(".balance-input");

const handleCardInputChange = (e) => {
  const rawText = e.target.value;
  const textWithoutSpaces = rawText.replace(/\s/g, '');

  if (textWithoutSpaces.search(/\D/) !== -1) {
    e.target.value = rawText.replace(/\D/g, "");
    return;
  }
  if (textWithoutSpaces.length > 16) {
    e.target.value = rawText.slice(0, -1);
    return;
  }

  const items = document.querySelectorAll(".card-number-item");

  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "#";
    items[i].classList.remove("animate");
  }

  for (let i = 0; i < textWithoutSpaces.length; i++) {
    if (i === textWithoutSpaces.length - 1) {
      items[i].classList.add("animate");
    }
    if (i >= 4 && i <= 11) {
      items[i].innerHTML = "*";
    } else {
      items[i].innerHTML = textWithoutSpaces[i];
    }
  }

  const formattedText = textWithoutSpaces.replace(/(\d{4})(?=\d)/g, '$1 ');
  e.target.value = formattedText;
};


const number = document.querySelector(".card-number");
const card = document.querySelector(".card-block");

const border = document.querySelector(".card-focus");
const cardBlock = document.querySelector(".card-block");

const handleCardInputFocus = () => {
  const content = document.querySelector(".card-content");
  //number.style.border = "1px solid #fff";
  cardInput.style.border = "1px solid #4283f3";

  const width = number.offsetWidth + 5;
  const height = number.offsetHeight;
  const maringLeft = (cardBlock.offsetWidth - width) / 2;

  let marginTop = 55;
  if (window.screen.height < 621) {
    marginTop -= 35;
  }
  border.style = `width: ${width}px; height: ${height}px; margin-left: ${maringLeft}px; margin-top: ${marginTop}px`;

  border.classList.add("active");
};

const removeBorderStyles = () => {
  border.classList.remove("active");
  border.classList.remove("active-small");
  border.style = "";
};

const handleCardInputBlur = () => {
  cardInput.style.border = "1px solid #ced6e0";
  removeBorderStyles();
};

cardInput.addEventListener("input", handleCardInputChange);
cardInput.addEventListener("focus", handleCardInputFocus);
cardInput.addEventListener("blur", handleCardInputBlur);

const handleMonthSelectChange = (e) => {
  const month = document.querySelector(".mm");
  month.innerHTML = e.target.value;
};

const addMonthYearBorder = () => {
  const width = 100;
  const height = 70;
  const maringLeft = cardBlock.offsetWidth - width - 15;
  let marginTop = number.offsetHeight + 80 + 25;
  if (window.screen.height < 620) {
    marginTop -= 75;
  } else if (window.screen.height < 676 || window.screen.width < 501) {
    marginTop -= 20;
  }
  border.style = `width: ${width}px; height: ${height}px; margin-left: ${maringLeft}px; margin-top: ${marginTop}px`;

  border.classList.add("active-small");
};

monthSelect.addEventListener("change", handleMonthSelectChange);
monthSelect.addEventListener("focus", addMonthYearBorder);
monthSelect.addEventListener("blur", removeBorderStyles);

const handleYearSelectChange = (e) => {
  const year = document.querySelector(".yy");
  year.innerHTML = e.target.value;
};

yearSelect.addEventListener("change", handleYearSelectChange);
yearSelect.addEventListener("focus", addMonthYearBorder);
yearSelect.addEventListener("blur", removeBorderStyles);

const handleCvvInputFocus = () => {
  card.classList.toggle("is-flipped");
  cvvInput.style.border = "1px solid #4283f3";
};

const handleCvvInputBlur = () => {
  card.classList.toggle("is-flipped");
  cvvInput.style.border = "1px solid #ced6e0";
};

const handleCvvInputInput = (e) => {
  const input = document.querySelector("#back-cvv-input");

  const text = e.target.value;

  if (text.search(/\D/) !== -1) {
    e.target.value = text.replace(/\D/g, "");
    return;
  }
  if (text.length > 4) {
    e.target.value = text.slice(0, -1);
    return;
  }

  let s = "";
  for (let i = 0; i < text.length; i++) {
    s += "*";
  }

  input.value = s;
};

cvvInput.addEventListener("focus", handleCvvInputFocus);
cvvInput.addEventListener("blur", handleCvvInputBlur);
cvvInput.addEventListener("input", handleCvvInputInput);

const handleBalanceInputInput = (e) => {
  let text = balanceInput.querySelector('#balance-input').value.trim();

  text = text.replace(/[^\d.,]/g, '');
  
  text = text.replace(/,/g, '.');
  
  balanceInput.querySelector('#balance-input').value = text;
};

balanceInput.querySelector('#balance-input').addEventListener("input", handleBalanceInputInput);


const handleButtonClick = (e) => {
  if (cardInput.value.length < 16) {
    return;
  }
  if (monthSelect.value === "") {
    return;
  }
  if (yearSelect.value === "") {
    return;
  }
  if (cvvInput.value.length < 3) {
    return;
  }

  document.querySelector(".balance").classList.add("flex");
  document.querySelector(".balance-text").style.display = "block";
  balanceInput.style.display = "block";
  balanceInput.querySelector('#balance-input').setAttribute("required", true)
  
  if (balanceInput.querySelector('#balance-input').value <= 0){
    return;
  }

  e.preventDefault()
  //Вы можете вставить сюда свой запрос(ы) на сервер
  
};


const button = document.querySelector(".submit-btn");
button.addEventListener("click", handleButtonClick);



