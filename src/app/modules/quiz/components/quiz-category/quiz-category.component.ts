import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'quiz-category',
    templateUrl: "/quiz-category.component.html"
})
export class QuizCategoryComponent {

    @Input() quizCategory: any;
    @Output() onVoted = new EventEmitter<any>();

    voted = false;

    constructor() {

    }

    vote(isUp: boolean) {
        this.onVoted.emit({quizCategory: this.quizCategory,isUp: isUp});
        this.voted = true;
    }
 }