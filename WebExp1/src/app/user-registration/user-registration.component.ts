import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VALID } from '@angular/forms/src/model';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  userId = 0;
  registerForm: FormGroup;
   constructor(private fb: FormBuilder, private router: Router, private loginservice: LoginService) {
    this.registerForm = this.fb.group({

      fname: ['Harman', Validators.compose([Validators.required, Validators.maxLength(10)])],
      lname: ['Singh', Validators.compose([Validators.required, Validators.maxLength(10)])],
      username: ['harman', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12),
        Validators.pattern('[a-zA-Z]+\\.?')])],
        password: ['password', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(14),
        Validators.pattern('[a-zA-Z]+\\.?')])],
      addressLine1: ['Address 1', Validators.compose([Validators.required, Validators.maxLength(30)])],
      addressLine2: ['Address 2', Validators.compose([Validators.required, Validators.maxLength(30)])],
      city: ['Pune', Validators.compose([Validators.required, Validators.maxLength(20)])],
      pincode: ['411028', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(6)])],
      state: ['Maharashtra', Validators.compose([Validators.required, Validators.maxLength(20)])],
      country: ['India', Validators.compose([Validators.required, Validators.maxLength(20)])],
      // image: [],
    });
  }

  ngOnInit() {
  }

  /*findInvalidControls() {     //Function to detect the invalid controls in form
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
  }*/

  register(data) {
    console.log(data.value);
    // this.findInvalidControls();

    if (data.status === 'VALID') {
      console.log('Form is Correct');

      //this.loginservice.storeData(data.toString());
      if (localStorage) {
        console.log('Local Storage is available');
        this.userId += 1;
        localStorage.setItem('UserID ' + this.userId , data.value);
        console.log(localStorage);
        } else {
        console.log('Local Storage is not avaiable');
      }
      this.router.navigate(['']);
    } else {
      console.log('Form saving failed');
    }
  }

}

