import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'quiz-modal',
  templateUrl: 'modal-quiz.component.html',
  styleUrls: ['modal-quiz.scss']
})
export class QuizModal {

  /**
   * @param quiz
   */
  constructor(@Inject(MD_DIALOG_DATA) public quiz: any) {
  }

}


