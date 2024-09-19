function login(){
    const userName = document.getElementById('loginuser').value;
    const passWord = document.getElementById('loginpass').value;

    if (userName && passWord) {
        localStorage.setItem('Username', userName);
        localStorage.setItem('Password', passWord);

        alert('You are sucessfully login');
        window.location.href = 'home.html';
    }
    else{
        alert('please fill all details');
    }
}