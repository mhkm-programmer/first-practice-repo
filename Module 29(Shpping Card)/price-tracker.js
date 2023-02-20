function updateCaseNumber(isIncrease) {
  const caseFieldPlus = document.getElementById("case-input");
  const caseFieldValuePlus = caseFieldPlus.value;
  const previousNumberPlus = parseInt(caseFieldValuePlus);

  let newCaseNumberPlus;
  if (isIncrease === true) {
    newCaseNumberPlus = previousNumberPlus + 1;
  } else {
    newCaseNumberPlus = previousNumberPlus - 1;
  }

  if (newCaseNumberPlus < 0) {
    alert("Lowest case quantity is 1");
    return;
  }

  caseFieldPlus.value = newCaseNumberPlus;
  return newCaseNumberPlus;
}

function caseTotal(newCaseNumberPlus) {
  const casePrice = newCaseNumberPlus * 59;
  const caseDisplayPrice = document.getElementById("case-total");
  caseDisplayPrice.innerText = casePrice;
}

function setElementById(id, value) {
  const subTotalDisplay = document.getElementById(id);
  subTotalDisplay.innerText = value;
}

function calculate() {
  const phoneSubTotal = getSubTotalPrice("phone-price");
  const caseSubTotal = getSubTotalPrice("case-total");
  const currentSubTotal = phoneSubTotal + caseSubTotal;
  setElementById("sub-total", currentSubTotal);

  const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
  setElementById("tax", taxAmount);

  const finalAmount = caseSubTotal + taxAmount;
  setElementById("result", finalAmount);
}

function getSubTotalPrice(id) {
  const totalElement = document.getElementById(id).innerText;
  const totalElementPrice = parseInt(totalElement);
  return totalElementPrice;
}

// Case
document.getElementById("case-plus-btn").addEventListener("click", function () {
  const newCaseNumberPlus = updateCaseNumber(true);
  caseTotal(newCaseNumberPlus);

  calculate(); //subtotal calculation
});

document
  .getElementById("case-minus-input")
  .addEventListener("click", function () {
    const newCaseNumberPlus = updateCaseNumber(false);
    caseTotal(newCaseNumberPlus);

    calculate(); //subtotal calculation
  });

// Phone

function updatePhoneNumber(isIncrease) {
  const phoneFieldPlus = document.getElementById("phone-input");
  const phoneFieldValuePlus = phoneFieldPlus.value;
  const previousNumberPlus = parseInt(phoneFieldValuePlus);

  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousNumberPlus + 1;
  } else {
    newPhoneNumber = previousNumberPlus - 1;
  }

  if (newPhoneNumber < 0) {
    alert("Lowest case quantity is 1");
    return;
  }

  phoneFieldPlus.value = newPhoneNumber;
  return newPhoneNumber;
}

function phoneTotal(newPhoneNumber) {
  const phonePrice = newPhoneNumber * 1219;
  const phoneDisplayPrice = document.getElementById("phone-price");
  phoneDisplayPrice.innerText = phonePrice;
}

document
  .getElementById("phone-plus-btn")
  .addEventListener("click", function () {
    const newPhoneNumberPlus = updatePhoneNumber(true);
    phoneTotal(newPhoneNumberPlus);

    calculate(); //subtotal calculation
  });

document
  .getElementById("phone-minus-btn")
  .addEventListener("click", function () {
    const newPhoneNumberPlus = updatePhoneNumber(false);
    phoneTotal(newPhoneNumberPlus);

    calculate(); //subtotal calculation
  });



