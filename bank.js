// get input value

function getInputValue(inputId) {
  // debugger;
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("total-balance");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("total-balance");
  /*
   const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText); */
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// update input value
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get and update deposit amount
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("total-deposit", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //   get withdraw

    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      updateTotalField("total-withdraw", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
      console.log(
        "You can not withdraw more than what you have in your account"
      );
    }
  });
