import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { QuizService } from '../../quiz.service';

import { QuizModal } from './modal/modal-quiz.component';

@Component({
    selector: 'quiz',
    templateUrl: "/quiz.component.html"
})
export class QuizComponent {

    @Input() quiz: any;

    constructor(private dialog: MdDialog) {
    }
       openDialog() {
        let dialogRef = this.dialog.open(QuizObserver);
        
    }
}



@Component({
  selector: 'quiz-observer',
  templateUrl: '/quiz-observer.component.html',
})
export class QuizObserver {
  
  @Input('quiz') quiz: any;
  
  constructor(private quizService: QuizService) {
    }


//   quiz=this.getQuizById(this.id) ;

//    getQuizesByCategory(id:number){
//         this.quizzes = this.quizService.getQuizzeseByCategory(id);
//     }
}


