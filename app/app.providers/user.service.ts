import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { API } from "../config/api.config";
import { Credentials } from "../models/credentials.interface";


@Injectable()
export class UserService {
    constructor(private http: Http) {}

    login(userCredentials: Credentials): Observable<any> {
        return this.http
            .post(`${API.BASE}/${API.USERS}/${API.LOGIN}`, userCredentials)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
    
    // updateGoal(goal: Goal): Observable<Goal> {
    //     let headers = new Headers({
    //         "x-auth-token": "some_auth_token"
    //     });
    //     let options = new RequestOptions({
    //         headers: headers
    //     });
    //     return this.http
    //         .put(`${GOALS_API}/${goal.id}`, goal, options)
    //         .map((response: Response) => response.json())
    //         .catch((error: any) => Observable.throw(error.json()));
    // }

    // removeGoal(goal: Goal): Observable<Goal> {
    //     return this.http
    //         .delete(`${GOALS_API}/${goal.id}`)
    //         .map((response: Response) => response.json())
    //         .catch((error: any) => Observable.throw(error.json()));
    // }
}