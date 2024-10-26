import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts:any=[]

  status:boolean=false
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getProductsAPI().subscribe((item:any)=>{
      console.log(item.products);
      this.allProducts=item.products
      console.log(this.allProducts);
      this.status = true
      
    })
  }
}
