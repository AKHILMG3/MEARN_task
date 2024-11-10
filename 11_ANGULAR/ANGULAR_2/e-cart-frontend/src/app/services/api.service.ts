import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  baseURL = 'http://localhost:3000'

  //get all products details from DB 

  getAllProductsAPI(){
    return this.http.get(`${this.baseURL}/allProducts`)
  }

  viewproductAPI(id:any){
    return this.http.get(`${this.baseURL}/view/${id}`)
  }
  registerAPI(body:any){
    return this.http.post(`${this.baseURL}/register`,body)
  }
}
