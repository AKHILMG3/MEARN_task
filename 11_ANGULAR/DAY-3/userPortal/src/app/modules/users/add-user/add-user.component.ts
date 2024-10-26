import { Component } from '@angular/core';
import { userModel } from '../userModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:userModel={} //To hold user Details

  addUsers(){
    console.log(this.user);
    
  }

}
