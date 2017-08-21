import {Component, Input} from '@angular/core';
import {MdDialog} from '@angular/material';
import {QuizModal} from '../../modals/modal-quiz/modal-quiz.component';

@Component({
  selector: 'quiz',
  templateUrl: "quiz.component.html",
  styleUrls: ['quiz.scss']
})
export class QuizComponent {

  @Input() quiz: any;

  /**
   * @param {MdDialog} dialog
   */
  constructor(private dialog: MdDialog) {
  }

  openDialog() {
    this.dialog.open(QuizModal, {
      data: this.quiz
    });
  }
}
