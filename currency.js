// script.js
const api = "https://api.exchangerate-api.com/v4/latest/USD";

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const finalValue = document.querySelector(".finalValue");
  const finalAmount = document.getElementById("finalAmount");

  if (amount === "" || fromCurrency === "" || toCurrency === "") {
    alert("Please fill in all fields.");
    return;
  }

  finalValue.textContent = "Converting...";
  fetch(api)
    .then(response => response.json())
    .then(data => {
      const fromRate = data.rates[fromCurrency];
      const toRate = data.rates[toCurrency];
      const convertedAmount = ((toRate / fromRate) * amount).toFixed(2);
      finalValue.textContent = `${convertedAmount}`;
      finalAmount.classList.remove("hidden");
    })
    .catch(error => {
      console.error("Error fetching the exchange rates:", error);
    });
}

function resetForm() {
  document.getElementById("amount").value = "";
  document.getElementById("fromCurrency").value = "";
  document.getElementById("toCurrency").value = "";
  document.querySelector(".finalValue").textContent = "";
  document.getElementById("finalAmount").classList.add("hidden");
}
