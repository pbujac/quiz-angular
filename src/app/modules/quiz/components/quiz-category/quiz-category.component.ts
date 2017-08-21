import {Component, Input} from '@angular/core';

@Component({
  selector: 'quiz-category',
  templateUrl: "quiz-category.component.html",
  styleUrls: ['quiz-category.scss']
})
export class QuizCategoryComponent {

  @Input() quizCategory: any;

  constructor() {
  }
}
