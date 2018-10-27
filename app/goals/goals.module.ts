/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

/* Container Component */
import { GoalsComponent } from './containers/goals/goals.component';
import { GoalViewerComponent } from './containers/goal-viewer/goal-viewer.component';

/* Sub Components */
import { GoalInformationComponent } from './components/goal-information/goal-information.component';
import { GoalInvestmentCalculatorComponent } from './components/goal-investment-calculator/goal-investment-calculator.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';

/* Providers */
import { GoalsService } from './providers/goals.service';

const ROUTES: Routes = [
    {
        path: 'goals',
        children: [
            { path: '', component: GoalsComponent, pathMatch:'full' },
            { path: ':id', component: GoalViewerComponent }
        ]
    }
];

@NgModule({
    declarations: [
        GoalsComponent,
        GoalInformationComponent,
        GoalInvestmentCalculatorComponent,
        /* Viewer / Forms */
        GoalViewerComponent,
        GoalFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [
        GoalsService
    ],
    // NO NEED TO DEFINE THESE AS THEY WILL BE AUTO INCLUDED BY ROUTER
    // exports: [
    //     GoalsComponent,
    //     GoalViewerComponent
    // ]
})
export class GoalsModule { }