import { QuizService } from '../../quiz.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

import { UrlValidator } from "app/shared/validators";

@Component({
    templateUrl: "/quiz-solve.page.html",
    styleUrls: ['quiz-solve.scss']
})
export class QuizSolvePageComponent {

    quiz: any;
    quizId: number;

    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.quizId = params['id'];
        });

        this.quiz = quizService.getQuizById(this.quizId).subscribe(
            result => this.quiz = result
        );
    }

      onSubmit() {
       debugger; console.log('On submit');
    }
}