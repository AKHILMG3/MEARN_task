function processArguments(...args){
    if (args.length=== 0){
        // no arguments

        console.log('no arguments provied.');
    } else if (args.length=== 1) {
        // single argument passed
        console.log('multiple arugments:',args);
    }
    }




    // usage examples:

    processArguments(); // ouput: no arguments provided.
    processArguments(10); // output:one arguments 10
    processArguments('apple','orange','banana');




    // Calculate Area with Overloaded Function

    function calculateArea(...args) {
    if (args.length=== 2)   
        
    }






// Write a function called calculateArea(...args) that calculates the area of different shapes based on the number of arguments provided. The function should support three shapes: circle, rectangle, and triangle. The number of arguments passed will determine the shape and its corresponding area calculation. Use the provided code as a reference.

// Specifications:

// For one argument, assume it's the radius of a circle and return the area of the circle using the formula: area = π * radius * radius.

// For two arguments, assume they are the length and width of a rectangle and return the area of the rectangle using the formula: area = length * width.

// For three arguments, assume they are the side lengths of a triangle, and return the area of the triangle using Heron's formula: area = √(s * (s - a) * (s - b) * (s - c)), where s is the semi-perimeter and a, b, and c are the side lengths of the triangle.

// If any other number of arguments is provided, throw an error with the message "Invalid number of arguments."
// console.log(calculateArea(5)); // Output: 78.53981633974483 (Area of a circle)
// console.log(calculateArea(4, 6)); // Output: 24 (Area of a rectangle)
// console.log(calculateArea(3, 4, 5)); // Output: 6 (Area of a triangle)
// console.log(calculateArea(2, 4, 6, 8)); // Error: Invalid number of arguments.