import { Component, Input, Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ResultModal } from '../../../modals/modal-result/modal-result.component';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: ['result.component.scss']
})
export class ResultComponent {

    @Input() result: any;

    constructor(private dialog: MdDialog) {
    }

    openDialog() {
        let dialogRef = this.dialog.open(ResultModal, {
            data: this.result
        });
    }
}