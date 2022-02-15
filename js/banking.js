
function getInput(inputId){
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const amountValue = parseFloat(inputFieldText);
     //clear the input field
     inputField.value = '';
    return amountValue;
    
}

function updateTotallAmount(totallElementId, inputAmount){
    const totallElement = document.getElementById(totallElementId);
    const totallElementText = totallElement.innerText;
    const previousAmount = parseFloat(totallElementText);
   
    totallElement.innerText = previousAmount + inputAmount;
    
}

function currentBalance(){
    const totallBalance = document.getElementById('totall-balance');
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);
    return previousTotallBalance;
}

function updateBalance(inputAmount, isAdd){
    const totallBalance = document.getElementById('totall-balance');
   /*  const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText); */
    
    const previousTotallBalance = currentBalance();
    
    if(isAdd == true){
        totallBalance.innerText = previousTotallBalance + inputAmount;
    }
    else{
        totallBalance.innerText = previousTotallBalance - inputAmount;
    }
}


// add event handler in deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    //update deposit amount
   /*  const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(depositAmountText); */
    
   /*  const totallDeposit = document.getElementById('totall-deposit');
    const previousDepositAmountText = totallDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
   
    totallDeposit.innerText = previousDepositAmount + newdepositAmount; */

    //update totall balance
   /*  const totallBalance = document.getElementById('totall-balance');
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);

    totallBalance.innerText = previousTotallBalance + newdepositAmount; */

    const newdepositAmount = getInput('deposit-input');
    if(newdepositAmount > 0)
    {
         updateTotallAmount('totall-deposit',newdepositAmount); 
         updateBalance(newdepositAmount, true);
    }
   
})

//add event handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //update withdraw amount
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdarwInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdarwInputText); */

   /*  const withdrawTotall = document.getElementById('withdraw-totall');
    const withdrawTotallText = withdrawTotall.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotallText);

    withdrawTotall.innerText = previousWithdrawAmount + newWithdrawAmount; */
   
    //update totall balance
    /* const totallBalance = document.getElementById('totall-balance');
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);

    totallBalance.innerText = previousTotallBalance - newWithdrawAmount; */

    const newWithdrawAmount = getInput('withdraw-input');
    const previousTotallBalance = currentBalance();
    if(newWithdrawAmount > 0 && previousTotallBalance > newWithdrawAmount){
        updateTotallAmount('withdraw-totall',newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > previousTotallBalance){
        console.log('please withdraw a amount less than your balance');
    }
   
})