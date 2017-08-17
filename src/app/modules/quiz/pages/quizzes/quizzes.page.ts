import { Component, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material';
import { QuizService } from "app/modules/quiz/quiz.service";

@Component({
  templateUrl: "./quizzes.page.html",
  styleUrls: ['quizzes.page.scss']
})

export class QuizzesPageComponent {
  quizzes: any;
  length: any;
  @Input() pageIndex: number = 1;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @Output() page: number;

  constructor(private quizService: QuizService) {
    this.length = quizService.getTotal(this.pageIndex).subscribe(result => {
      this.length = result;
      this.quizzes = quizService.getQuizzes(this.pageIndex, this.pageSize);
    })
  }

  getByPage(event) {
    this.quizzes = this.quizService.getQuizzes(event.pageIndex, event.pageSize);
  }

}
