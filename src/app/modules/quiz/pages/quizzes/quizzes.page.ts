import { Component, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material';
import { QuizService } from "app/modules/quiz/quiz.service";
import { MdDialog } from '@angular/material';

@Component({
  templateUrl: "./quizzes.page.html",
  styleUrls: ['quizzes.page.scss']
})

export class QuizzesPageComponent {

  @Input() id: number;
  quizzes: any;
  length: any;
  @Input() pageIndex: number = 1;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @Output() page: number;

  constructor(private quizService: QuizService, public dialog: MdDialog) {
    this.getQuizzes(this.pageIndex, this.pageSize);
  }

  public getQuizzes(page: number, count: number) {
    this.quizService.getQuizzes(page, count).subscribe(
      result => {
        this.quizzes = result._embedded.quizzes;
        this.length = result.total;
      }
    );
  }

  getByPage(event) {
    this.getQuizzes(event.pageIndex, event.pageSize);
  }

  openDialog(event) {
    debugger
    this.id = event;
    console.log(this.id);
    this.dialog.open(DialogOverviewExampleDialog);

  }
}

@Component({
  selector: 'modal_quizzes_dialog.page',
  templateUrl: "./modal_quizzes_dialog.page.html"
})
export class DialogOverviewExampleDialog {
  quizzes: any;

  @Input() pageIndex: number = 1;
  @Input() pageSize = 10;


  constructor(private quizService: QuizService) {
    this.quizzes = quizService.getQuizzes(this.pageIndex, this.pageSize).subscribe(result => {
      this.quizzes = result;
    })
  }
}