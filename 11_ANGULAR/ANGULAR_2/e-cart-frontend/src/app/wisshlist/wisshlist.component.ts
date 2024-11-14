import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wisshlist',
  templateUrl: './wisshlist.component.html',
  styleUrls: ['./wisshlist.component.css']
})
export class WisshlistComponent implements OnInit {

  products:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getWishlist()
  }

  getWishlist(){
    if(sessionStorage.getItem("token")){
      this.api.getWishlistAPI().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.products=res
          
        },
        error:(err:any)=>{
          console.log("err"+err);
          
        }
      })
    }
  }

  deleteProduct(id:any){
    this.api.deleteWishlistProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getWishlist()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  

}
