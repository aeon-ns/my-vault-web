import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found.component";

export const ROUTES: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    // { path: 'register', component: RegComponent, pathMatch: 'full' },
    { path: "**", component: NotFoundComponent }
];
