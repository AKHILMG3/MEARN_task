pattern='ABCABBC'
//find first recursive character from the given pattern
//output = A


out={};

for(let char of pattern){
    if(char in out){
        console.log(`first recursive charater: ${char}`);
        break;
    }
    else{
        out[char]=1;
    }
}



