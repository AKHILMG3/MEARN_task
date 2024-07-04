

class Student{
    constructor (id,name,coures,department,mark){
        this.stdid=id,
        this.stdname = name,
        this.stdcoures = coures,
        this.stddepartment = department,
        this.stdmark = mark
        console.log("Student details created");
    }


printStudent() {
    console.log(this.stdid,this.stdname,this.stdcoures,this.stddepartment,this.stdmark);
}
}


std = new Student(20,'gokul','BCA',65,65)
std.printStudent()


