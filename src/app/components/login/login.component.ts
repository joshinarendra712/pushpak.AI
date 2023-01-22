import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  SignInform!: FormGroup;
  visible: boolean = true;
  changetype: boolean = true;
  isLoadingResults:boolean = false
  constructor(private fb: FormBuilder, private _snackBar : MatSnackBar,
    private loginService: LoginService, private router:Router) {}
  ngOnInit(): void {
    this.createform();
  }
  createform() {
    this.SignInform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get AllFormControl() {
    return this.SignInform.controls;
  }
  OnSubmitHandler() {
    this.isLoadingResults = true
    let obj = {
      ...this.SignInform.value,
    };
    this.loginService.Login(obj).subscribe((res) => {  
       setTimeout(() => {
        this.isLoadingResults= false
        this.openSnackBar(res.message,"OK") 
        this.router.navigate(['/dashboard'])  
       }, 1000);
    
      },(err) => {
       setTimeout(() => {
        this.openSnackBar(err.error.message,"OK")
        this.isLoadingResults= false  
       }, 1000);
      });
      this.SignInform.reset()
  }
  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

