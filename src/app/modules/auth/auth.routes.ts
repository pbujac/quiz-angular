import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterPageComponent} from "./pages/register/register.page";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
