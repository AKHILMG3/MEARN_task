function displayNumber(num) {
    
    document.getElementById("result").value+=num;
}

function clearText(){
    result.value=''
}
function equalNumber(){
    result.value=eval(result.value)
}

function backSpace(){
    result.value =result.value.slice(0.-1)
}