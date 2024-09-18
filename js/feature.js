

document.getElementById('add-money').addEventListener('click',function(){
    const addMoneyContainer = document.getElementById('add-money-container');
    addMoneyContainer.classList.remove('hidden')
    addMoneyContainer.classList.add('flex')
    document.getElementById('cash-out-container').classList.add('hidden')
})
document.getElementById('cash-out').addEventListener('click',function(){
    const cashoutMoneyContainer = document.getElementById('cash-out-container');
    cashoutMoneyContainer.classList.remove('hidden')
    cashoutMoneyContainer.classList.add('flex')
    document.getElementById('add-money-container').classList.add('hidden')
})