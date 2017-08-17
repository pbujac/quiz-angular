import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {ApiService} from "app/core/services/api.service";
import {User} from './model/user.model';

@Injectable()
export class AuthService {

  loggedIn : boolean = false;

  /**
   * @param {ApiService} api
   * @param {Router} router
   */
  constructor(private api: ApiService, private router: Router) {
  }

  /**
   * @returns {boolean}
   */
  public isAuthenticated() : boolean{
    return this.loggedIn;
  }

  /**
   * @param {User} user
   *
   * @returns {Observable<any>}
   */
  public register(user: User): Observable<any> {

    return Observable.create(observer => {
      this.api.post(`users/register`, user).subscribe(result => {

        this.router.navigate(['/login']);
        observer.next(result);

      }, err => observer.error(err));
    });
  }


  public login(user): Observable<any> {

    return Observable.create(observer => {
      this.api.post(`login`, user).subscribe(result => {

        localStorage.setItem('authentication', result.token);
        this.router.navigate(['/']);
        this.loggedIn = true;
        observer.next(result);

      }, err => observer.error(err));
    });
  }


  public logout() {

    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/login']);

  }

  public getUserByUsername(username: string): Observable<any> {

    return Observable.create(observer => {
      this.api.get(`users?username=` + username).subscribe(result => {

        observer.next(result);

      }, err => observer.error(err));
    });
  }

}
