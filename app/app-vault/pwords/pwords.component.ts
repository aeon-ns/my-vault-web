import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Notify } from "../../providers/notification.service";
import { PwordsService } from "../providers/pwords.service";
import { Pword } from "../../models/pword.interface";
import { ApiResponse } from "../../models/api-response.interface";
import { ErrorHandlerService } from "../../providers/error-handler.service";

@Component({
    selector: "app-vault-dashboard",
    styleUrls: ["pwords.component.scss"],
    templateUrl: "pwords.component.html"
})
export class PwordsComponent {
    pwords: Pword[] = [];

    constructor(
        private router: Router,
        private pwordService: PwordsService,
        private notify: Notify,
        private errorHandler: ErrorHandlerService
    ) {
        this.pwordService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@PwordsComp: pwords success: ", success);
                this.notify.success(success.message);
                this.pwords = success.data;
            },
            (error: ApiResponse) => {
                console.error("@PwordsComp: pwords error: ", error);
                this.errorHandler.handle(error);
            }
        );
    }
}
