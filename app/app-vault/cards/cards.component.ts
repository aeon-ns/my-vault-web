import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Notify } from "../../providers/notification.service";
import { Card } from "../../models/card.interface";
import { CardsService } from "../providers/cards.service";
import { ApiResponse } from "../../models/api-response.interface";

@Component({
    selector: "app-vault-dashboard",
    styleUrls: ["cards.component.scss"],
    templateUrl: "cards.component.html"
})
export class CardsComponent {
    cards: Card[] = [];

    constructor(
        private router: Router,
        private cardService: CardsService,
        private notify: Notify
    ) {
        this.cardService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@CardsComp: cards success: ", success);
                this.notify.success(success.message);
                this.cards = success.data;
            },
            (error: ApiResponse) => {
                console.error("@CardsComp: cards error: ", error);
                this.notify.error(error.message);
            }
        );
    }
}
