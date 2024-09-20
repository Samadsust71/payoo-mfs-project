
document.getElementById('transfer-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number-transfer-money').value;
    const amountValue = getInputValue('amount-transfer');
    const pinNumber = getInputValue('transfer-money-pin-number');
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && amountValue >=0 && pinNumber === 1234 && Number(amountValue) <= totalAmount) {
         totalAmount -= amountValue;
         document.getElementById('balance-span').innerText = totalAmount.toFixed(2);
   }
    else {
       alert('Please Provide valid Account Number or Pin or Amount')
   }
   transectionHistory('samad',acNumber,amountValue);
});

document.getElementById('transfer-money').addEventListener('click',function(){
    showSection('transfer-money-container');
})