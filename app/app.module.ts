/* Angular Modules */
import { NgModule } from "@angular/core"; // Used to create our app module
import { BrowserModule } from "@angular/platform-browser"; // Used to run ts directly in browser
import { CommonModule } from "@angular/common"; // Used to fetch all angular provided directives, pipes etc.
import { RouterModule } from "@angular/router"; // Used for router related stuff
import { HttpModule } from "@angular/http";

/* Our Modules */
import { VaultModule } from "./app-vault/app-vault.module";

/* Our Components */
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

/* Our Providers */
import { ErrorHandlerService } from "./providers/error-handler.service";
import { UserService } from "./providers/user.service";
import { Notify } from "./providers/notification.service";

/* Our Routes */
import { ROUTES } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        VaultModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        NotFoundComponent
    ],
    providers: [ErrorHandlerService, UserService, Notify],
    bootstrap: [AppComponent]
})
export class AppModule {}
