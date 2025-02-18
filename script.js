let bill = document.getElementById("bill");
let tip = 100;
let customTip = document.getElementById("customTip");
let people = document.getElementById("people");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let buttons = document.querySelectorAll(".tipButton");
let error = document.getElementById("error");

bill.addEventListener("input", function () {
  calculateTotal();
});

people.addEventListener("input", function () {
  calculateTotal();
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    tip = button.value;
    calculateTotal();
  });
});

function setTip(customTipValue) {
  tip = parseInt(customTipValue);

  if (customTipValue) {
    let labels = document.querySelectorAll('label[for^="tip"]');
    labels.forEach((label) => {
      label.classList.remove("bg-strong-cyan", "text-cyan-900");
    });
    let radios = document.querySelectorAll('input[name="tip"]');
    radios.forEach((radio) => {
      radio.checked = false;
    });
    calculateTotal();
  } else {
    tip = 0;
    calculateTotal();
  }
}

function calculateTotal() {
  if (people.value > 0 && bill.value > 0) {
    totalAmount.innerText =
      "$ " + ((bill.value * (1 + tip / 100)) / people.value).toFixed(2);
    tipAmount.innerText =
      "$ " + ((bill.value * tip) / 100 / people.value).toFixed(2);
    people.classList.remove("border-red-500");
    people.classList.add("border-cyan-500");
    error.innerText = "";
  } else if (people.value <= 0) {
    people.classList.add("border-red-500");
    people.classList.remove("border-cyan-500");
    error.innerText = "Can't be zero";
  } else {
    totalAmount.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
}

function reset() {
  bill.value = "";
  customTip.value = "";
  people.value = "";
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  tip = 1;
  let labels = document.querySelectorAll('label[for^="tip"]');
  labels.forEach((label) => {
    label.classList.remove("bg-strong-cyan", "text-cyan-900");
  });
  let radios = document.querySelectorAll('input[name="tip"]');
  radios.forEach((radio) => {
    radio.checked = false;
  });
}
