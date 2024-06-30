//print word count from the given text 

text="one two one twe one";

// 1 convert into an   array["one", "two" , "one", "two", "one"]
// // output: {one:3 two:2}

words= text.split(" "); // ['one', 'two','one', 'two', "one".......] -word[5]
console.log(words);// Array[]

// // 2 Create an empty and check if the element is present in the object ? "+1" : "=1"

wordcount={}; // //  empty object key: value pairs ={one:3 , two:2}
words.map(word=> word in wordcount? wordcount[word]+=1:wordcount[word]=1)

// wordcount={one:3 ,two:2}
console.log(wordcount);


// print count of each item in the given array 
a=[10,10,20,20,30,30,40,40,50,50,50,60,]
// output {10:2 , 20:2 , 30:2 , 40:2 , 50:3 , 60:1}

output={};

a.map(num=> num in output? output[num]+=1:output[num]=1)

console.log(output);



products=[
    //array of objects
    {pid:100,pname:'apple',band:'5G',price:120000,display:'led'},
    {pid:101,pname:'samsung',band:'5G',price:45000,display:'led'},
    {pid:102,pname:'blackberry',band:'4G',price:50000,display:'led'},
    {pid:103,pname:'nokia',band:'3G',price:1200,display:'lcd'},
    {pid:104,pname:'motorola',band:'4G',price:10000,display:'lcd'},
]

//1. print product name only

products.map(item=>console.log(item.pname));
// console.log('...................................................1');
// // //2

//2. print all mobile details whose display is lcd

products.filter(item=>item.display=='lcd').forEach(item=>console.log(item));
// console.log('....................................................2');
// // //3


//3. print 5G mobile phone name
products.filter(item=>item.band=='5G').forEach(item=>console.log(item));
//  console.log('..................................................3');
// //4


//4. sort mobile based on price
products.sort((a,b)=>b.price-a.price).forEach(price=>console.log(price));
// // console.log('.........................................4');
// // //5


//5. print costly mobile
console.log(products.reduce((a,b)=>a.price>b.price?a:b))

// console.log('.............................................5');
// // 7


//6. print low cost mobile
console.log(products.reduce((a,b)=>a.price<b.price?a:b));
console.log(products);




