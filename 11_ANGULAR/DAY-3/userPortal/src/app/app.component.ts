import { Component } from '@angular/core';
import { userModel } from '../userModel';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppUserComponent {
        user:userModel={} //to hold user Details

        constructor(private api:UsersService,private route:Router){}
        addUser(){
          this.api.addUserAPI(user:userModel){
            (this.user).subscribe({
            next:(item:any)=>{
              console.log(item);
              alert("User added successfully")
              
            }
          })
        }

  
}
