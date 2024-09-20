
document.getElementById('cash-out-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number-cash-out').value;
    const amountValue = getInputValue('amount-withdrawn');
    const pinNumber = getInputValue('cash-out-pin-number');
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && amountValue >=0 && pinNumber === 1234 && Number(amountValue) <= totalAmount) {
         totalAmount -= amountValue;
         document.getElementById('balance-span').innerText = totalAmount.toFixed(2);
   }
    else {
       alert('Please Provide valid Account Number or Pin or Amount')
   }
   transectionHistory('samad',acNumber,amountValue);
})

document.getElementById('cash-out').addEventListener('click',function(){
    showSection('cash-out-container');
})