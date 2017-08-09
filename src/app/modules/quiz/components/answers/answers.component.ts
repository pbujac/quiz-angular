import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-answers',
    templateUrl: "/answers.component.html"
})
export class AnswersComponent {

    @Input() answers: any;

    constructor() {
    }
}