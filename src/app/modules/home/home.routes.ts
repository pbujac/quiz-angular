import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "app/modules/home/pages/home.page";
import {AuthenticatedGuard} from "../../shared/guards/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthenticatedGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
