import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-questions',
    templateUrl: "/questions.component.html"
})
export class QuestionsComponent {

    @Input() questions: any;

    constructor() {
    }
}