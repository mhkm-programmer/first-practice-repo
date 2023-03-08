"use strict";

var calculateExpense = function calculateExpense() {
  var income = document.querySelector("#income").value;
  var food = document.querySelector("#food").value;
  var rent = document.querySelector("#rent").value;
  var clothes = document.querySelector("#clothes").value;

  if (income < 0 || income == "" || food < 0 || food == "" || rent < 0 || rent == "" || clothes < 0 || clothes == "") {
    alert("Inputs must be positive numbers");
    return;
  } // calculate expense


  var expense = parseInt(food) + parseInt(rent) + parseInt(clothes); // calculate balance

  var balance = parseInt(income) - expense; //   validate income

  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

var calculateSavings = function calculateSavings() {
  var income = document.querySelector("#income").value; // calculate saving amount

  var savePercentage = document.getElementById("save").value; //   Validate saving percentage value

  if (savePercentage < 0) {
    alert("Provide positive saving value");
    return;
  }

  var savingAmount = savePercentage / 100 * income; // calculate remaining balance

  var balance = document.getElementById("balance").innerText;
  var remainingBalance = balance - savingAmount; //   validate saving amount

  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.querySelector(".remaining-balance").innerText = remainingBalance;
  }
};