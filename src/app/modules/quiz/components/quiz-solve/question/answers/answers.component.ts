import {Component, Input} from '@angular/core';
import {Question} from "../../../../model/question.model";

@Component({
  selector: 'qz-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.scss']
})
export class AnswersComponent {

  @Input() question: Question;
  @Input() answers: any;
  @Input() page: any;

  constructor() {
  }
}
