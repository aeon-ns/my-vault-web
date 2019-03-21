import { Injectable } from "@angular/core";

import { ApiResponse } from "../models/api-response.interface";
import { Notify } from "./notification.service";
import { Router } from "@angular/router";

@Injectable()
export class ErrorHandlerService {
    constructor(private router: Router, private notify: Notify) {}

    public handle(error: ApiResponse) {
        if(error.message) {
            if(error.status === 401) {
                this.notify.clearAll();
            }
            this.notify.error(error.message);
        }
        switch (error.status) {
            case 401:
                window.localStorage.removeItem("token");
                this.router.navigate(["/login"]);
                break;
            default:
                break;
        }
    }
}
