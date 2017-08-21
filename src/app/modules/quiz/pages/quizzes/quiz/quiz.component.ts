import { Component , Input, Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { QuizDialogComponent } from '../modal-quiz/modal-quiz.component';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.scss']
})
export class QuizComponent {

    @Input() quiz: any;

    constructor(private dialog: MdDialog) {
    }

    openDialog() {
        let dialogRef = this.dialog.open(QuizDialogComponent, {
            data: this.quiz
        });
    }
}
