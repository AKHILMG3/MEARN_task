//Nested Array
//print all elements, whose values are less than 10 in given array
a=[
    [1,2],
    [10,22],
    [14,21],
    [3,6],
    [5,9],
    [19,28],
]
for( i of a){
    for(j of i){
        console.log(j);
    }
}
if(i>10){
    console.log(j);
}


// print pairs whose sum = 9

var arr=[2,3,4,5];// 4+5=9 5+4=9

for(let i of arr){
    if(i+j==9){
        console.log(`pairs are (${i},${j})`);
    }
}

// counter//

counter=1;
for( let i of arr){
    counter++;
    for(let j of arr){
        if(i+j==9){
            console.log(`pairs are (${i},${j})`);
        }
    }
}