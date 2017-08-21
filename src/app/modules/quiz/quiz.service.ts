import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuizService {
    constructor(private api: ApiService) {

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
    
}
