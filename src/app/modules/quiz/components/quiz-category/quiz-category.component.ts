import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-category',
    templateUrl: "quiz-category.component.html"
})
export class QuizCategoryComponent {

    @Input() quizCategory: any;

    constructor() {
    }
}
