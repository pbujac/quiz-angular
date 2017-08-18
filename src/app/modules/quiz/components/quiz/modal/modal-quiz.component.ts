import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import { QuizService } from '../../../quiz.service';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '/modal-quiz.component.html',
})
export class QuizObservable {

  quiz: any;
  
  constructor(private quizService: QuizService) {
    }

 getQuizById(id:number){
        this.quiz = this.quizService.getQuizzeseByCategory(id);
    }
}

 