import {Component, Input} from '@angular/core';

@Component({
  selector: 'qz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.scss']
})
export class QuestionComponent{

  @Input() quiz: any;
  @Input() page: any;

  constructor() {
  }

  /**
   * @returns {T[] | Array}
   */
  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.page.index, this.page.index + this.page.size) : [];
  }
}
