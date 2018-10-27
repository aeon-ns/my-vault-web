import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";

import { GoalsService } from "../../providers/goals.service";
import { Goal } from "../../../models/goal.interface";

@Component({
    selector: 'goal-viewer',
    styleUrls: ['goal-viewer.component.scss'],
    templateUrl: 'goal-viewer.component.html'
})
export class GoalViewerComponent implements OnInit {

    goal: Goal;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private goalService: GoalsService
    ) { }

    ngOnInit() {
        this.route.params
            // .subscribe((data: object) => console.log('route data: ',data));
            .switchMap((data: any) => this.goalService.getGoal(data.id))
            // this.goalService
            //     .getGoal(0)
            .subscribe((data: Goal) => this.goal = data);
    }
    onUpdateGoal(event: Goal) {
        console.log('onUpdateGoal: ', event);
        this.goalService
            .updateGoal(event)
            .subscribe((data: Goal) => this.goal = data);
    }
    goBack() {
        this.router.navigate(['/goals']);
    }
}