import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import {ApiService} from "app/core/services/api.service";
import {Quiz} from "./model/quiz.model";
import {Question} from "./model/question.model";
import {Result} from "app/modules/quiz/model/result.model";
import {ResultAnswer} from "./model/result-answer.model";


@Injectable()
export class QuizService {

  /**
   * @param {ApiService} api
   */
  constructor(private api: ApiService) {
  }

  public getQuizzeseByCategory(id: number): Observable<any> {

    return Observable.create(observer => {
      this.api.get('category/' + id + '/quizzes').subscribe(result => {
        observer.next(result._embedded.quizzes);
      }, err => observer.error(err));
    });
  }

  public getUserResults(page: number, count: number) {
    return Observable.create(observer => {
      this.api.get(`user/results?page=` + this.incrementPage(page) + `&count=` + count).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }

  public incrementPage(page: number){
    return ++page;
  }

  public getQuizzes(page: number, count:number): Observable<any>  {

    return Observable.create(observer => {
      this.api.get('quizzes?page='+ this.incrementPage(page) +'&count='+count).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }


  /**
   * @returns {Observable<any>}
   */
  public getQuizCategories(): Observable<any> {

    return Observable.create(observer => {

      this.api.get(`categories`).subscribe(result => {
        observer.next(result._embedded.categories);
      }, err => observer.error(err));
    });

  }

  /**
   * @param {number} id
   *
   * @returns {Observable<any>}
   */
  public getQuizById(id: number): Observable<any> {

    return Observable.create(observer => {

      this.api.get('quizzes/' + id).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }

  /**
   * @param {Quiz} quiz
   *
   * @returns {Observable<any>}
   */
  public solveQuiz(quiz: Quiz): Observable<any> {

    let result = this.transformResult(quiz.questions);

    return Observable.create(observer => {
      this.api.post('quiz/' + quiz.id + '/solve', result).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });

  }

  /**
   * @param {Array<Question>} questions
   *
   * @returns {Result}
   */
  public transformResult(questions: Array<Question>): Result {

    let result = new Result();
    result.resultAnswers = [];

    questions.forEach(q => {
      this.addAnsweredQuestions(q, result);
    });

    return result;
  }

  /**
   * @param {Question} question
   * @param {Result} result
   */
  private addAnsweredQuestions(question: Question, result: Result) {

    if (question.answered) {

      let resultAnswer = new ResultAnswer();
      resultAnswer.question = question;
      resultAnswer.answers = [];

      this.addSelectedAnswers(question, resultAnswer);

      result.resultAnswers.push(resultAnswer);
    }
  }

  /**
   * @param {Question} question
   * @param {ResultAnswer} resultAnswer
   */
  private addSelectedAnswers(question: Question, resultAnswer: ResultAnswer) {

    question.answers.forEach(a => {

      if (a.selected) {
        resultAnswer.answers.push(a);
      }
    });
  }

}
