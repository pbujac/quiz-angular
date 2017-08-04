import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ApiService } from "app/core/services/api.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class HomeService {
    constructor(private api: ApiService) {

    }

    getUsers(name: string) {
        return Observable.create(observer => {
            this.api.get(`search/users?q=${name}`).subscribe(result => {
                observer.next(result.items);
            },err => observer.error(err));
        });
    }
}