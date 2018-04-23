import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha-login',
  templateUrl: './captcha-login.component.html',
  styleUrls: ['./captcha-login.component.scss']
})
export class CaptchaLoginComponent implements OnInit {

  constructor() {
    window['verifyCallback'] = this.verifyCallback.bind(this);
  }
  // displayRecaptcha() {
  //   let doc = <HTMLDivElement>document.getElementById('signup-form');
  //   let script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = 'https://www.google.com/recaptcha/api.js';
  //   script.async = true;
  //   script.defer = true;
  //   doc.appendChild(script);
  // }

  verifyCallback(response) {
    console.log(response);
  }
  ngOnInit() {
    let doc = <HTMLDivElement>document.getElementById('signup-form');
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    console.log(script);
    doc.appendChild(script);
  }

}
