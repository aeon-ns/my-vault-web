import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Goal } from "../../../models/goal.interface";
import { Timeframe } from "../../../models/timeframe.interface";

@Component({
    selector: 'goal-form',
    styleUrls: ['goal-form.component.scss'],
    templateUrl: 'goal-form.component.html'
})
export class GoalFormComponent {

    timeframes: Timeframe[] = [{
        key: 'none',
        value: 'No timeframe'
    }, {
        key: '>2-<5',
        value: '2 - 5 Years'
    }, {
        key: '>5-<10',
        value: '5 - 10 Years'
    }, {
        key: '>10',
        value: '10+ Years'
    }];

    @Input() detail: Goal;
    @Output() update: EventEmitter<Goal> = new EventEmitter<Goal>();

    toggleAdd(isAdded: boolean) {
        if (isAdded) {
            this.detail.timestamp = Date.now();
        } else {
            this.detail.timestamp = null;
        }
    }

    handleSubmit(goal: Goal, valid: boolean) {
        console.log("Submitted!", goal, valid);
        if (valid) {
            this.detail = Object.assign(this.detail, goal);
            this.update.emit(this.detail);
        }
    }
}