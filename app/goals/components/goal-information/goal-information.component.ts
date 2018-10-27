import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from "@angular/core";

import { Goal } from '../../../models/goal.interface';

@Component({
    selector: 'goal-information',
    styleUrls: ['goal-information.component.scss'],
    templateUrl: 'goal-information.component.html'
})
export class GoalInformationComponent implements OnChanges, OnInit {
    
    @Input() goal: Goal;

    @Output() update: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes) {
        if(changes.goal) {
            this.goal = Object.assign({}, changes.goal.currentValue);
        }
        console.log('onChanges :: ');
    }

    ngOnInit() {
        console.log('onInit :: ');  
    }

    onChange(property: string, value: any) {
        this.goal[property] = value;
        this.update.emit(this.goal);
    }

    onRemove() {
        this.remove.emit();
    }
}