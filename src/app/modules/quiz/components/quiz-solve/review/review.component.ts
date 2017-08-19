import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quiz} from "../../../model/quiz.model";
import {Result} from "../../../model/result.model";

@Component({
  selector: 'qz-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.scss']
})
export class ReviewComponent {

  @Input() quiz: Quiz;
  @Output() onSelectQuestionPage = new EventEmitter<number>();
  @Output() onCancelState = new EventEmitter<boolean>();
  protected result: Result;

  constructor() {
  }

  /**
   * @param {number} question
   */
  public selectQuestionPage(question: number) {
    this.onSelectQuestionPage.emit(question);
  }

  /**
   * @param {boolean} status
   */
  public onCancel(status: boolean) {
    this.onCancelState.emit(status);
  }

  /**
   * @param {Result} result
   */
  public checkIsFinishedQuiz(result: Result) {
    this.result = result;
  }
}
