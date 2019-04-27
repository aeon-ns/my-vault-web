// Angular Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

// Vault - Routes
import { VAULT_ROUTES } from "./app-vault.routes";

// Vault - Components
import { VaultComponent } from "./app-vault.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotesComponent } from "./notes/notes.component";
import { PwordsComponent } from "./pwords/pwords.component";
import { CardsComponent } from "./cards/cards.component";

// Vault - Modal - Components
import { NoteModal } from "./notes/modals/note.modal";
import { PwordModal } from "./pwords/modals/pword.modal";

// Vault - Providers
import { NotesService } from "./providers/notes.service";
import { PwordsService } from "./providers/pwords.service";
import { CardsService } from "./providers/cards.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(VAULT_ROUTES)
    ],
    declarations: [
        VaultComponent,
        DashboardComponent,
        NotesComponent,
        PwordsComponent,
        CardsComponent,
        NoteModal,
        PwordModal
    ],
    providers: [NotesService, PwordsService, CardsService],
    exports: []
})
export class VaultModule {}
