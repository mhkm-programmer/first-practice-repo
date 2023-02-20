
// Define deposit handler

    //Step 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDepositField = document.getElementById('input-deposit-field');
    const newDepositAmountString = inputDepositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    
    inputDepositField.value = '';  //clear existing input field

    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid number.')    //input validation
        
        return
    }

   //Step 2
    
    const displayDepositAmount = document.getElementById('deposit-total');
    const displayDepositAmountString = displayDepositAmount.innerText;
    const previousDepositAmount = parseFloat(displayDepositAmountString);
    
    if(newDepositAmount < 0){
        alert('Please enter a positive amount');   // input negative amount validation
        return
    }

    //Step 3 (Deposit Amount Calculations)

    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    displayDepositAmount.innerText = currentDepositAmount; 
    
    //Step 4 (Withdrawal Amount display & Calculations)

    const displayBalanceAmount = document.getElementById('balance-total');
    const displayBalanceAmountString = displayBalanceAmount.innerText;
    const previousBalanceAmount = parseFloat(displayBalanceAmountString);

    //Step 5
    const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
    displayBalanceAmount.innerText = currentBalanceAmount;

});


 //Step 1
document.getElementById('btn-withdrawal').addEventListener('click', function() {
    const inputWithdrawAmount = document.getElementById('input-withdrawal-field');
    const newWithdrawAmountStr = inputWithdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountStr);


    inputWithdrawAmount.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert("Please enter a valid amount")
        return 
    }

    //Step 2

    const displayWithdrawAmount = document.getElementById('withdraw-total');
    const displayWithdrawAmountStr = displayWithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(displayWithdrawAmountStr);

    //Step 3
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    displayWithdrawAmount.innerText = currentWithdrawAmount;

    //Step 4

    const displayBalanceAmount = document.getElementById('balance-total');
    const displayBalanceAmountString = displayBalanceAmount.innerText;
    const previousBalanceAmount = parseFloat(displayBalanceAmountString);

    if(newWithdrawAmount > previousBalanceAmount){
        alert('Insufficient funds');
        return
    } else if(newWithdrawAmount < 0){
        alert('Please provide a positive amount')
    }

    //Step 5
    const currentBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    displayBalanceAmount.innerText = currentBalanceAmount;


});

