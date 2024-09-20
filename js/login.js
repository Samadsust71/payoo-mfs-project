document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault();
    const numberValue = document.getElementById('number-box').value;
    const pinValue = getInputValue('pin-box');
    if (numberValue.length === 11 && pinValue === 1234) {
        window.location.href = 'home.html'
    }
    else{
        alert('Wrong Phone Number or Pin')
    }
})