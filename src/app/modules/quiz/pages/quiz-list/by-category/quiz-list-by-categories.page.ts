import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../quiz.service';

@Component({
  templateUrl: "/quiz-list-by-categories.page.html",
  styleUrls: ['quiz-list-by-categories.scss']
})
export class QuizListByCategoriesPageComponent {

  id: number;
  quizzes: any;

  ngOnInit() {
  }

  receiveValue($event) {
    this.id = $event;
    this.getQuizesByCategory(this.id);
  }

  constructor(private quizService: QuizService) {
  }

  getQuizesByCategory(id: number) {
    this.quizzes = this.quizService.getQuizzeseByCategory(id);
  }
}
