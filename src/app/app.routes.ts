import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
     path: 'quiz',
     loadChildren: './modules/quiz/quiz.module#QuizModule'
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
