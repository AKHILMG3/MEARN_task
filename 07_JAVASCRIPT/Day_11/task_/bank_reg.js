function regUser(){
    var username = document.getElementById("regUsername").value;
    var accountnumber = document.getElementById("regAccountnumber").value;
    var password = document.getElementById("regPassword").value;
    if (username && accountnumber && password ) {
        localStorage.setItem('regUsername',username);
        localStorage.setItem('regAccountnumber',accountnumber);
        localStorage.setItem('regPassword',password);
        
         alert('You are successfully registered');
         window.location.href = 'login.html';
    }

    else{
        alert('please fill the all details');
    }
}
