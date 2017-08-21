import {Component} from '@angular/core';
import {QuizService} from '../../quiz.service';

@Component({
  templateUrl: "/quiz-categories.page.html",
  styleUrls: ['quiz-categories.scss']
})
export class QuizCategoriesPageComponent {

  quizzes: any;

  constructor(private quizService: QuizService) {
    this.quizzes = quizService.getQuizCategories();
  }
}
