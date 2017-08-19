import { Component, Input, Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../modal-result/modal-result.component';


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
        let dialogRef = this.dialog.open(DialogComponent, {
            data: this.result
        });
    }

}
