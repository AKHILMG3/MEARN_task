import { Component } from '@angular/core';
import { userModel } from '../userModel';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: userModel = new userModel(); // Initializing with userModel's structure

  constructor(private api: UsersService, private route: Router) {}

  addUser() {
    this.api.addUserAPI(this.user).subscribe({
      next:(item:any) => {
        console.log(item);
        alert("User added successfully!");
        this.route.navigateByUrl('/users');
      },
      error: (error) => {
        console.error(error);
        alert("An error occurred while adding the user.");
      }
    });
  }
}
  