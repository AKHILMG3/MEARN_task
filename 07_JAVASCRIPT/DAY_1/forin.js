
// for in//

const student = {
    sname: 'Athira',
    class: 7,
    age: 13
}


console.log(student);
console.log(student.sname);
console.log(['age']);

for(key in student) {
    console.log(`${key} => ${student[key]}`);
}


