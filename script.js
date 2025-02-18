let bill = document.getElementById("bill");
let tip = 1;
let customTip = document.getElementById("customTip");
let people = document.getElementById("people");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let buttons = document.querySelectorAll(".tipButton");

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

customTip.addEventListener("input", function () {
  setTip();
});

function setTip(tip) {
  tip = customTip.value;
  console.log(tip);
  calculateTotal();
}

function calculateTotal() {
  if (people.value > 0) {
    totalAmount.innerText =
      "$ " + ((bill.value * (1 + tip / 100)) / people.value).toFixed(2);
    tipAmount.innerText =
      "$ " + ((bill.value * tip) / 100 / people.value).toFixed(2);
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
}
