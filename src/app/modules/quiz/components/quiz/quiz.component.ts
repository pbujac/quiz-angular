import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MdDialog } from '@angular/material';

import { QuizObservable } from './modal/modal-quiz.component';

@Component({
    selector: 'quiz',
    templateUrl: "/quiz.component.html"
})
export class QuizComponent {

    @Input() quiz: any;

    constructor(private dialog: MdDialog) {
    }
       openDialog() {
        this.dialog.open(QuizObservable);
    }

}
