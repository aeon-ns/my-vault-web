import { Routes } from "@angular/router";
import { VaultComponent } from "./app-vault.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotesComponent } from "./notes/notes.component";
import { PwordsComponent } from "./pwords/pwords.component";
import { CardsComponent } from "./cards/cards.component";

export const VAULT_ROUTES: Routes = [
    {
        path: "vault",
        component: VaultComponent,
        children: [
            { path: "", pathMatch: "full", component: DashboardComponent },
            { path: "notes", component: NotesComponent },
            { path: "pwords", component: PwordsComponent },
            { path: "cards", component: CardsComponent }
        ]
    }
];
