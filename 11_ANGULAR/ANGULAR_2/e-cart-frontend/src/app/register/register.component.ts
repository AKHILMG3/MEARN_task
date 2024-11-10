import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

  registerFrom = this.fb.group({
    username:[""],
    email:[''],
      password:['']
  })

  register(){
    if(!this.registerFrom.valid){
      alert("please fill the form")
    }
    else{
      let username = this.registerFrom.value.username;
      let email = this.registerFrom.value.email;
      let password = this.registerFrom.value.username;
      const user = {username,email,password}

      //api call 
      this.api.registerAPI(user).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Register Successfull")
          this.route.navigateByUrl('user/login')
         },
         error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
         }
      })
    }
  }

}
