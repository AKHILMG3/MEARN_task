// objects - Real life entities


var a = [10,20,30] // Array
console.log(typeof a); // Object


// // // objects creation - var object_name ={key/;value};
// // // objects - coolection of key/value pairs 


// create an employee object having properties as id,name,designation,salary,experience

employee = {
    id:101,
    name:"Akhil",
    designation:"Developer",
    salary:18000,
    experience: 3 
}

//Display the employee Object

console.log(employee);

// // fetch particular value from object 
// // // object_name["key"] or object_name.key

// print employee "name"

console.log(employee.name);
console.log(employee["name"]);

// // // // // print emnployee salary 
// // // // // employee.salary

console.log(employee.salary);


// // To check wheather a particular key is present in the employee object 

// // // in opertion o/p _ boolean valuwe is returned

// // To check experience in the employee

console.log("experience" in employee);
console.log("genter" in employee);

employee["genter"]='male'
console.log(employee);

employee.isVaccinated=true;
console.log(employee);


// // update 
// //  add vaccine

employee.vaccine='covisheild';
console.log(employee);

// // // update 

employee.vaccine='covaxin'
console.log(employee);

// // increment salary

employee.salary+=5000
console.log(employee);

employee["salary"]+=6000
console.log(employee);

//Create a student object having properties as id,name,course,totalmark,year

const student={
    id:1,
    name:"Akhil",
    course:"MERN Stack",
    totalmark:75,
    year:2021
}

console.log(student);

//1 Print name of student object

console.log(student.name);
console.log(student["name"]);


//2 Check rank key is present in student object
 console.log("rank" in student);



//3 add qualifed for higher education or not and update

student.isQulified='Not Qulified';
console.log(student);

student.isQulified='Yes Qulified';
console.log(student);


//4 Mark incremented by 10

student.totalmark+=10
console.log(student);

// student["totalmark"]+=10
// console.log(student);


//5 Print details of student object one by one

for(i in student){
    console.log(`${i} - ${student[i]}`);
}