import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private api:ApiService){}
  cartItem:any=[]
  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.api.getCartAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.cartItem=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteCart(id:any){
    this.api.deleteCartProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getCart()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  incrementCart(id:any){
    this.api.incrementCartProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getCart()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  decrementCart(id:any){
    this.api.decrementCartProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getCart()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  
  // totalPrice(){
  //   this.carttotal = this.cartItem.map({item:any}=>isNgTemplate.price).
  // }

}
