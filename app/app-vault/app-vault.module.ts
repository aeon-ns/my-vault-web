import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { VaultComponent } from "./app-vault.component";

import { VAULT_ROUTES } from "./app-vault.routes";


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RouterModule.forChild(VAULT_ROUTES)
    ],
    declarations: [
        VaultComponent
    ],
    providers: [],
    exports: []
})
export class VaultModule {}