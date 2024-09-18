document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault();
    const numberValue = document.getElementById('number-box').value;
    const pinValue = document.getElementById('pin-box').value;
    if (numberValue.length === 11 && pinValue.length === 4) {
        window.location.href = './home.html'
    }
    else{
        alert('Wrong Phone Number or Pin')
    }
})