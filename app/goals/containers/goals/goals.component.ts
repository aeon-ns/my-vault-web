import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Goal } from '../../../models/goal.interface';
import { GoalsService } from '../../providers/goals.service';

@Component({
    selector: 'goals',
    styleUrls: ['goals.component.scss'],
    templateUrl: 'goals.component.html'
})
export class GoalsComponent implements OnInit {
    goals: Goal[];

    constructor(
        private router: Router,
        private goalsService: GoalsService
    ) { }

    ngOnInit() {
        this.goalsService.getGoals()
            .subscribe((data: Goal[]) => this.goals = data);
    }

    onAdd(index: number) {
        console.log('Adding goal : ', index);
        this.goals[index].isAdded = true;
    }

    handleUpdate(event: Goal) {
        this.goalsService.updateGoal(event)
            .subscribe((data: Goal) => {
                console.log('Updating Goal: ', event);
                this.goals[event.id] = Object.assign({}, event);
            });
    }

    handleRemove(event: number) {
        this.goalsService.removeGoal(this.goals[event])
            .subscribe((data: Goal) => {
                console.log('Removing goal : ', event);
                this.goals[event].isAdded = false;
            });
    }

    viewGoal(goal: Goal) {
        this.router.navigate(['/goals', goal.id]);
    }
}