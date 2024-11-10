import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserlistComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ]
})
export class UsersModule { }
