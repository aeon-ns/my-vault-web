import { Component, ElementRef, ViewChild } from "@angular/core";

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
            link: "/vault",
            name: "Home",
            exact: true
        },
        {
            link: "/vault/notes",
            name: "Notes",
            exact: true
        },
        {
            link: "/vault/pwords",
            name: "Passwords",
            exact: false
        },
        {
            link: "/vault/cards",
            name: "Cards",
            exact: false
        }
    ];
}