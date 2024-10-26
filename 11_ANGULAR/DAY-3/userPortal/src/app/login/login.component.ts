import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Useremail :string ="";
  Userpassword :string ="";

  constructor(private route:Router, private admApi:AdminService){}

  login(){
    if(this.Useremail && this.Userpassword){
      this.admApi.authentication().subscribe((item:any)=>{
        console.log(item);//[0] {id:1 email:admin password:123}
        const {email, password, adminName} = item
        console.log(email,password);

        if(this.Useremail==email && this.Userpassword == password)
          {
          this.route.navigateByUrl('/dashboard')
          alert('Login Success')
          sessionStorage.setItem("Name",adminName)
        }
        else{
          alert('Please fill the form')
        }
        
      })
     
    }
    
  }

}
