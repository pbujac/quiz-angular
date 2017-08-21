import { Component, Input, EventEmitter, Output, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';

import { QuizModal } from './modal/modal-quiz.component';

@Component({
    selector: 'quiz',
    templateUrl: "/quiz.component.html"
})
export class QuizComponent {

    @Input() quiz: any;

    constructor(private dialog: MdDialog) {
    }
       openDialog() {
        let dialogRef = this.dialog.open(QuizModal,{
            data: this.quiz
        });      
    }
}