import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../modules/users/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL="http://localhost:3000"


  constructor(private http:HttpClient) { }

  addUserAPI(user: userModel) {
    return this.http.post(`${this.baseURL}/users`, user);
}


  getUserAPI(){
    return this.http.get(`${this.baseURL}/users`)
  }

  deleteUserAPI(id:any){
    return this.http.delete(`${this.baseURL}/users/${id}`)
  }

  getAUserAPI(id:any){
    return this.http.get(`${this.baseURL}/users/${id}`)
  }

  editUserAPI(id:any,user:userModel){
    return this.http.get(`${this.baseURL}/users/${id}`)
  }
}
