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
    this.viewProducts()
 
  }
  viewProducts(){
    //get id from [param]
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      console.log(id);
      this.api.viewproductAPI(id).subscribe((res:any)=>{
        console.log(res);
        
      })
      
    })
     
  }

}
