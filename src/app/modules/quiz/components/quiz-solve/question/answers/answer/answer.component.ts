import {Component, Input} from '@angular/core';
import {Question} from "../../../../../model/question.model";

@Component({
  selector: 'qz-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.scss']
})
export class AnswerComponent {

  @Input() question: Question;
  @Input() answer: any;
  @Input() page: any;

  constructor() {
  }

  public onSelectAnswer() {

    if (this.question.answers.some(isAnswered)) {

      this.question.answered = true;
      this.page.answeredPages.push(this.page.index + 1);

    } else {

      this.question.answered = false;
      let answeredPages = this.page.answeredPages;

      for (let i = 0; i < answeredPages.length; i++) {

        if (answeredPages[i] === this.page.index + 1) {
          delete answeredPages[i];
        }
      }
    }

    /**
     * @param answer
     */
    function isAnswered(answer) {

      return answer.selected;
    }

  }
}
