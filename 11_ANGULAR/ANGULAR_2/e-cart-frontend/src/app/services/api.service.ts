import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  viewProductAPI(id:any){
    return this.http.get(`${this.baseURL}/view/${id}`)
  }
  registerAPI(body:any){
    return this.http.post(`${this.baseURL}/register`,body)
  }

  LoginAPI(body:any){
    return this.http.post(`${this.baseURL}/login`,body)
  }

  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  addToWishlistAPI(body:any){
    return this.http.post(`${this.baseURL}/wishlist`,body.appendToken())
  }

  getWishlistAPI(){
    return this.http.get(`${this.baseURL}/wishlist`,this.appendToken())
  }
  deleteWishlistProductAPI(id:any){
    return this.http.delete(`${this.baseURL}/wishlist/${id}`,this.appendToken())
  }
  addToCartAPI(body:any){
    return this.http.post(`${this.baseURL}/cart`,body,this.appendToken())
  }
  getCartAPI(){
    return this.http.get(`${this.baseURL}/cart`,this.appendToken())
  }
  deleteCartProductAPI(id:any){
    return this.http.delete(`${this.baseURL}/cart/${id}`,this.appendToken())
  }
  incrementCartProductAPI(id:any){
    return this.http.get(`${this.baseURL}/cart/${id}`,this.appendToken())
  }
  decrementCartProductAPI(id:any){
    return this.http.get(`${this.baseURL}/cartDecrement/${id}`,this.appendToken())
  }
  
  }


