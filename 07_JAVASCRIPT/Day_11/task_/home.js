
function navigateTologout(){
    window.location.href = 'index.html'
}

let balance = 0;

function DepositAmount() {
    const amount = document.getElementById('depositamount').value;
    const password = document.getElementById('depositpassword').value;
    if(amount && password){
        balance += +amount;
        alert('Amount successfully added');
        document.getElementById('BALANCE').innerHTML = 'Your Account Balance: rs' +balance;
    }
    else{
        alert('Please enter Amount & Password ')
    }
}    

function WithdrawAmount() {
    const amount = document.getElementById('Withdrawpassword').value;
    const password = document.getElementById('withdrawpassword').value;

    if(amount && password){
        if(amount<= balance){
            balance -= +amount;
            alert('Amount suessfully withdraw');
            document.getElementById('BALANCE').innerHTML ='Your Account balance: rs'+balance;
        }
        else{
            alert('Insufficient balance');
        }
    }
        else{
            alert('please enter an amount and password')
        }
    
}   

document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("userName");
    document.getElementById("welcomeuser").innerHTML = `Welcome ${userName ? userName : ''}`;
});

