import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Update the path as needed
import { UserComponent } from './components/user/user.component'; // Update the path as needed
import { HubLicenseComponent } from './components/hub-license/hubLicense.component'; // Update the path as needed
import { ChangePasswordComponent } from './components/change-password/changePassword.component'; // Update the path as needed

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    {path: 'hub_license', component: HubLicenseComponent},
    {path: 'changePassword', component: ChangePasswordComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }