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

            this.api.get('quizzes/'+id).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }
}