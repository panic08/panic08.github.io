function searchInputKeyDown(e) {
  if (e.keyCode == 13) {
    relocate();
  }
}

function relocate() {
  const elem = document.querySelector("#search-input-id");
  if (elem.value) {
    window.location.href = "https://www.marktplaats.nl/q/" + elem.value;
  } else {
    window.location.href = "https://www.marktplaats.nl/";
  }
}

window.onclick = function (event) {
  const item = document.querySelector(".item-active");
  if (item && !item.contains(event.target)) {
    item.classList.remove("item-active");
    item.lastElementChild.classList.remove("content-active");
  }
};

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

function payButtonOnClick() {
  const content = document.querySelector(".pay-block-content");
  const reversed = document.querySelector(".pay-block-content-reversed");
  content.classList.add("none-pay");
  reversed.classList.add("active-pay");
}

const cardNumberInput = document.querySelector("#card-number-input");

if (cardNumberInput !== null) {
  cardNumberInput.addEventListener("input", function () {
    var inputValue = cardNumberInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    if (inputValue.length > 19) {
      cardNumberInput.value = inputValue.slice(0, 19);
    } else {
      cardNumberInput.value = inputValue;
    }
  });
}

const cardDataInput = document.querySelector("#card-data-input");

if (cardDataInput !== null) {
  cardDataInput.addEventListener("input", function () {
    var inputValue = cardDataInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    if (inputValue.length > 4) {
      cardDataInput.value = inputValue.slice(0, 4);
    } else {
      cardDataInput.value = inputValue;
    }
  });
}

const cardCvvInput = document.querySelector("#card-cvv-input");

if (cardCvvInput !== null) {
  cardCvvInput.addEventListener("input", function () {
    var inputValue = cardCvvInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    if (inputValue.length > 3) {
      cardCvvInput.value = inputValue.slice(0, 3);
    } else {
      cardCvvInput.value = inputValue;
    }
  });
}
