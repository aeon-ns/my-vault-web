import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Notify } from "../app.providers/notification.service";
import { UserService } from "../app.providers/user.service";
import { ApiResponse } from "../models/api-response.interface";
import { User } from "../models/user.interface";

@Component({
    selector: "app-register",
    styleUrls: ["register.component.scss"],
    templateUrl: "register.component.html"
})
export class RegisterComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private notify: Notify
    ) {}

    register(
        username: string,
        password: string,
        firstname: string,
        lastname: string
    ) {
        if (!username || !password) {
            return this.notify.warn(
                `Please provide the following fields: <br> ${
                    !username && !password
                        ? "Username, Password"
                        : !username
                        ? "Username"
                        : "Password"
                }`
            );
        }
        let newUser: User = {
            username: username,
            password: password
        };
        if (firstname) {
            newUser.firstname = firstname;
        }
        if (lastname) {
            newUser.lastname = lastname;
        }
        this.userService.register(newUser).subscribe(
            (success: ApiResponse) => {
                console.log("Register:: Success: ", success);
                this.notify.success(success.message);
                this.router.navigate(['/login']);
            },
            (error: ApiResponse) => {
                console.log("Register:: Error: ", error);
                this.notify.error(error.message);
            }
        );
    }

    submitOnEnter(
        event: any,
        username: string,
        password: string,
        firstname: string,
        lastname: string
    ) {
        if (event.which === 13) {
            this.register(username, password, firstname, lastname);
        }
    }
}
