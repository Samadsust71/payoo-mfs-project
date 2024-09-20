
document.getElementById('pay-bill').addEventListener('click',function(){
    showSection('pay-bill-container');
});

document.getElementById('pay-bill-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number-pay-bill').value;
    const amountValue = getInputValue('amount-pay-bill');
    const pinNumber = getInputValue('pay-bill-pin-number');
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && amountValue >=0 && pinNumber === 1234 && Number(amountValue) <= totalAmount) {
         totalAmount -= amountValue;
         document.getElementById('balance-span').innerText = totalAmount.toFixed(2);
   }
    else {
       alert('Please Provide valid Account Number or Pin or Amount')
   }
   transectionHistory('Samad',acNumber,amountValue);
})