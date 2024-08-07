balance=0;
function add(){ 
    let amont ={
        type:reason.value,
        amount:income.value
    }

    if(reason.value && income.value){
        balance+= +income.value
        localStorage.setItem(amont.type,JSON.stringify(amont))
        bal.innerHTML= +balance
        alert("Amount added successfully")

        
table = `
<tr>
<td>${amont.type}</td>
<td>${amont.amount}</td>
<td>${day}-${month}-${years}</td>
<td>${balance}</td>
</tr>
`
resultin.innerHTML +=table
bal.innerHTML= +balance
        
    }

    else{
        alert("please Enter the Details")
    }

}
balnc=0;
balance=balance;

function submit(){
    let amunt ={
        type:reson.value,
        amount:expense.value
    }
    if(reson.value && expense.value){
        balnc += +expense.value
        balance -= +expense.value
        localStorage.setItem(amunt.type,JSON.stringify(amunt))
        spebal.innerHTML= +balnc
        bal.innerHTML= +balance
        alert("Amount added susessfully")

        table=`
        <tr>
        <td>${amunt.type}</td>
        <td>${amunt.amount}</td>
        <td>${day}-${month}-${years}</td>
        <td>${balance}</td>
        </tr>
        `
        resultex.innerHTML +=table
        bal.innerHTML= +balance

    }   

    else{
        alert("please Enter the Details")
    }
}

let currentDate =new Date();

let years = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();

document.getElementById('head').innerHTML = `Welcome ${user}`
