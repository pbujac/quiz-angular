import {Component, Input} from '@angular/core';
import {Question} from "../../../../model/question.model";

@Component({
  selector: 'qz-result-question',
  templateUrl: './result-question.component.html',
  styleUrls: ['./result-question.scss']
})
export class ResultQuestionComponent {

  @Input() questions: Question[];

  constructor() {
  }

}
