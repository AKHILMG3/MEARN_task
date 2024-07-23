function regUser(){
    const username = document.getElementById("regUsername").value;
    const accountnumber = document.getElementById("regAccountnumber").value;
    const password = document.getElementsByClassName("regPassword").value;
    if (username && accountnumber && password ) {
        localStorage.setItem('regUsername',username);
        localStorage.setItem('regAccountnumber',accountnumber);
        
        
         alert('You are successfully registered');
         window.location.href = 'login.html';
    }

    else{
        alert('please fill the all details');
    }
}
