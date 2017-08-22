import {Component, Input, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'modal-quiz',
  templateUrl: '/modal-quizzes.component.html',
  styleUrls: ['modal-quizzes.component.scss']

})
export class QuizDialogComponent {

  /**
   * @param quiz
   */
  constructor(@Inject(MD_DIALOG_DATA) public quiz: any) {
  }

}
