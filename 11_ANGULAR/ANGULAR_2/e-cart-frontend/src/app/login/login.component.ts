import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

  loginForm = this.fb.group({
    email:[''],
      password:['']
  })

  login(){
    if(!this.loginForm.valid){
      alert("please fill the form")
    }
    else{
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      const user = {email,password}

      //api call 
      this.api.LoginAPI(user).subscribe({
        next:(res:any)=>{
          console.log(res);
          sessionStorage.setItem("token",res.token)
          alert("Login Successfull")
          this.route.navigateByUrl('/')
         },
         error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
         }
      })
    }

  }

}
