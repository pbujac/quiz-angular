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

        result.questions.forEach(function (q) {

          q.answers.forEach(function (a) {

            result.resultAnswers.forEach(function (r) {
              a.selected =  r.answers.some((x => x.id == a.id));
            });

          })
        });

        this.onFinishedState.emit(result);
      },
      err => {
      }
    );
  }
}
