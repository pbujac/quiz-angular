import { KeyTransformer } from '../../shared/helper/keyTransformer';
import { any } from 'codelyzer/util/function';
import { Injectable, Injector } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

    private apiEndpoint: string = "http://localhost/app_dev.php/api/v1";

    constructor(private http: Http,
        private router: Router) { }

    public createAuthorizationHeader() {
        let headers = new Headers();
        let key = 'authentication';

        if (localStorage.getItem(key) !== null) {
            headers.append(key, localStorage.getItem(key));
        }

        return headers;
    }

    public get(path: string): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`
        let headers = this.createAuthorizationHeader();
        console.log(endpoint);
        return this.http
            .get(`${endpoint}`, { headers: headers })
            .map(res => this.extractData(res))
            .catch(this.handleError.bind(this));
    }

    public post(path: string, body: any): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`
        let headers = this.createAuthorizationHeader();
        body = KeyTransformer.transformToSnakeCase(body);

        return this.http
            .post(`${endpoint}`, body, { headers: headers })
            .map(res => this.extractData(res))
            .catch(this.handleError.bind(this));
    }

    public put(path: string, body: any): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`
        let headers = this.createAuthorizationHeader();
        body = KeyTransformer.transformToSnakeCase(body);

        return this.http
            .put(`${endpoint}`, body, { headers: headers })
            .map(res => this.extractData(res))
            .catch(this.handleError.bind(this));
    }

    public patch(path: string, body: any): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`
        let headers = this.createAuthorizationHeader();
        body = KeyTransformer.transformToSnakeCase(body);

        return this.http
            .patch(`${endpoint}`, body, { headers: headers })
            .map(res => this.extractData(res))
            .catch(this.handleError.bind(this));
    }

    public delete(path: string, body: any): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`
        let headers = this.createAuthorizationHeader();
        body = KeyTransformer.transformToSnakeCase(body);

        return this.http
            .delete(`${endpoint}`, { headers: headers })
            .map(res => this.extractData(res))
            .catch(this.handleError.bind(this));
    }

    /**
     * Method to extract data that came from server's response,
     * @param res is the response, it is mandatory
     * @param toJSON param is optional, if you want to get JSON formatted response don't pass it,
     * otherwise pass false value
     **/
    private extractData(res: Response, toJSON: boolean = true) {
        if (!toJSON) {
            return res;
        }

        return res.json() || {};
    }

    private handleError(error: Response) {
        let err = error.json();

        if (error.status === 401) {

            localStorage.clear();
            this.router.navigateByUrl('/login');

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