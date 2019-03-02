import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { API } from "../config/api.config";
import { User } from "../models/user.interface";
import { ApiResponse } from "../models/api-response.interface";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    login(user: User): Observable<ApiResponse> {
        return this.http
            .post(`${API.BASE}/${API.USERS}/${API.LOGIN}`, user)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    register(user: User): Observable<ApiResponse> {
        return this.http
            .post(`${API.BASE}/${API.USERS}/${API.REGISTER}`, user)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    // removeGoal(goal: Goal): Observable<Goal> {
    //     return this.http
    //         .delete(`${GOALS_API}/${goal.id}`)
    //         .map((response: Response) => response.json())
    //         .catch((error: any) => Observable.throw(error.json()));
    // }
}