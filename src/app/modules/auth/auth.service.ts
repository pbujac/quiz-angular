import { User } from './model/user';
import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ApiService } from "app/core/services/api.service";
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private api: ApiService,
        private router: Router) { }

    public login(user): Observable<any> {

        return Observable.create(observer => {
            this.api.post(`login`, user).subscribe(result => {

                localStorage.setItem('authentication', result.token);
                this.router.navigate(['/quiz-create']);
                observer.next(result);

            }, err => observer.error(err));
        });
    }

    public logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    public register(user: User): Observable<any> {

        return Observable.create(observer => {
            this.api.post(`users/register`, user).subscribe(result => {

                this.router.navigate(['/login']);
                observer.next(result);

            }, err => observer.error(err));
        });
    }
}