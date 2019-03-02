import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { ApiResponse } from "../../models/api-response.interface";
import { Note } from "../../models/note.interface";

import { API } from "../../config/api.config";

@Injectable()
export class NotesService {
    constructor(private http: Http) {}

    private getOptionsWithAuthHeader() {
        let headers = new Headers({
            "x-access-token": window.localStorage.getItem("token")
        });
        return new RequestOptions({
            headers: headers
        });
    }

    getAll(): Observable<ApiResponse> {
        let options = this.getOptionsWithAuthHeader();
        return this.http
            .get(`${API.BASE}/${API.NOTES}`, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    // get(noteId: string): Observable<ApiResponse> {
    //     let options = this.getOptionsWithAuthHeader();
    //     return this.http
    //         .get(`${API.BASE}/${API.NOTES}/${noteId}`, options)
    //         .map((response: Response) => response.json())
    //         .catch((error: any) => Observable.throw(error.json()));
    // }

    add(note: Note): Observable<ApiResponse> {
        let options = this.getOptionsWithAuthHeader();
        return this.http
            .post(`${API.BASE}/${API.NOTES}`, note, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    update(note: Note): Observable<ApiResponse> {
        let options = this.getOptionsWithAuthHeader();
        return this.http
            .put(`${API.BASE}/${API.NOTES}/${note._id}`, note, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    remove(note: Note): Observable<ApiResponse> {
        let options = this.getOptionsWithAuthHeader();
        return this.http
            .delete(`${API.BASE}/${API.NOTES}/${note._id}`, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}
