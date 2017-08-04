import { Injectable, Injector } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {

    private apiEndpoint: string = "https://api.github.com";

    constructor(private http: Http) {}

    public get(path: string): Observable<any> {
        let endpoint = `${this.apiEndpoint}/${path}`

        return this.http
            .get(`${endpoint}`)
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

        if (error.status === 403) { 
            // this.router.navigateByUrl('/main');
            return Observable.throw({
                status: 'token_expired'
            });
        }
        return Observable.throw(err);
    }
}