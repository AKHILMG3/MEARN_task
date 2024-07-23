// pro is object of a promise class

var pro  = new Promise((resolve, reject) => {
    let lotnum = 5;
    let prizeNum=Math.floor(Math.random()*10);
    if (lotnum==prizeNum) {
        resolve('You won the lottery'); //onfulfilment
        
    }
    else{
        reject('Better luck next time'); // onRejection
    }
    
})

pro.then(msg=>console.log(msg))
.catch(err=>console.log(err));