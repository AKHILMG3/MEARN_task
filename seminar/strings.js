// // //string

let firstName = "john";
let secondName = "deo";
let middleName = "sara";

console.log(firstName,secondName,middleName);
console.log(typeof(firstName,secondName,middleName));


// with template literals(""), it is possible to use both single as well as double 
// quotes inside a string

//let sentence = this is a "car" "" // error

let sentence1 = `this name "is" john's \\`
console.log(sentence1);

let sent = "this is a \"car\" "
console.log(sent);

// escape sequence characters

// let text = "this is my "new" car" ; // error

let text1 = "this is my \" new \" car .";
let text2 = "this character \\ is called backslash.";
let text3 = "this character \` is called backtick";

console.log(text1);
console.log(text2);
console.log(text3);

let string = "i love \n coding"
console.log(string);

let sentence2 = `this is my \t new laptop`
console.log(sentence2);
 
let sentence3 = `this is my \v new laptop`
console.log(sentence3);


//type casting 
const num =25;// number = 10+9 = 19
const str = "10"; // string 10+9 = 109
console.log(str+num);

console.log(Number(str)+num);

const  num1 = 40;//number
const numToStr = num1.toString()  // string
console.log(typeof numToStr); // string
console.log(numToStr+9);  // "40"+9 = 409

let name = "Akhil"

console.log(name.length);
console.log(name.toUpperCase())
console.log(name.toLowerCase());

let name1 = "Ann M"

let newname = name1.replace("M" , "Luka")
console.log(name1);
console.log(newname);

let fname = "Sagar"
let mname = "Elias"
let lname = "Jacky"

let full_name = fname.concat(' ', mname+' ',lname)
console.log(full_name);