import { Component } from "@angular/core";

interface Nav {
    link: string;
    name: string;
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
            link: "/",
            name: "Home",
            exact: true
        },
        {
            link: "/",
            name: "Login",
            exact: true
        },
        {
            link: "/goals",
            name: "Goals",
            exact: false
        }
    ];
}