import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    ElementRef,
    OnInit
} from '@angular/core';
import { Pword } from '../../../models/pword.interface';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';
import { CustomField } from '../../../models/custom-field.interface';

declare var UIkit: any;

interface UIKitModalInstance {
    show: Function;
    hide: Function;
}

interface PwordSubject {
    mode: 'add' | 'edit';
    pword?: Pword;
}

const CUSTOM_FIELD_TEMPLATE: CustomField = {
    key: '',
    value: ''
};

@Component({
    selector: 'pword-modal',
    styleUrls: ['pword.modal.scss'],
    templateUrl: 'pword.modal.html'
})
export class PwordModal implements OnInit {
    pword: Pword;
    mode: 'add' | 'edit';
    modal: UIKitModalInstance;
    fullView: boolean;
    revealPassword: boolean;
    revealValues: boolean[];

    @Input() open: Subject<PwordSubject>;
    @Output() pwordEmitter: EventEmitter<PwordSubject>;
    @ViewChild('pwordModal') pwordModal: ElementRef;

    constructor() {
        this.pword = {
            title: '',
            account: false,
            pinned: false,
            username: '',
            password: '',
            hasCustom: false,
            customFields: []
        };
        this.pwordEmitter = new EventEmitter<PwordSubject>();
        this.fullView = false;
        this.revealPassword = false;
        this.revealValues = [];
    }

    ngOnInit() {
        this.open.subscribe((subject: PwordSubject) => {
            this.modal = UIkit.modal(this.pwordModal.nativeElement, {});
            this.modal.show();
            this.mode = subject.mode;
            if (!subject.pword) {
                return this.reset();
            }
            this.pword = Object.assign({}, subject.pword);
        });
    }

    reset() {
        this.pword = {
            title: '',
            account: false,
            pinned: false,
            username: '',
            password: '',
            hasCustom: false,
            customFields: []
        };
        console.log('@PwordModal[reset] pword: ', this.pword);
    }

    addCustomField() {
        this.pword.hasCustom = true;
        this.pword.customFields.push(Object.assign({}, CUSTOM_FIELD_TEMPLATE));
        this.revealValues.push(false);
    }

    removeCustomField(index: number) {
        this.pword.customFields.splice(index, 1);
        this.revealValues.splice(index, 1);
    }

    save(form: NgForm) {
        console.log('form: ', form);
        if (form.valid) {
            this.pwordEmitter.emit({
                mode: this.mode,
                pword: this.pword
            });
            this.modal.hide();
        }
    }

    close() {
        this.modal.hide();
    }
}
