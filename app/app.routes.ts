import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found.component";
import { RegisterComponent } from "./register/register.component";

export const ROUTES: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: "**", component: NotFoundComponent }
];
