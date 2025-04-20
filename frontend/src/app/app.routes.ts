import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Update the path as needed
import { UserComponent } from './components/user/user.component'; // Update the path as needed

import { ChangePasswordComponent } from './components/change-password/changePassword.component'; // Update the path as needed   

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    
    {path: 'changePassword', component: ChangePasswordComponent},
    {path: '**', redirectTo: 'login'}
];
