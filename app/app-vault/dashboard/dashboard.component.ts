import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Notify } from "../../providers/notification.service";
import { NotesService } from "../providers/notes.service";
import { Note } from "../../models/note.interface";
import { Pword } from "../../models/pword.interface";
import { Card } from "../../models/card.interface";
import { PwordsService } from "../providers/pwords.service";
import { CardsService } from "../providers/cards.service";
import { ApiResponse } from "../../models/api-response.interface";
import { ErrorHandlerService } from "../../providers/error-handler.service";

@Component({
    selector: "app-vault-dashboard",
    styleUrls: ["dashboard.component.scss"],
    templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
    notes: Note[] = [];
    pwords: Pword[] = [];
    cards: Card[] = [];

    constructor(
        private router: Router,
        private notesService: NotesService,
        private pwordService: PwordsService,
        private cardService: CardsService,
        private notify: Notify,
        private errorHandler: ErrorHandlerService
    ) {
        this.notesService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@DashboardComp: notes success: ", success);
                this.notify.success(success.message);
                this.notes = success.data;
            },
            (error: ApiResponse) => {
                console.error("@DashboardComp: notes error: ", error);
                this.errorHandler.handle(error);
            }
        );
        this.pwordService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@DashboardComp: pwords success: ", success);
                this.notify.success(success.message);
                this.pwords = success.data;
            },
            (error: ApiResponse) => {
                console.error("@DashboardComp: pwords error: ", error);
                this.errorHandler.handle(error);
            }
        );
        this.cardService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@DashboardComp: cards success: ", success);
                this.notify.success(success.message);
                this.cards = success.data;
            },
            (error: ApiResponse) => {
                console.error("@DashboardComp: cards error: ", error);
                this.errorHandler.handle(error);
            }
        );
    }
}
