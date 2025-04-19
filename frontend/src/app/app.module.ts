import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";


@NgModule({
    imports: [BrowserModule, FormsModule, AppComponent, UserComponent],
    providers: [],
    bootstrap: [AppComponent],
})
    
export class AppModule {}