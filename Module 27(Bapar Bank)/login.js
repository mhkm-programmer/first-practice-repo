// Define login and password fields

// Step 1 => add click handler to login form
document.getElementById("btn-submit").addEventListener("click", function () {
  //Step 2 => add click handler to email form
  const emailField = document.getElementById("e-mail").value;
  // const email = emailField.value;

  // Step 3 => add click handler to password
  const passwordField = document.getElementById("e-password").value;
  // const password = passwordField.value;
  // console.log(emailField, passwordField);

  //Step 4 => add click handler to verify email address and password

  if (emailField === "mhkm@gmail.com" && passwordField === "12345") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Username and Password");
  }
});

// Define Deposit and Withdraw fields


//Define deposit fields
//step 1: define add event handlers deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step 2: define add event handlers input field for deposit amount
  const inputDesposit = document.getElementById("input-deposit-field");
  //step 3: define add event handlers input field for deposit amount value
  const newInputDespositAmountString = inputDesposit.value;
  const newInputDespositAmount = parseFloat(newInputDespositAmountString);

  inputDesposit.value = "";

  if (isNaN(newInputDespositAmount)) {
    alert("Please enter a valid number");
    return;
  }

  //step 4: define add event handlers deposit amount display section
  const depositTotal = document.getElementById("deposit-total");
  //step 5: define add event handlers deposit amount display section inner text
  const previousDepositTotalAmountString = depositTotal.innerText;
  const previousDepositTotalAmount = parseFloat(
    previousDepositTotalAmountString
  );

  // calculation total amount display
  const currentDepositAmount =
    newInputDespositAmount + previousDepositTotalAmount;
  // Step 6: convert input amount to text in display for deposit amount

  depositTotal.innerText = currentDepositAmount;

  // Balance total amount
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Balance total amount calculation between new deposit and previous deposit
  const currentBalanceTotal = previousBalanceTotal + newInputDespositAmount;
  balanceTotal.innerText = currentBalanceTotal;
  // input amount clear when deposit amount displayed
});


// Withdraw Section start here

//Define withdraw fields
//step 1:
document
  .getElementById("btn-withdrawal")
  .addEventListener("click", function () {
    //step 2:
    const withdrawField = document.getElementById("input-withdrawal-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
      alert("Please enter a valid number");
      return;
    }

    //step 3

    const withdrawAmount = document.getElementById("withdraw-total");
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // Balance total amount
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
      alert("Insufficient funds");
      return;
    }

    //step 4

    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    withdrawAmount.innerText = currentWithdrawAmount;

    // Balance total amount calculation between new withdraw and previous balance total
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;
  });
