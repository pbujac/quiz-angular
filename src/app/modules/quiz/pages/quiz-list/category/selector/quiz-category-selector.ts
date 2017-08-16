import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../../quiz.service';


@Component({
  selector: 'quiz-category-selector',
  templateUrl: 'quiz-category-selector.html'
})
export class QuizCategorySelectorComponent implements OnInit{
  ngOnInit(): void {
   this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
   if (this.id != 'all'){
     this.selectedValue = this.id;
     this.sendValue();
   }
  }

  id: number | string;
  quizzes : any ;
  paramsSub: any ;
  selectedValue:number | string;
 
@Output() valueEvent= new EventEmitter<number | string>();

  constructor(private quizService: QuizService , private activatedRoute: ActivatedRoute) {
    quizService.getQuizCategories().subscribe(result => {
     this.quizzes = result;
      });
    }
    
sendValue(){
    this.valueEvent.emit(this.selectedValue); 
    }
}