import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPageComponent} from "./pages/register/register.page";
import {routing} from "./auth.routes";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {MdCardModule, MdInputModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {AuthService} from "./auth.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
  ],
  declarations: [RegisterPageComponent],
  providers: [AuthService]
})
export class AuthModule {
}
