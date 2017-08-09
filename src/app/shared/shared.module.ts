import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from "app/shared/components/navbar/navbar.component";
import { SidebarComponent } from "app/shared/components/sidebar/sidebar.component";
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";
import { ShadowDirective } from "app/shared/directives/shadow.directive";

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReverseStr } from "app/shared/pipes/reverse-str.pipe";


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        ShadowDirective,

        ReverseStr
    ],
    exports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
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