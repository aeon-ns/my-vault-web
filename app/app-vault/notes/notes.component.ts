import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Notify } from "../../providers/notification.service";
import { NotesService } from "../providers/notes.service";
import { Note } from "../../models/note.interface";
import { ApiResponse } from "../../models/api-response.interface";

@Component({
    selector: "app-vault-notes",
    styleUrls: ["notes.component.scss"],
    templateUrl: "notes.component.html"
})
export class NotesComponent {
    notes: Note[] = [];

    constructor(
        private router: Router,
        private notesService: NotesService,
        private notify: Notify
    ) {
        this.notesService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log("@NotesComp: notes success: ", success);
                this.notify.success(success.message);
                this.notes = success.data;
            },
            (error: ApiResponse) => {
                console.error("@NotesComp: notes error: ", error);
                this.notify.error(error.message);
            }
        );
    }
}
