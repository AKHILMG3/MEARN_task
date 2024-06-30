// print all vowels in string 

str="hai hello"; //varibale 

vowels=['a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U'];// array

// console.log(Array.from(str));


Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));

// find the vowelsin an araay usings array methods


const strings = ["Hello", "how", "are", "yoe"]; //output [2,1,2,2]

const vowelCounts = strings.map(str=>Array.from(str).filter(char => 'aeiouAEIOU'.includes(char)).length);
console.log("Number of vowels in each string:", vowelCounts); // output:[2,1,2,2]  