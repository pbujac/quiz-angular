import { Router } from '@angular/router';
import { Question } from './pages/quiz-solve/model/question';
import { ResultAnswer } from './pages/quiz-solve/model/result-answer';
import { Result } from './pages/quiz-solve/model/result';
import { Quiz } from './pages/quiz-solve/model/quiz';
import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ApiService } from "app/core/services/api.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class QuizService {
    constructor(private api: ApiService) {

    }

    public getQuizCategories(): Observable<any> {

        return Observable.create(observer => {
            this.api.get(`categories`).subscribe(result => {
                observer.next(result._embedded.categories);
            }, err => observer.error(err));
        });
    }

    public getQuizById(id: number): Observable<any> {

        return Observable.create(observer => {

            this.api.get('quizzes/' + id).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    public solveQuiz(quiz: Quiz): Observable<any> {

        let result = this.transformResult(quiz.questions);

        return Observable.create(observer => {
            this.api.post('quiz/' + quiz.id + '/solve', result).subscribe(result => {
                observer.next(result);  
            }, err => observer.error(err));
        });
    }

    public transformResult(questions: Array<Question>): Result {

        let result = new Result();
        result.resultAnswers = [];
        questions.forEach(q => {
            if (q.answered) {
                let resultAnswer = new ResultAnswer();
                resultAnswer.question = q;
                resultAnswer.answers = [];
                q.answers.forEach(a => {
                    if (a.selected) {
                        resultAnswer.answers.push(a);
                    }
                });
                result.resultAnswers.push(resultAnswer);
            }
        });

        return result;
    }
}