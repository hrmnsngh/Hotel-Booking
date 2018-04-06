import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUsersService } from '../get-users.service';
import { LoginService } from '../login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = 'username';
  password = 'password';
  loginAttempt: Boolean = false;
  errortag = ['username', 'password'];
  showPassword: Boolean = true;

  constructor(private router: Router, private fb: FormBuilder, private logged: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12),
      Validators.pattern('[a-zA-Z]+\\.?')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(14),
      Validators.pattern('[a-zA-Z]+\\.?')])]
    });
   }

  ngOnInit() {
  }

  login(data) {

    /*if (data.status === 'INVALID') {
      for (let i = 0; i < this.errortag[i].length; i++) {
        data.control[this.errortag[i]].pristine = false;
      }
    }*/
    if ((data.value.username === this.username) && (data.value.password === this.password)) {
      console.log('Login Successful');
      this.router.navigate(['/register']);

    } else {
      this.loginAttempt = true;
      console.log('Login Failed');
    }
  }

  showPass() {
    this.showPassword = !this.showPassword;
    //document.getElementById('pass').setAttribute('type', this.showPassword ? 'text' : 'password');
  }

}
