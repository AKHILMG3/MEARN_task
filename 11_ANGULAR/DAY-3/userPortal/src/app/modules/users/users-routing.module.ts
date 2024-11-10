import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [ 
  { path: '', component: UserlistComponent },
  {
    path:'add',component:AddUserComponent
  },
  {
    path:'user/edit/:id',component:EditUserComponent
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
