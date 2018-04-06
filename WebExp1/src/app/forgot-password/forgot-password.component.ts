import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email = 'username@abc.com';
  emailVal1: string;
  passwordReset: Boolean = false;
  invalidEmail: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  resetPassword() {
    console.log(this.emailVal1);
    console.log(this.email);
    console.log(this.email === this.emailVal1);
   if (this.emailVal1 === this.email) {
    console.log('Password reset');
    this.passwordReset = true;
  }  else {
    this.invalidEmail = true;
    console.log('failed');
  }
}

}
