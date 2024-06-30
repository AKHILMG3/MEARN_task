// //    sorting the an array 

//  var arr=[44,170,56,100,34,6,150,23,11,12,1];

//  console.log(arr.sort());

//  console.log(arr.sort((a,b)=>a-b)); // assending order 
//  console.log(arr.sort((a,b)=>b-a)); // decending order




// var vehicle = ["Bus" , "car" , "bike", "Cycle" ];// abc

// console.log(vehicle.sort());
// console.log(vehicle.reverse());
// console.log(vehicle.sort((a,b)=>a.localeCompare(b)));
// console.log(vehicle.sort((a,b)=>b.localeCompare(a)));


//  var points = [40, 100, 1, 5, 25, 10];

// Given an array of numbers and perform sorting
// 1.ascending order the numbers 

//   console.log(points.sort((a,b)=>a-b));


// 2.descending order the numbers

//  console.log(points.sort((a,b)=>b-a));


// 3.find the lowest number

//  console.log(points.sort((a,b)=>a-b)[0]);


// 4.find the highest number

//   console.log(points.sort((a,b)=>b-a)[0]);






// map() - creat a new array by calling function for every element 

// a=[10,11,12,13,140]; // old array


// function square(num){
//     //num=10
//     return num**2 //old array
// }
//  console.log(a.map(num=>num*10));





// Multiply all the values in an array with 10:



// var number = [65, 44, 12, 4];

// console.log(number.map(num=>num*10));



// // //Return a new array with the square root of all element values:


//  const numbers = [4, 9, 16, 25];

// console.log(numbers.map(num=>Math.sqrt(num)));




// //create an array of numbers, if number>=5 then do number+1 else do number-1

    // a=[1,2,3,4,5,6,7]

//output: [0,1,2,3,6,7,8]

// console.log(a.map(num=>num>=5?num+1:num-1));


// fillter() -creatt a new array with elements satisfy the condition given in an function

// var a=[10,11,12,14,15,16,17,18,19,20]

// // print only even numbers

// function numCheck(num){
 //   return num%2==0;
//}
//console.log(numCheck.num);



// //Return an array of all values in ages[] that are 18 or over:


// age=[20,14,26,37,30,10,8]

// console.log(age.filter(num=>num>=18));



//forEach() - helps to fetch each item

//[id,name,price,stock]
// products=[
//     [1,'Hide and seek',50,20],
//     [2,'lays',20,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,10],
//     [5,'tiger',20,0],
//     [6,'unibic',60,20],
//     [7,'good day',70,20]
// ]

// //1 display product name one by one

// products.forEach(p =>console.log(p[1])); 

// // price print each items


// products.forEach(p=> console.log(p[2]));


//find() - find the details of a specific item in the array and 
              //return the first occurrence of the item

// //[id,name,designation,location,salary,experience]
// employee=[
//     [1000,'Neel','Developer','Kochi',25000,3],
//     [1001,'Max','Tester','TVM',20000,2],
//     [1002,'Vinod','QA','KNR',35000,4],
//     [1003,'Vyom','QA','Kochi',45000,5],
//     [1004,'Laisha','Tester','TVM',55000,7],
//     [1005,'Aahan','Developer','TVM',15000,1],
//     [1006,'Aahil','QA','Kochi',25000,3],
//     [1007,'Shayan','Developer','KNR',30000,3],
//     [1000,'Nihaan','Developer','Kochi',15000,1],
// ]

// console.log(employee.find(emp=> emp[1]=='laisha'));


// reduce() - function apply to all array elements and 
// returns a single value(It will last value)

a=[1,2,3,4,5,6,,7,8,9,10];

// find sum of elements

// find highest element

// find lowest element 

// console.log(a.reduce((n1,n2)=> n1+n2));  // sum+

// console.log(a.reduce((n1,n2)=>n1>n2?n1:n2)); // highest >

// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));



//reduceRight() - function apply to all array elements

//and returns a single value(It will first value)

arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    
]