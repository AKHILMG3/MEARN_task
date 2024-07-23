weatherdata=[
    {district:'trissur',weather:28},
    {district:'palakkadu',weather:36},
    {district:'kozhikod',weather:28},
    {district:'trissur',weather:29},
    {district:'palakkadu',weather:31},
    {district:'kozhikod',weather:34},
]// // array of objects.


//output { Thrissur: 29, Palakkad: 36, Kozhikod: 34 }

//1 declare an empty object named as output {}

const output={};
 
// weatherdata.forEach(element=> { 
//     const{weather ,district}= element
//     output[district]=weather

// });
//     console.log(output);

// output={};

// for(let data of weatherdata){
//     let distName = data["district"];//thissure
//     let currentTemp =data["weather"]

//     if(distName in output){
//         let oldtemp = output[distName];

//         if(currentTemp>oldtemp){
//             output[distName]=currentTemp;
//         }
//     }


// else{
//     output[distName]=currentTemp;
// }
// }
// console.log(output);

// weatherdata.map(place=> place.district in output?(output[place.district]>place.weather?null:output[place.district]=place.weather):output[place.district]=place.weather)
// console.log(output);


//2 check the district is present in the object ? T compare with previous weather value : To add district and weather 

console.log(Object.entries(output)); // nested array

console.log(Object.entries(output).sort((n1,n2)=>n2[1]-n1[1]));




//3 print the object (output)




//sort the given output in descending order of temparature



