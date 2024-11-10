import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { userModel } from '../userModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {  

  user:userModel={} //To hold user Details
  constructor(private api:UsersService, private route:Router,
    private paraId:ActivatedRoute){}
    ngOnInit():void{
      //get an id of particular user id using ActivateRoute
      this.paraId.params.subscribe((item:any)=>{
        console.log(item);
        const {id} = item
        console.log(id);
        //get particular user details
        this.api.getAUserAPI(id).subscribe({
          next:(item:any)=>{
            console.log(item);
            this.user=item
            
          },
          error:(err:any)=>{
            console.log(err);
            
          },
        })
      })
    }
    editUser(id:any){
      this.api.editUserAPI(id,this.user).subscribe({
        next:(item:any)=>{
          console.log(item);
          this.user=item
          alert("User Details Update")
          this.route.navigateByUrl('/user')
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }

}
