import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { SigninService } from '../signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginInfo = new Login("solomon@gmail.com", "sol2123", 1)
  selectionValue: string = ""
  password: string = ""
  email: string = ""
  constructor(private router: Router,private signService: SigninService) {

   }
 
  ngOnInit(): void {}
  login(){
    this.signService.login(this.loginInfo)
    .subscribe(
      data => {
        let role = this.loginInfo.role;
        if(role == 1){
          history.pushState({data: data}, '', '');
          this.router.navigateByUrl('/admin',{ state: data});
        } else if(role == 2){
          history.pushState({data: data}, '', '');
          this.router.navigateByUrl('/user',{state:data})
        } else{
          alert("Incorrect Username / or Password!");
        }
      }
    )
  }
 
  


}
