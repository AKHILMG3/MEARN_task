// var a= [
//     [10,50]
//     [20,60]
//     [1,5]
//     [15,25]
//     [3,8]
//     [100,500]
// ]

// // 1 print all numbers >10 // 50,20,60,15,100,500

// console.log(a);
// console.log(a.flat());




// you can pass a larger depth value to competely flatten deeply nested arrays
// [1,[,2,[3,[4,[5]]]]]->[1,2,3,4,5]


// deepNestedArray => competelyFlattenedArray will be [1,2,3,4,5]

// const nestedArray = [1,[2,[3,[4,[5]]]]];

// console.log(nestedArray.flat(1));
// console.log(nestedArray.flat(2));
// console.log(nestedArray.flat(3));
// console.log(nestedArray.flat(Infinity));


// // can you provide an example of using the flat() method with an array that contain empty slots?

//const arrayWithEmptySlots = [1, ,[2,3], , [4, [5,6]]];

// // // // arrayWithEmptySlots will be [1,2,3,4,[5,6]]
//console.log(arrayWithEmptySlots.flat());

// The result is that the array is flattened one level deep, and the empty slots are removed.