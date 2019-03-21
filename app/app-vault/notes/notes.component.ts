import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from '../../providers/notification.service';
import { NotesService } from '../providers/notes.service';
import { Note } from '../../models/note.interface';
import { ApiResponse } from '../../models/api-response.interface';
import { ErrorHandlerService } from '../../providers/error-handler.service';
import { Subject } from 'rxjs/Subject';

interface NoteSubject {
    mode: 'add' | 'edit';
    note?: Note;
}

@Component({
    selector: 'app-vault-notes',
    styleUrls: ['notes.component.scss'],
    templateUrl: 'notes.component.html'
})
export class NotesComponent {
    notes: Note[] = [];
    openNoteModal: Subject<NoteSubject>;

    constructor(
        private router: Router,
        private notesService: NotesService,
        private notify: Notify,
        private errorHandler: ErrorHandlerService
    ) {
        this.openNoteModal = new Subject();
        this.notesService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log('@NotesComp: notes success: ', success);
                this.notify.success(success.message);
                this.notes = success.data;
            },
            (error: ApiResponse) => {
                console.error('@NotesComp: notes error: ', error);
                this.errorHandler.handle(error);
            }
        );
    }

    addNote() {
        this.openNoteModal.next({ mode: 'add' });
    }

    editNote(note: Note) {
        this.openNoteModal.next({ mode: 'edit', note });
    }

    onNoteSave(event: NoteSubject) {
        console.log('@NoteComp[onNoteSave]: ', event);
        let apiCall =
            event.mode === 'add'
                ? this.notesService.add(event.note)
                : this.notesService.update(event.note);
        apiCall.subscribe(
            (success: ApiResponse) => {
                console.log('@NoteComp[onNoteSave][API] success: ', success);
                this.notify.success(success.message);
                if (event.mode === 'add') {
                    return this.notes.push(success.data);
                }
                let index = this.notes.findIndex(
                    note => note._id === event.note._id
                );
                this.notes[index] = success.data;
            },
            (error: ApiResponse) => {
                console.error('@NoteComp[onNoteSave][API] error: ', error);
                this.errorHandler.handle(error);
            }
        );
    }
}
