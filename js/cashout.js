
document.getElementById('cash-out-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number-cash-out').value;
    const amountValue = document.getElementById('amount-withdrawn').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && Number(amountValue) >=0 && pinNumber.length === 4 && Number(amountValue) <= totalAmount) {
         totalAmount -= Number(amountValue);
         document.getElementById('balance-span').innerText = totalAmount.toFixed(3);
   }
    else {
       alert('Please Provide valid Account Number or Pin or Amount')
   }
})