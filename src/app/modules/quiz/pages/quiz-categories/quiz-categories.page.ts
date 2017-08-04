import { Component } from '@angular/core';
@Component({
    templateUrl: "/quiz-categories.page.html"
})
export class QuizCategoriesPageComponent {

    quizzes = [{
        name: 'Quiz 1',
        description: 'Quiz 1 Description'
    },
    {
        name: 'Quiz 2',
        description: 'Quiz 2 Description'
    }]
    constructor() {

    }


    onVoted(result: any){
        console.log(result);
    }
 }