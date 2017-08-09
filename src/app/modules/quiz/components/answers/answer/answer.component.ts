import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-answer',
    templateUrl: "/answer.component.html"
})
export class AnswerComponent {

    @Input() quizAnswer: any;
    answer: any;

    constructor() {
    }
}