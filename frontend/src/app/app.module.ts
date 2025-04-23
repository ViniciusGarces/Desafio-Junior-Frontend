import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { HubLicenseComponent } from "./components/hub-license/hubLicense.component";
import { ChangePasswordComponent } from "./components/change-password/changePassword.component";
import { AppRoutingModule } from "./app-route.module";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [BrowserModule, FormsModule, AppComponent, UserComponent, ChangePasswordComponent, AppRoutingModule, RouterModule, HubLicenseComponent],
    providers: [],
    bootstrap: [AppComponent],
})
    
export class AppModule {}