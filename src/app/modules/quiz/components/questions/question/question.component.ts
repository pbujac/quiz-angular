import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-question',
    templateUrl: "/question.component.html"
})
export class QuestionComponent {

    @Input() quizQuestion: any;

    constructor() {
    }
}