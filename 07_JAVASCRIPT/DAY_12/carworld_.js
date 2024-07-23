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
    if(key1.value==""){
        alert("Enter the key")
    }
    let keys = key1.value
    if(keys in localStorage){
        let Details = JSON.parse(localStorage.getItem(keys))

        result.innerHTML=`brand:${Details.BRAND}
        price:${Details.PRICE}
        `
    }
    else{
        result.innerHTML="Details not found"
    }
}

function remove(){
    localStorage.clear()
    alert("Details Clear")
}
