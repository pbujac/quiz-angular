import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "app/core/services/api.service";
import {User} from './model/user.model';

@Injectable()
export class AuthService {

  /**
   * @param {ApiService} api
   */
  constructor(private api: ApiService) {
  }

  /**
   * @param {User} user
   *
   * @returns {Observable<any>}
   */
  public register(user: User): Observable<any> {

    return Observable.create(observer => {
      this.api.post(`users/register`, user).subscribe(result => {

        observer.next(result);

      }, err => observer.error(err));
    });
  }

  public getUserByUsername(username: string): Observable<any> {

    return Observable.create(observer => {
      this.api.get(`users?username=` + username).subscribe(result => {

        observer.next(result);

      }, err => observer.error(err));
    });
  }

}
