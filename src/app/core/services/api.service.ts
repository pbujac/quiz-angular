import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {KeyTransformer} from '../../shared/helper/key.transformer';

@Injectable()
export class ApiService {

  /**
   * @type {string}
   */
  private apiEndpoint: string = "http://localhost/app_dev.php/api/v1";

  /**
   * @param {Http} http
   * @param {Router} router
   */
  constructor(private http: Http, private router: Router) {
  }

  /**
   * @returns {Headers}
   */
  public createAuthorizationHeader() {
    let headers = new Headers();
    let key = 'authentication';

    if (localStorage.getItem(key) !== null) {
      headers.append(key, localStorage.getItem(key));
    }

    return headers;
  }

  /**
   * @param {string} path
   *
   * @returns {Observable<any>}
   */
  public get(path: string): Observable<any> {

    let endpoint = `${this.apiEndpoint}/${path}`;
    let headers = this.createAuthorizationHeader();

    return this.http
      .get(`${endpoint}`, {headers: headers})
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public post(path: string, body: any): Observable<any> {

    let endpoint = `${this.apiEndpoint}/${path}`;
    let headers = this.createAuthorizationHeader();
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .post(`${endpoint}`, body, {headers: headers})
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public put(path: string, body: any): Observable<any> {

    let endpoint = `${this.apiEndpoint}/${path}`;
    let headers = this.createAuthorizationHeader();
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .put(`${endpoint}`, body, {headers: headers})
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public patch(path: string, body: any): Observable<any> {

    let endpoint = `${this.apiEndpoint}/${path}`;
    let headers = this.createAuthorizationHeader();
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .patch(`${endpoint}`, body, {headers: headers})
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   *
   * @returns {Observable<any>}
   */
  public delete(path: string): Observable<any> {

    let endpoint = `${this.apiEndpoint}/${path}`;
    let headers = this.createAuthorizationHeader();

    return this.http
      .delete(`${endpoint}`, {headers: headers})
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {Response} res
   * @param {boolean} toJSON
   *
   * @returns {any}
   */
  private extractData(res: Response, toJSON: boolean = true) {

    if (!toJSON) {

      return res;
    }

    try {
      return res.json()
    }
    catch (e) {
      return {};
    }
  }

  /**
   * @param {Response} error
   *
   * @returns {ErrorObservable}
   */
  private handleError(error: Response) {
    let err = error.json();

    if (error.status === 401) {

      localStorage.clear();
      this.router.navigate(['login']);

      return Observable.throw({
        error: 'Credentials are incorrect'
      });

    } else if (error.status === 400) {

      return Observable.throw({
        error: err
      });
    }

    return Observable.throw(err);
  }

}
