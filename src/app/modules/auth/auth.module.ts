import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login/login.page';
import { RegisterPageComponent } from './pages/register/register.page';
import { routing } from "app/modules/auth/auth.routes";
import { AuthService } from "app/modules/auth/auth.service";
import { SharedModule } from "app/shared/shared.module";
import {MdGridListModule, MdInputModule, MdButtonModule} from '@angular/material';

import { LayoutModule } from 'ng2-flex-layout';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        MdGridListModule,
        MdInputModule,
        MdButtonModule,
        LayoutModule
    ],
    declarations: [
        LoginPageComponent,
        RegisterPageComponent
    ],
    exports: [

    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {

}