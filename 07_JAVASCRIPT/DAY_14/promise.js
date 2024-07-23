const count = true;

let countvalue = new Promise(function (resolve, reject)  {
    if (count) {//true
        resolve("there is a count value.");
    }
    else{
        reject("there is no count value.");
    }
    
})

console.log(countvalue);