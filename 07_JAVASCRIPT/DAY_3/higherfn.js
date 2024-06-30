    //a name callback function, the name of the function could be any name 

    const callback = (num) => {
        return num**2;
    };

    // // function that takes another function as a callback

    function cube(callback,num){

    }



    function sayHello(){
        console.log('Hello');
    }

    setInterval(sayHello,1000) // it prints hello in every second, 1000ms in 1s/.....

    function sayHello() {
        console.log('Hello');
        
    }
    setTimeout(sayHello,10000)