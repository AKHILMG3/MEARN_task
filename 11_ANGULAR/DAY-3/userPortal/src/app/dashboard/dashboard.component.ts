import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent 
implements OnInit
{ 
  adminName:string =""
  ngOnInit(): void {
    this.adminName = sessionStorage.
    getItem("Name")||"" 
console.log(this.adminName);
  }

}
