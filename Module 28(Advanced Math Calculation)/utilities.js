function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const newInputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return newInputFieldValue;
}

function getDisplayElementValueById(displayElementId) {
  const displayElement = document.getElementById(displayElementId);
  const displayElementValueString = displayElement.innerText;
  const displayElementValue = parseFloat(displayElementValueString);
  return displayElementValue;
}

function setDisplayElementById(displayElementId, displayElementValue) {
  const displayElement = document.getElementById(displayElementId);
  displayElement.innerText = displayElementValue;
}

//Deposit Part
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("input-deposit-field");
  const previousDepositAmount = getDisplayElementValueById("deposit-total");

  if (isNaN(newDepositAmount)) {
    alert("Please enter a valid number.");
    return;
  }

  const currentDepositAmount = previousDepositAmount + newDepositAmount;

  setDisplayElementById("deposit-total", currentDepositAmount);

  const previousBalanceAmount = getDisplayElementValueById("balance-total");

  if (newDepositAmount < 0) {
    alert("Please enter a positive number");
  }

  const newBalanceAmount = newDepositAmount + previousBalanceAmount;
  setDisplayElementById("balance-total", newBalanceAmount);
});

// Withdraw Part

document
  .getElementById("btn-withdrawal")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldValueById("input-withdrawal-field");
    const previousWithdrawAmount = getDisplayElementValueById("withdraw-total");

    if (isNaN(newWithdrawAmount)) {
      alert("Please enter a valid number.");
      return;
    }

    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    setDisplayElementById("withdraw-total", currentWithdrawAmount);

    const previousBalanceAmount = getDisplayElementValueById("balance-total");

    if (newWithdrawAmount < 0) {
      alert("Please enter a positive number");
    } else if (newWithdrawAmount > previousBalanceAmount) {
      alert("Insufficient funds");
      return;
    }

    const newBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    setDisplayElementById("balance-total", newBalanceAmount);
  });
