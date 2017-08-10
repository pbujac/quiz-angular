import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-question',
    templateUrl: "/question.component.html"
})
export class QuestionComponent {

    @Input() quizQuestion: any;
    @Output() onChangeAnswer = new EventEmitter<any>();
    private answers: Array<any> = new Array<any>();

    constructor() {
    }

    public getAnswer(answer: any): void {
        
        this.answers.push(answer);
        console.log(this.answers);
    }
}