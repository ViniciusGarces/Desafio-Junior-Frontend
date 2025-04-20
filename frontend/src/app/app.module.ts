import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";

import { ChangePasswordComponent } from "./components/change-password/changePassword.component";
import { AppRoutingModule } from "./app-route.module";


@NgModule({
    imports: [BrowserModule, FormsModule, AppComponent, UserComponent, ChangePasswordComponent, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
    
export class AppModule {}