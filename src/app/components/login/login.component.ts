import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private tostr:ToastrService) {
    this.loginForm = fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  login(){

    if(this.loginForm.get("userName")?.value =="Admin" && this.loginForm.get("password")?.value == "Admin123"){
      this.router.navigate(["home"]);
      this.tostr.success("Login successfully!!!")
    }else{
      this.tostr.error("Invalid user details")
    }
  }

}
