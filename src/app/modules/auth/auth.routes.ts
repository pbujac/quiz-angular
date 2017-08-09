import { RegisterPageComponent } from './pages/register/register.page';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "app/modules/auth/pages/login/login.page";

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);