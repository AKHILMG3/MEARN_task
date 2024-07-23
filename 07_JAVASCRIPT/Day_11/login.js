username = localStorage.getItem("USERNAME")

head1.innerHTML = `welcome ${username}`


function addEmployee(){
    const employee = {
        id:empid.value,
        name:empname.value,
        address:empaddr.value,
        designation:empdesign.value,
        experience:empexp.value,
        salary:empsal.value
    } 
    if (employee.id=="" || employee.name=="" || employee.address=="" || employee.designation=="" || employee.experience=="" || employee.salary=="" ){
        alert("Plaese fill the following details")
    }
    else{ if (employee.id in localStorage) {
        alert("Employee already exists") 
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee added successfully")
    }

    }
   
}

function search() {
    key = emp.value
    if (key in localStorage) {
        alert("Employee is found")

        employee = JSON.parse(localStorage.getItem(key))
    }
    else{
        alert("Employee is not found")
    }
    
}
