console.log("Hello, world!");

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tipAmount").innerText = "$0.00";
  document.getElementById("totalAmount").innerText = "$0.00";
}
