import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL="http://localhost:3000"

  constructor(private http:HttpClient) {}

  authentication(){
    return this.http.get(`${this.baseURL}/users`)
  }

 

  
}
