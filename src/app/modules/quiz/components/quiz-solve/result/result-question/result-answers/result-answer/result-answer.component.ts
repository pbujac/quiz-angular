import {Component, Input} from '@angular/core';
import {Answer} from "../../../../../../model/answer.model";

@Component({
  selector: 'qz-result-answer',
  templateUrl: './result-answer.component.html',
  styleUrls: ['./result-answer.scss']
})
export class ResultAnswerComponent {

  @Input() answer: Answer;

  constructor() {
  }


}
