import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-answers',
    templateUrl: "/answers.component.html"
})
export class AnswersComponent {

    @Input() answers: any;
    @Output() onChangeAnswer: EventEmitter<any> = new EventEmitter<any>();

    resultAnswer: any;

    constructor() {
    }

    public getAnswer() {
        this.onChangeAnswer.emit(this.resultAnswer);
    }
}