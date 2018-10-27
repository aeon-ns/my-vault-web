/* Angular Modules */
import { NgModule } from "@angular/core"; // Used to create our app module
import { BrowserModule } from '@angular/platform-browser'; // Used to run ts directly in browser
import { CommonModule } from "@angular/common"; // Used to fetch all angular provided directives, pipes etc.
import { RouterModule, Routes } from "@angular/router"; // Used for router related stuff

/* Our Modules */
import { GoalsModule } from "./goals/goals.module";

/* Our Component */
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";
import { GoalViewerComponent } from "./goals/containers/goal-viewer/goal-viewer.component";

/* Our Routes */
const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    GoalsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };