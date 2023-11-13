const input = document.querySelector("#input");

const handleClick = () => {
  if (input.value === "") {
    input.style.border = "1px solid red";

    document.querySelector(".campo").style.display = "inline-block";
  }
};

input.addEventListener("input", function () {
  // const inputValue = input.value;
  // const filteredValue = inputValue.replace(/[^0-9.,/]/g, "");

  // if (inputValue !== filteredValue) {
  //   input.value = filteredValue;
  // }


  if (input.value.length >= 1) {
    input.style.border = "none";

    document.querySelector(".campo").style.display = "none";
  }

});
