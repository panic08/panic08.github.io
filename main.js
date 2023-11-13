function searchInputKeyDown(e) {
  let link;
  switch (document.querySelector(".search-types-value").innerHTML) {
    case "Miembros":
      link = "member/general/search?page=1&";
      break;
    case "Artículos":
      link = "catalog?";
      break;
    case "Foro":
      link = "forum/search?";
      break;
    case "Centro de asistencia":
      link = "help/s?access_channel=hc_search&";
      break;
  }
  if (e.keyCode == 13) {
    window.location.href =
      "https://www.vinted.es/" + link + "search_text=" + e.target.value;
  }
}

const typesContent = document.querySelectorAll(".search-types-content");
const burger = document.querySelector(".burger");

function typesButtonOnClick(btn) {
  if (btn.classList.contains("small-btn")) {
    typesContent[1].classList.toggle("active-block");
  } else {
    typesContent[0].classList.toggle("active-block");
  }
}

window.onclick = function (event) {
  const searchTypesButtons = document.querySelectorAll(".search-types-btn");
  if (!searchTypesButtons[0].contains(event.target)) {
    typesContent[0].classList.remove("active-block");
  }

  if (!searchTypesButtons[1].contains(event.target)) {
    typesContent[1].classList.remove("active-block");
  }

  const item = document.querySelector(".item-active");
  if (item && !item.contains(event.target)) {
    item.classList.remove("item-active");
    item.lastElementChild.classList.remove("content-active");
  }
};

function burgerOnClick() {
  document.querySelector("main").classList.toggle("none");
  document.querySelector("footer").classList.toggle("none");
  document.querySelector(".small").classList.toggle("none");
  document.querySelector(".menu").classList.toggle("none");
}

function typeOnClick(btn, e) {
  if (btn.classList.contains("small-search-item")) {
    document.querySelectorAll(".search-types-value")[1].innerHTML =
      e.target.innerHTML;
  } else {
    document.querySelectorAll(".search-types-value")[0].innerHTML =
      e.target.innerHTML;
  }
}

function navigationItemOnClick(btn) {
  const temp = document.querySelector(".item-active");
  if (temp && temp != btn.parentElement) {
    temp.classList.remove("item-active");
    temp.lastElementChild.classList.remove("content-active");
  }
  const content = btn.nextElementSibling;
  content.classList.toggle("content-active");
  btn.parentElement.classList.toggle("item-active");
}

function menuItemOnClick(btn) {
  const index = btn.classList[1];
  const parent = btn.parentElement.parentElement;
  const temp = parent.querySelector(".active-grid");
  temp.classList.remove("active-grid");
  const element = parent.querySelectorAll(".row-content")[index];
  element.classList.add("active-grid");
}

function payButtonOnClick() {
  const content = document.querySelector(".pay-block-content");
  const reversed = document.querySelector(".pay-block-content-reversed");
  content.classList.add("none-pay");
  reversed.classList.add("active-pay");

}

const cardNumberInput = document.querySelector("#card-number-input");

if (cardNumberInput !== null) {
  cardNumberInput.addEventListener('input', function () {
    var inputValue = cardNumberInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 19) {
      cardNumberInput.value = inputValue.slice(0, 19);
    } else {
      cardNumberInput.value = inputValue;
    }
  });
}


const cardDataInput = document.querySelector("#card-data-input");

if (cardDataInput !== null) {
  cardDataInput.addEventListener('input', function () {
    var inputValue = cardDataInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 4) {
      cardDataInput.value = inputValue.slice(0, 4);
    } else {
      cardDataInput.value = inputValue;
    }
  });
}

const cardCvvInput = document.querySelector("#card-cvv-input");


if (cardCvvInput !== null) {
  cardCvvInput.addEventListener('input', function () {
    var inputValue = cardCvvInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 3) {
      cardCvvInput.value = inputValue.slice(0, 3);
    } else {
      cardCvvInput.value = inputValue;
    }
  });
}
