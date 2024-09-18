document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const totalBalance = document.getElementById('balance-span').innerText;
    const acNumber = document.getElementById('acount-number').value;
    const amountValue = document.getElementById('amount-add').value;
    const pinNumber = document.getElementById('pin-number').value
    let totalAmount = Number(totalBalance);

   if (acNumber.length === 11 && Number(amountValue) >=0 && pinNumber.length === 4) {
         totalAmount += Number(amountValue);
         document.getElementById('balance-span').innerText = totalAmount;
   }
    else {
       alert('Please Provide valid Acount Number or Pin or Amount')
   }
})

