import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { UserRegistrationComponent } from './app/user-registration/user-registration.component';
import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
import { ChatComponent } from './app/chat/chat.component';
import { CaptchaLoginComponent } from './app/captcha-login/captcha-login.component';


export const routes: Routes = [
    {path: '', component : LoginComponent},
    {path: 'register', component: UserRegistrationComponent},
    {path: 'forgotpassword', component: ForgotPasswordComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'captcha', component: CaptchaLoginComponent}
];
