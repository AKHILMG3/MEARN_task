import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
