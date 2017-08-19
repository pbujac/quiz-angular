import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quiz} from "../../../model/quiz.model";
import {QuizService} from "../../../quiz.service";
import {Result} from "../../../model/result.model";

@Component({
  selector: 'qz-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.scss']
})
export class SubmitComponent {

  @Input() quiz: Quiz;
  @Output() onCancelState = new EventEmitter<boolean>();
  @Output() onFinishedState = new EventEmitter<Result>();

  constructor(private quizService: QuizService) {
  }

  public onSubmit() {

    this.quizService.solveQuiz(this.quiz).subscribe(r => {

        let result = new Result();
        result.finished = true;
        result.score = r.score;
        result.questions = r.quiz.questions;
        result.resultAnswers = r.result_answers;
        this.checkAllCorrectAnswers(result);
        this.onFinishedState.emit(result);
      },
      err => {
      }
    );
  }

  /**
   * @param {Result} result
   */
  private checkAllCorrectAnswers(result: Result) {

    result.resultAnswers.forEach(function (rA) {

      rA.question.answers.forEach(function (qA) {

        qA.selected = rA.answers.some((x => x.id === qA.id));
      })
    });
  }
}
