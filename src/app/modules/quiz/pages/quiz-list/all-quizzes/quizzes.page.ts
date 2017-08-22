import {Component, Input, Output} from '@angular/core';
import {PageEvent} from '@angular/material';
import {QuizService} from "app/modules/quiz/quiz.service";

@Component({
  templateUrl: "./quizzes.page.html",
  styleUrls: ['quizzes.page.scss']
})

export class QuizzesPageComponent {

  @Input() id: number;
  quizzes: any;
  length: any;
  @Input() pageIndex: number = 1;
  @Input() pageSize = 8;
  @Input() pageSizeOptions = [8, 16, 32, 100];
  @Output() page: number;

  /**
   * @param {QuizService} quizService
   */
  constructor(private quizService: QuizService) {
    this.getQuizzes(this.pageIndex, this.pageSize);
  }

  /**
   * @param {number} page
   * @param {number} count
   */
  public getQuizzes(page: number, count: number) {
    this.quizService.getQuizzes(page, count).subscribe(
      result => {
        this.quizzes = result._embedded.quizzes;
        this.length = result.total;
      }
    );
  }

  /**
   * @param event
   */
  getByPage(event) {
    this.getQuizzes(event.pageIndex, event.pageSize);
  }
}
