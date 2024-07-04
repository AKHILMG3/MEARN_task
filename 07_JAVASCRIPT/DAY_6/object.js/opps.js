// class - creation

// syntax : class class_name{
//}

//create a 

class Employee{
    setEmployee (id,name,designation,salary) {
        this.empid=id;
        this.empname=name;
        this.empdesignation = designation;
        this.empsalary = salary;
        console.log("Employee details created");

    }

    printEmployee() {
        console.log(this.empid,this.empname,this.empdesignation,this.empsalary);
    }

}
// // // to be execute a class then we need to creat object
// // 

emp = new Employee()
emp.setEmployee(1000,'manoj' , 'developer' , 30000)
emp.printEmployee();

emp1 = new Employee()
emp1.setEmployee(1000,'manu' , 'developer' , 29000)
emp1.printEmployee();



