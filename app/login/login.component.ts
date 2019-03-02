import { Component } from "@angular/core";
import { UserService } from "../app.providers/user.service";
import { Router } from "@angular/router";
import { Notify } from "../app.providers/notification.service";

interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

@Component({
    selector: "app-login",
    styleUrls: ["login.component.scss"],
    templateUrl: "login.component.html"
})
export class LoginComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private notify: Notify
    ) {}

    logIn(username: string, password: string) {
        if (!username || !password) {
            return this.notify.warn("Please provide a username & password.");
        }
        this.userService.login({ username, password }).subscribe(
            (success: ApiResponse) => {
                console.log("Login:: Success: ", success);
                window.localStorage.setItem("token", success.data.token);
                this.notify.success(success.message);
                this.router.navigate(['/vault']);
            },
            (error: ApiResponse) => {
                console.log("Login:: Error: ", error);
                this.notify.error(error.message);
            }
        );
    }

    submitOnEnter(event: any, username: string, password: string) {
        if (event.which === 13) {
            this.logIn(username, password);
        }
    }
}
