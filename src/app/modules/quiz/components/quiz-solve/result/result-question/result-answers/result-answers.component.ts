import {Component, Input} from '@angular/core';
import {ResultAnswer} from "../../../../../model/result-answer.model";

@Component({
  selector: 'qz-result-answers',
  templateUrl: './result-answers.component.html',
  styleUrls: ['./result-answers.scss']
})
export class ResultAnswersComponent {

  @Input() resultAnswers: ResultAnswer[];

  constructor() {
  }

}
