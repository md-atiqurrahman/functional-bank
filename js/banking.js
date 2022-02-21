
function getInput(inputId){
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const amountValue = parseFloat(inputFieldText);
     //clear the input field
     inputField.value = '';
    return amountValue;
    
}

function getInnerTextValue(spanId){
    const totallBalance = document.getElementById(spanId);
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);
    return previousTotallBalance;
}

function updateTotallAmount(totallElementId, inputAmount){
    const previousAmount = getInnerTextValue(totallElementId);
    document.getElementById(totallElementId).innerText = previousAmount + inputAmount;
    
}

function updateBalance(inputAmount, isAdd){
    const totallBalance = document.getElementById('totall-balance'); 
    const previousTotallBalance = getInnerTextValue('totall-balance');
    
    if(isAdd == true){
        totallBalance.innerText = previousTotallBalance + inputAmount;
    }
    else{
        totallBalance.innerText = previousTotallBalance - inputAmount;
    }
}


// add event handler in deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    const newdepositAmount = getInput('deposit-input');
    if(newdepositAmount > 0)
    {
         updateTotallAmount('totall-deposit',newdepositAmount); 
         updateBalance(newdepositAmount, true);
    }
   
})

//add event handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawAmount = getInput('withdraw-input');
    const previousTotallBalance = getInnerTextValue('totall-balance');
    if(newWithdrawAmount > 0 && previousTotallBalance >= newWithdrawAmount){
        updateTotallAmount('withdraw-totall',newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > previousTotallBalance){
        console.log('please withdraw a amount less than your balance');
    }
   
})