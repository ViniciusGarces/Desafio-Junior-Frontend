import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { UserComponent } from './components/user/user.component'; 
import { ChangePasswordComponent } from './components/change-password/changePassword.component'; 
import { HubLicenseComponent } from './components/hub-license/hubLicense.component';

//route list
const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    {path: 'hubLicense', component: HubLicenseComponent},
    {path: 'changePassword', component: ChangePasswordComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //Initializes routing with the defined routes.
    exports: [RouterModule]
})
export class AppRoutingModule { }