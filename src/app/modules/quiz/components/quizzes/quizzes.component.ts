import { Component , Input, Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { QuizDialogComponent } from 'app/modules/quiz/modals/modal-quizzes/modal-quizzes.component';

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html',
    styleUrls: ['quizzes.component.scss']
})
export class QuizzesComponent {

    @Input() quiz: any;

    constructor(private dialog: MdDialog) {
    }

    openDialog() {
        let dialogRef = this.dialog.open(QuizDialogComponent, {
            data: this.quiz
        });
    }
}
