import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from '../../providers/notification.service';
import { PwordsService } from '../providers/pwords.service';
import { Pword } from '../../models/pword.interface';
import { ApiResponse } from '../../models/api-response.interface';
import { ErrorHandlerService } from '../../providers/error-handler.service';
import { Subject } from 'rxjs/Subject';

interface PwordSubject {
    mode: 'add' | 'edit';
    pword?: Pword;
}

@Component({
    selector: 'app-vault-dashboard',
    styleUrls: ['pwords.component.scss'],
    templateUrl: 'pwords.component.html'
})
export class PwordsComponent {
    pwords: Pword[] = [];
    openPwordModal: Subject<PwordSubject>;

    constructor(
        private router: Router,
        private pwordService: PwordsService,
        private notify: Notify,
        private errorHandler: ErrorHandlerService
    ) {
        this.openPwordModal = new Subject<PwordSubject>();
        this.pwordService.getAll().subscribe(
            (success: ApiResponse) => {
                console.log('@PwordsComp: pwords success: ', success);
                this.notify.success(success.message);
                this.pwords = success.data;
            },
            (error: ApiResponse) => {
                console.error('@PwordsComp: pwords error: ', error);
                this.errorHandler.handle(error);
            }
        );
    }

    addPword() {
        this.openPwordModal.next({ mode: 'add' });
    }

    editPword(pword: Pword) {
        this.openPwordModal.next({ mode: 'edit', pword });
    }

    onPwordSave(event: PwordSubject) {
        console.log('@PWordsComp[onPwordSave]: ', event);
        let apiCall =
            event.mode === 'add'
                ? this.pwordService.add(event.pword)
                : this.pwordService.update(event.pword);
        apiCall.subscribe(
            (success: ApiResponse) => {
                console.log('@PWordsComp[onPwordSave][API] success: ', success);
                this.notify.success(success.message);
                if (event.mode === 'add') {
                    return this.pwords.push(success.data);
                }
                let index = this.pwords.findIndex(
                    pword => pword._id === event.pword._id
                );
                this.pwords[index] = success.data;
            },
            (error: ApiResponse) => {
                console.error('@PWordsComp[onPwordSave][API] error: ', error);
                this.errorHandler.handle(error);
            }
        );
    }
}
