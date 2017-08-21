import { Component, Input, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'modal-quiz',
  templateUrl: '/modal-quiz.component.html',
  styleUrls: ['modal-quiz.component.scss']

})
export class QuizDialogComponent {

  constructor( @Inject(MD_DIALOG_DATA) public quiz: any) {
  }
}
