var age=15;
if(age<20 && age>10)
    {
        console.log("age between 10 and 20");
    }
    else{
        console.log("age is not between 10 and 20");
    }

    //3 Find whether a number is divisible by 2 and 3

    var num=12;
    if(num%2==0 && num%3==0){
        console.log("number is divisible by 2 and 3");
    }
    else{
        console.log("not divisible");
    }
    

    //4 Find whether a number is divisible by either 2 or 3

    var num=24;
    if(num%2==0 || num%3==0){
        console.log("number is divisible by 2 or 3");
    }
    else{
        console.log("not divisible");
    }


    //5 Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operator


    var age=30;
    if(age<18){
        console.log("you cannot be drive");
    }
    else{
        console.log("you can drive");
    }

