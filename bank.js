// handle diposit button even

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get amount of diposit
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);

    /*update Deposit total*/
    const depositTotal = document.getElementById("total-deposit");
    const depositTotalText = depositTotal.innerText;
    const prevDipositAmount = parseFloat(depositTotalText);
    // calculate
    const newDepositTotal = prevDipositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    /* update account balance */

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear
    depositInput.value = "";
  });

//   Handle withdraw even handlebar

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //   get withdraw
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // console.log(prevWithdrawAmount);
    // set withdraw total

    const withdrawTotal = document.getElementById("total-withdraw");
    const withdrawTotalText = withdrawTotal.innerText;
    const prevwithdrawTotal = parseFloat(withdrawTotalText);
    const newWithdrawTotal = prevwithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update main balance
    const totalBalanceInput = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceInput.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = totalBalance - withdrawAmount;
    totalBalanceInput.innerText = newTotalBalance;

    withdrawInput.value = "";
  });
