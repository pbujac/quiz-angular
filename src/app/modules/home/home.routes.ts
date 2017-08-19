import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "app/modules/home/pages/home.page";
import {AuthenticatedGuard} from "../../shared/guards/authenticated.guard";

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    component: HomePageComponent,
    canActivate: [AuthenticatedGuard]
=======
    path: 'home',
    component: HomePageComponent
>>>>>>> task_2603
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
