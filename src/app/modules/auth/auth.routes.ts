import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterPageComponent} from "./pages/register/register.page";
import {LoginPageComponent} from "./pages/login/login.page";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
