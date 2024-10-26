import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userModel } from '../userModel'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL="http://localhost:3000"

  constructor(private http:HttpClient) {}

  addUserAPI(user:userModel){
    return this.http.post( `${this.baseURL}/users`,user)
  }

  
}
