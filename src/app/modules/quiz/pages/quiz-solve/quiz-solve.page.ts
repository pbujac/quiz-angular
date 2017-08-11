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
    inputRange: Array<number>;
    endStatus: boolean;
    p: number = 1;
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

        this.inputRange = new Array();
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
                this.inputRange = this.range(1, this.pager.count);
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

            this.inputRange = [];
            if (this.pager.count + 1 <= 10) {
                this.inputRange = this.range(1, this.pager.count);
            } else {

                if (this.pager.index <= 6) {
                    this.inputRange = this.range(1, 10);
                } else if (this.pager.index + 4 >= this.pager.count ) {
                    this.inputRange = this.range(this.pager.count - 9, this.pager.count );
                } else {
                    this.inputRange = this.range(this.pager.index - 5, this.pager.index + 4);
                }
            }
        }
    }

    public checkPage() {

        return (this.quiz.questions) ?
            this.quiz.questions.slice(this.pager.index, this.pager.index + 10) : [];
    }

    public range(min: number, max: number) {
  
        for (var i = min; i <= max; i++) {
            this.inputRange.push(i);
        }

        return this.inputRange;
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
        console.log(this.quiz);
    }
}