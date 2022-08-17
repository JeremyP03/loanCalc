window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  document.getElementById("loan-amount").value = 30000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 2.54;

}


function update() {
  calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));

}

function calculateMonthlyPayment(values) {
  let u = values.rate / 1200;
  let t = 1 - ((1 + u) ** (-1 * (values.years * 12)));
  return ((Math.round(((values.amount * u) / t) * 100)) / 100).toFixed(2);

}


function updateMonthly(monthly) {

  const domMonthlyPayment = document.getElementById("monthly-payment");

  if (isNaN(monthly)) {
    domMonthlyPayment.classList.add("error");

  } else {
      domMonthlyPayment.innerText = monthly;
    if (domMonthlyPayment.classList.contains("error")) {
      domMonthlyPayment.classList.remove("error");
    }
  }
}