import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  p: number = 1

  alluser:any=[]

  searchKey:string="" //to hold value from the searchKey

  constructor(private api:UsersService){}

  ngOnInit():void{
    this.getUsers()
  }

  getUsers(){
    this.api.getUserAPI().subscribe({
      next:(item:any)=>{
        console.log(item);//array of data
        this.alluser=item
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }


deleteUser(id:any){
  this.api.deleteUserAPI(id).subscribe({
    next:(item:any)=>{
      console.log(item);
      alert("Delete successful...")
      this.getUsers()
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}
sortById(){
  this.alluser.sort((a:any,b:any)=>a.id-b.id)
}
sortByName(){
  this.alluser.sort((a:any,b:any)=>a.name.localCompare(b.name))
}

GeneratedPDF(){
  let userPDF = new jsPDF()

  let head = [['id', 'name' , 'Email']]
  let body:any = []

  this.alluser.forEach((item:any)=>{
    if(item.id! ='1'){
      body.push([item.id,item.name,item.email])
    }

  })

  userPDF.text("All users Details",10,10)
  autoTable(userPDF,{head,body})
  userPDF.output("dataurlnewwindow")
  userPDF.save("AllUserList.pdf")
}


}
