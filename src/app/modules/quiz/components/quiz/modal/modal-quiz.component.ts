import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import { QuizService } from '../../../quiz.service';
import { QuizComponent } from '../quiz.component';

@Component({
  selector: 'quiz-modal',
  templateUrl: '/modal-quiz.component.html',
  inputs: ['quiz']
})

export class QuizModal {

  quiz: any;
  id: number;
  
  constructor(private quizService: QuizService) {
    }

 getQuizById(id:number){
        this.quiz = this.quizService.getQuizzeseByCategory(id);
    }
}

 