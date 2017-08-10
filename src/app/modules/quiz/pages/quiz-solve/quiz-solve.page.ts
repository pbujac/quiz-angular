import { Answer } from './model/answer';
import { Question } from './model/question';
import { Quiz } from './model/quiz';
import { QuizConfig } from './model/quiz-config';
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
    selectedPage: number;
    answeredPages: Array<number>;
    endStatus: boolean;

    quizName: string;
    config: QuizConfig = {
        'allowBack': true,
        'allowReview': true,
        'autoMove': false,  // if true, it will move to next question automatically when answered.
        'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': false,  // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': false,
        'showPager': true,
        'theme': 'none'
    };
    pager = {
        index: 0,
        size: 1,
        count: 1
    };

    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute
    ) {
        this.selectedPage = 1;
        this.route.params.subscribe(params => {
            this.quizId = params['id'];
        });

        this.answeredPages = new Array();
        this.endStatus = false;
        this.loadQuiz(this.quizName);
    }

    public onSelectPage(page: number) {

    }

    public loadQuiz(quizName: string) {
        this.quiz = this.quizService.getQuizById(this.quizId).subscribe(
            result => {
                this.quiz = new Quiz(result);
                this.quiz.setQuizConfig(this.config);
                this.pager.count = this.quiz.questions.length;
                this.quiz = result;
            }
        );
    }

    get filteredQuestions() {
        return (this.quiz.questions) ?
            this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }
    public goTo(index: number) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.selectedPage = index + 1;
            this.endStatus = false;
        }
    }

    public range(min: number, max: number) {
        var input = [];
        for (var i = min; i <= max; i++) {
            input.push(i);
        }

        return input;
    };

    public onSelectAnswer(question: Question, answer: Answer) {

        question.answers.forEach((a) => {
            a.selected = false;
            if (a.id === answer.id) {
                question.answered = true;
                a.selected = true;
                this.answeredPages.push(this.pager.index + 1);
            }
        }
        );

        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    }

    public getAnsweredPage(page: number): boolean {
        return this.answeredPages.includes(page);
    }

    public isAnswered(question: Question) {
        return question.answers.find(x => x.selected) ? true : false;
    };

    public onReview() {
        this.endStatus = true;
    }

    public onSubmit() {
        console.log('On submit');
    }
}