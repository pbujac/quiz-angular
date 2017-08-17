import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'qz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.scss']
})
export class QuestionComponent implements OnInit {

  @Input() quiz: any;
  @Input() page: any;

  constructor() {
  }

  ngOnInit() {
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.page.index, this.page.index + this.page.size) : [];
  }
}
