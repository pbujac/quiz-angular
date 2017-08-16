import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "app/shared/components/navbar/navbar.component";
import {FooterComponent} from './components/footer/footer.component';
import {AuthenticatedGuard} from "app/shared/guards/authenticated.guard";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

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
  ],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [
    AuthenticatedGuard
  ]
})
export class SharedModule {

  constructor() {
  }

}
