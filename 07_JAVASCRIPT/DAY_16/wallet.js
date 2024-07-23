function login(){
    let Email = document.getElementById("email").value
    let Pass = document.getElementById("pass").value

    let Emil = localStorage.getItem("emil")
    let pasw = localStorage.getItem("pass")

    if( Email && Pass){
        if(Email===Emil && Pass===pasw){
                alert("log in successfully")
        window.location.href =  'home.html'
        }
        
    else{
        alert("user not found")
    }
}

else{
    alert("please fill the Details")
}

}