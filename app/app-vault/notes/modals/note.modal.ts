import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    ElementRef,
    OnInit
} from '@angular/core';
import { Note } from '../../../models/note.interface';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

declare var UIkit: any;

interface UIKitModalInstance {
    show: Function;
    hide: Function;
}

interface NoteSubject {
    mode: 'add' | 'edit';
    note?: Note;
}

@Component({
    selector: 'note-modal',
    styleUrls: ['note.modal.scss'],
    templateUrl: 'note.modal.html'
})
export class NoteModal implements OnInit {
    note: Note;
    mode: 'add' | 'edit';
    modal: UIKitModalInstance;
    @Input() open: Subject<NoteSubject>;
    @Output() noteEmitter: EventEmitter<NoteSubject> = new EventEmitter<
        NoteSubject
    >();
    @ViewChild('noteModal') noteModal: ElementRef;

    constructor() {
        this.note = {
            title: '',
            account: false,
            note: '',
            pinned: false
        };
    }

    ngOnInit() {
        this.open.subscribe((subject: NoteSubject) => {
            this.modal = UIkit.modal(this.noteModal.nativeElement, {});
            this.modal.show();
            this.mode = subject.mode;
            if (!subject.note) {
                return this.resetNote();
            }
            this.note = Object.assign({}, subject.note);
        });
    }

    resetNote() {
        this.note = {
            title: '',
            account: false,
            note: '',
            pinned: false
        };
        console.log('@NoteModal[resetNote] note: ', this.note);
    }

    save(form: NgForm) {
        console.log('form: ', form);
        if (form.valid) {
            this.noteEmitter.emit({
                mode: this.mode,
                note: this.note
            });
            this.modal.hide();
        }
    }

    close() {
        this.modal.hide();
    }
}
