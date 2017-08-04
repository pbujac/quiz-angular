import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes:Routes = [
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
        path: 'quiz-categories', 
        loadChildren: './modules/quiz/quiz.module#QuizModule'
    } 
    //{
    //     path: '404',
    //     component: Four04Component
    // },
    // {
    //     path: '**',
    //     redirectTo: '404'
    // }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);