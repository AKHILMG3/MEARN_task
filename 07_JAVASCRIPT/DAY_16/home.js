balance=0;
function submit(){ 
    const amont ={
        type:reason.value,
        amount:income.value
    }

    if(reason.value && income.value){
        balance+= +income.value
        localStorage.setItem(amont.type,JSON.stringify(amont))
        bal.innerHTML= +balance
        alert("Amount added successfully")
        
    }

}