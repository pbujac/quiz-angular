import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {ApiService} from "app/core/services/api.service";
import {User} from './model/user.model';

@Injectable()
export class AuthService {

  /**
   * @param {ApiService} api
   * @param {AuthenticatedGuard} auth
   * @param {Router} router
   */
  constructor(private api: ApiService, private router: Router) {
  }

  /**
   * @returns {boolean}
   */
  public isAuthenticated(): boolean {

    return !!localStorage.getItem('authentication');

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

  /**
   * @param user
   *
   * @returns {Observable<any>}
   */
  public login(user): Observable<any> {

    return Observable.create(observer => {
      this.api.post(`login`, user).subscribe(result => {

        localStorage.setItem('authentication', result.token);
        observer.next(result);

      }, err => observer.error(err));
    });
  }


  public logout(): void {

    localStorage.clear();
    this.router.navigate(['/login']);

  }

  /**
   * @param {string} username
   *
   * @returns {Observable<any>}
   */
  public getUserByUsername(username: string): Observable<any> {

    return Observable.create(observer => {
      this.api.get(`users?username=` + username).subscribe(result => {

        observer.next(result);

      }, err => observer.error(err));
    });
  }

}
