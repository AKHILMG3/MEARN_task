import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string = "Welcome to login page"
  value:boolean= true;
  num:Number=343

  loginImg:string = "https://cdn.pixabay.com/photo/2019/01/28/11/56/registration-3960205_1280.jpg"

  btnClick(){
    alert("Successfully Login🕸")
  }

}
