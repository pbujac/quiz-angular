import {Component ,Input, Inject} from '@angular/core';
import {MdDialog} from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'quiz-modal',
  templateUrl: '/modal-quiz.component.html',
})
export class QuizModal {
   
  constructor(@Inject(MD_DIALOG_DATA) public quiz: any) {
    }

}


 