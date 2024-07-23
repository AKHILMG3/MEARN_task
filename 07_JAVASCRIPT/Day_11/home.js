
function login(){
        var username = document.getElementById("uname").value
        console.log(username);
        localStorage.setItem("USERNAME",username)
        
        //redirect login page
        window.location="./login.html"

        
}
