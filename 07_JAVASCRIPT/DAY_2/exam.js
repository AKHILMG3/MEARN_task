// ⦁	Declare three variables: firstName, lastName, and age. Assign them appropriate values and print each variable's value to the console

let firstName = "John";
let lastName = "Doe";
let age = "30";

//print variable value console 

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("age:", age);


//⦁	Given a number, write a code snippet to check if the number is positive, negative, or zero. Print the result to the console.
 
var num = 6

if (num>0) {
    console.log("the number is positive.");
} else if (num< 0){
    console.log("the number is negative.");
} else {
    console.log("the number is zero.");
}

//  ⦁	Write a for loop that prints the even numbers from 1 to 20 to the console

for ( let i=1; i<=20; i++) {
    if (i % 2===0){
        console.log(i);
    }
}


//⦁	Create an object representing a student with properties name, age, and grade. Print each property to the console

let student = {
    name: "Arun",
    age: 19,
    grade: 12
};

console.log("name:",student.name);
console.log("age:",student.age);
console.log("grade:",student.grade);

// ⦁	⦁	Given a number score, write a code snippet to assign a grade based on the score. The grading criteria are as follows: 
//A: 90-100   B: 80-89   C: 70-79   D: 60-69   F: 0-59

 
let score =85;
let grade;
if (score >= 90 && score <=100){
    grade = 'A';
} else if (score >= 80 && score <=89) { 
    grade = 'B';
} else if(score >=70 && score <=79){
    grade = 'C';
} else if ( score >= 60 && score <=69){
    grade = 'D';
} else  {
    grade = 'F';
}

console.log("score:", score);
console.log("grade:",grade);