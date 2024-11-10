import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WisshlistComponent } from './wisshlist/wisshlist.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {
    path:'',component:AllProductsComponent
  },
  {
    path:'view/:id',component:ViewProductComponent
  },
  {
    path:'user/login',component:LoginComponent
  },
  {
    path:'user/register',component:RegisterComponent
  },
  {
    path:'user/cart',component:CartComponent
  },
  {
    path:'user/wishlist',component:WisshlistComponent
  },
  {
    path:'**',component:PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
