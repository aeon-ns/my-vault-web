import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'goal-investment-calculator',
    styleUrls: ['goal-investment-calculator.component.scss'],
    templateUrl: 'goal-investment-calculator.component.html'
})
export class GoalInvestmentCalculatorComponent implements OnInit {
    investment: number;
    period: number;
    balance: number;

    ngOnInit() {
        this.investment = 0;
        this.period = 0;
        this.balance = 0;
    }   

    onInputChange(property, value) {
        this[property] = value;
    }

    calculate() {        
        this.balance = this.investment * Math.pow(1 + 0.08, this.period);
        console.log('balance: ', this.balance);
    }
}