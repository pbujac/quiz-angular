import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from "app/shared/components/navbar/navbar.component";

import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";
import { ShadowDirective } from "app/shared/directives/shadow.directive";
import { ReverseStr } from "app/shared/pipes/reverse-str.pipe";


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        ShadowDirective,

        ReverseStr
    ],
    exports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        
        NavbarComponent,
        
        ShadowDirective,

        ReverseStr
    ], 
    providers: [
        AuthenticatedGuard
    ]
})
export class SharedModule {
    constructor() {
    }
}