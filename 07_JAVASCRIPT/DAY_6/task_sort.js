 //[id,name,designation,location,salary,experience]
employee=[
    [1000,'Neel','Developer','Kochi',25000,3],
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name 

//   console.log(employee.map(num=>num[1]));


//2 Print total number of employee

// i=0
// employee.map(num=>i++)
// console.log(i);


//3 Print developer employee details

//  console.log(employee.filter(p=>p[2]=='Developer'));


//4 Print all employee details whose salary > 30000

// console.log(employee.filter(s =>s[4]>30000));

//5 Print details of employee Laisha

//console.log(employee.find(emp=>emp[1]=='Laisha'));


//6 Sort employee based on descending order of salary

//console.log(employee.sort((a,b)=>a[4]-b[4]));

//7 sort employee based on ascending order of experience

// console.log(employee.sort((a,b)=>b[4]-a[4]));




 //1 What is the purpose of the Array.prototype.filter() method in JavaScript?

 
//2 How does the filter() method work? Can you explain the basic idea behind its functionality?
//3 Can you demonstrate how to use the filter() method to create a new array of even numbers from an existing array of integers?
 
// var a = [1,2,3,4,5,6,7,8,9,10,]

// console.log(a.filter(num => num%2==0));

//4 How does the filter() method differ from the find() method in terms of functionality and returned values?
//5 What is the purpose of the Array.prototype.map() method in JavaScript?
//6 Can you provide an example of using the map() method to double each element in an array of numbers?

// let a =[1,2,3,4,5,6,7,8,9]
// console.log(a.map(num=>num*2));


//7 Can you explain the difference between the map() method and the forEach() method?


//8 Can you demonstrate how to use the map() method to extract specific properties from an array of objects?


/*const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Eve', age: 28 }
];
 console.log(people.map(value=> value.name));
 console.log(people.map(num=> num.age));
 */




//9 How does the reduce() method work? Can you explain the basic idea behind its functionality?

//10  How does the reduceRight() method differ from the reduce() method?