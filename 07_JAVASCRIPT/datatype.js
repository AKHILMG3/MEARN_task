// Datatypes


//  1)strings example
var name='Akhil'
console.log(name);
var empname="Athira"
console.log(empname);
var studname=`anjali`
console.log(studname);


// string with concatination
console.log("one of my student name is " + empname);
console.log('one of my stundent name is', name);
console.log(`one of my stundent name is ${studname}`);

// 2 Numbers example 
 var n1 = 3;
 var n2 = 3.433;
 console.log(n1,n2);
 console.log(typeof(n2));


//  3)Boolean example 
    //   true;(1)
    //   false;(0)

const ab= true;
const bc= false;

console.log(ab);
console.log(ab);

// 4) undefined example

let names;
console.log(names);



// 5) null example 

let lastname=null;
console.log(lastname);


// 6) object exxample


const student={
    id:0502,
    name:'Akhil',
    class:10
}
console.log(student);
console.log(student.name);

// 7) array example 
var students = ["Akhil" , "Athira" , 0205 , 0304 , true , null]

console.log(students);
console.log(students[1]);


// 8) funtion example


// function definition  
// function functionName(parameter1,parameter2...){
// }

// function call
// funtionName(parameter1,parameter2)

function add(a,b){
    c=a+b
    return c
}

console.log(addition(5,6));
