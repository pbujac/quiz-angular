import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from 'app/modules/home/pages/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
