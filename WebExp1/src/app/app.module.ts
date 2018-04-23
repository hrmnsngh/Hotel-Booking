import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routes } from '../Routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetUsersService } from './get-users.service';
import { LoginService } from './login.service';
import { ChatComponent } from './chat/chat.component';
import { CaptchaLoginComponent } from './captcha-login/captcha-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    ForgotPasswordComponent,
    ChatComponent,
    CaptchaLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
    GetUsersService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
