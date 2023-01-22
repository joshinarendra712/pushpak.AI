import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent {

  constructor( private _snackBar : MatSnackBar) {}
  Onsubmitclick(){
    this.openSnackBar("You have Successfully Changed Password", "OK")
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
