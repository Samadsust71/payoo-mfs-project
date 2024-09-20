document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number').value;
    const amountValue = getInputValue('amount-add');
    const pinNumber = getInputValue('pin-number');
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && amountValue >=0 && pinNumber === 1234) {
         totalAmount += amountValue;
         document.getElementById('balance-span').innerText = totalAmount.toFixed(2);
   }
    else {
       alert('Please Provide valid Account Number or Pin or Amount')
   }
   transectionHistory('samad',acNumber,amountValue);
})

document.getElementById('add-money').addEventListener('click',function(){
    showSection('add-money-container');
})

