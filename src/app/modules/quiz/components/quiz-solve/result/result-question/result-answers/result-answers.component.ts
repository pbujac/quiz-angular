import {Component, Input} from '@angular/core';
import {Answer} from "../../../../../model/answer.model";

@Component({
  selector: 'qz-result-answers',
  templateUrl: './result-answers.component.html',
  styleUrls: ['./result-answers.scss']
})
export class ResultAnswersComponent {

  @Input() answers: Answer[];

  constructor() {
  }

}
