import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../providers/user.service";
import { Notify } from "../providers/notification.service";
import { ApiResponse } from "../models/api-response.interface";

interface Nav {
    link: string;
    name: string;
    icon: string;
    exact: boolean;
}

@Component({
    selector: "app-vault",
    styleUrls: ["app-vault.component.scss"],
    templateUrl: "app-vault.component.html"
})
export class VaultComponent {
    nav: Nav[] = [
        {
            link: "/vault",
            name: "Home",
            icon: "fas fa-home",
            exact: true
        },
        {
            link: "/vault/notes",
            name: "Notes",
            icon: "fas fa-sticky-note",
            exact: true
        },
        {
            link: "/vault/pwords",
            name: "Passwords",
            icon: "fas fa-key",
            exact: false
        },
        {
            link: "/vault/cards",
            name: "Cards",
            icon: "fas fa-credit-card",
            exact: false
        }
    ];

    constructor(
        private router: Router,
        private userService: UserService,
        private notify: Notify
    ) {}

    logout() {
        this.userService.logout().subscribe(
            (success: ApiResponse) => {
                console.log("@VaultComp.logout: success", success);
                window.localStorage.removeItem('token');
                this.notify.success(success.message);
                this.router.navigate(["/login"]);
            },
            (error: ApiResponse) => {
                console.log("@VaultComp.logout: error", error);
            }
        );
    }
}
