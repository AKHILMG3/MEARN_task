import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private api:ApiService,private route:ActivatedRoute){}

  product:any={}
  
  ngOnInit(): void {
    this.viewProduct()
 
  }
  viewProduct(){
    //get id from [param]
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      console.log(id);
      this.api.viewProductAPI(id).subscribe((res:any)=>{
        console.log(res);
        this.product=res
        
      })
      
    })
     
  }

  addToWishlist(product:any){
    // const {id,title,price,image} = this.product
    if(sessionStorage.getItem("token")){
      this.api.addToWishlistAPI(product).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert(res)
        },
        error:(err:any)=>{
          alert(err.error)
          console.log(err);
          
        }
      })
    }
    else{
      alert("please login")
    }
    
  }

  addToCart(product:any){
    if(sessionStorage.getItem("token")){
      product.quantity=1
      this.api.addToCartAPI(product).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert(res)
        },
        error:(err:any)=>{
          alert(err.error)
          console.log(err);
          
        }
      })
    }
    else{
      alert("please login")
    }

  }

}
