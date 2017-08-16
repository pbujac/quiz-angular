import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'quiz',
    templateUrl: "/quiz.component.html"
})
export class QuizComponent {

    @Input() quiz: any;

    constructor() {
    }
}
