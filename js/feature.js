

// document.getElementById('add-money').addEventListener('click',function(){
//     const addMoneyContainer = document.getElementById('add-money-container');
//     addMoneyContainer.classList.remove('hidden')
//     addMoneyContainer.classList.add('flex')
//     document.getElementById('cash-out-container').classList.add('hidden')
// })
// document.getElementById('cash-out').addEventListener('click',function(){
//     const cashoutMoneyContainer = document.getElementById('cash-out-container');
//     cashoutMoneyContainer.classList.remove('hidden')
//     cashoutMoneyContainer.classList.add('flex')
//     document.getElementById('add-money-container').classList.add('hidden')
// })

function showSection(id) {
   
        document.getElementById('cash-out-container').classList.add('hidden');
        document.getElementById('add-money-container').classList.add('hidden');
        document.getElementById('transfer-money-container').classList.add('hidden');
        document.getElementById('get-bonus-container').classList.add('hidden');
        document.getElementById('pay-bill-container').classList.add('hidden');
        document.getElementById('transection-history-container').classList.add('hidden');
       
        document.getElementById(id).classList.remove('hidden')
        document.getElementById(id).classList.add('flex')
        
};

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
};

function transectionHistory(to,acNumber,amount){
         const div = document.createElement('div');

         div.innerHTML = `
         
              <div class="mt-4 space-y-4">
              <div class="collapse border-2">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div class="collapse-title text-xl font-medium"><p>To: ${to}</p>
                  <p> From Ac Number: ${acNumber}</p>
                 </div>
                <div class="collapse-content">
                  <p>Amount:${amount}</p>
                </div>
              </div>
             </div>
         
         `
         document.getElementById('transection-details-container').appendChild(div);
};