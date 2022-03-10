import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../signup';
import { Observable } from 'rxjs';
import { SignupService } from '../signup.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  _url='http://127.0.0.1:5000/api/LoginInfo';
  userModel=new Signup(
    1,
  "Solomon2123",
  "sol2123",
  "Solomon",
  "Kassahun",
  "A.A",
  "09123123",
  "23",
  "1000"
  )
  constructor(private signupservice: SignupService) {


   }
  onSubmit(){
    this.signupservice.signup(this.userModel)
       .subscribe(
      data=>alert("Thank You!! you Registered Sucessfully "),
      error=>console.error("Error!",error)
      )
  
   
     
  }

  

}
