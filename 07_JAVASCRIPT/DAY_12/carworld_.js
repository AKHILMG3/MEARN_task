function store(){
    const details ={
        BRAND : brand.value,
        PRICE : price.value,
        KEY : key.value
    }
    if(details.BRAND=="" || details.PRICE=="" || details.KEY==""){
        alert("fill the all details")
    }
    else{
        if(details.KEY in localStorage){
            alert("details already exists")
        }
    
    else{
        localStorage.setItem(details.KEY ,JSON.stringify(details))
        alert("Details add Secessfully")

    }}
}

function retrieve(){
    if(retri.value==""){
        alert("Enter the key")
    }
    let key = retri.value
    if(key in localStorage){
        let Details = JSON.parse(localStorage.getItem(key))

        result.innerHTML=`brand:${Details.BRAND} <br>
        price:${Details.PRICE}
        `
    }
    else{
        result.innerHTML="Details not found"
    }
}

function remove(){
    let key1 = keys.value
    if(key1 in localStorage){
        localStorage.removeItem("key1")
        result1.innerHTML = " Delect Records"
    }
    else{
        result1.innerHTML = " Details not found"
    }
}
 function clearAll(){
    localStorage.clear()
    alert("Clear the Details")
 }
