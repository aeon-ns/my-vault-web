import { Routes } from "@angular/router";
import { VaultComponent } from "./app-vault.component";

export const VAULT_ROUTES: Routes = [
    {
        path: "vault",
        component: VaultComponent
        // children: [{ path: "", component: VaultComponent }]
    }
];
