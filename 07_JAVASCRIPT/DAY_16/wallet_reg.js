function signin(){
    let username = document.getElementById("uname").value
    let usermail = document.getElementById("umail").value
    let userpass = document.getElementById("upass").value

    if(username && usermail && userpass){
        localStorage.setItem("uname",username)
        localStorage.setItem("umail",usermail)
        localStorage.setItem("upass",userpass)
        window.location.href ='wallet.html'
    }
    else{
        alert("please fill the Details")
    }
    
}