import { Component } from "@angular/core";
import { UserService } from "./providers/user.service";

@Component({
    selector: "app-login",
    styleUrls: ["login.component.scss"],
    templateUrl: "login.component.html"
})
export class LoginComponent {
    showLogin: boolean = true;
    constructor(private userService: UserService) {}
    logIn(username: string, password: string) {
        this.userService
            .login({ username, password })
            .subscribe((response: any) => console.log("Reponse:: ", response));
    }
}
