/* Angular Modules */
import { NgModule } from "@angular/core"; // Used to create our app module
import { BrowserModule } from "@angular/platform-browser"; // Used to run ts directly in browser
import { CommonModule } from "@angular/common"; // Used to fetch all angular provided directives, pipes etc.
import { RouterModule, Routes } from "@angular/router"; // Used for router related stuff
import { HttpModule } from "@angular/http";

/* Our Modules */

/* Our Component */
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found.component";
import { LoginComponent } from "./login/login.component";
import { UserService } from "./login/providers/user.service";

/* Our Routes */
const ROUTES: Routes = [
    { path: "", component: LoginComponent, pathMatch: "full" },
    // { path: 'register', component: LoginComponent, pathMatch: 'full' },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    declarations: [AppComponent, LoginComponent, NotFoundComponent],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}
