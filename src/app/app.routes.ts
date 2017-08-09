import { AuthModule } from './modules/auth/auth.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { LoginPageComponent } from './modules/auth/pages/login/login.page';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'quiz-categories',
        loadChildren: './modules/quiz/quiz.module#QuizModule'
    }

    // {
    //     path: '', canActivate: [AuthenticatedGuard], children: [
    //         { path: 'home' , component: HomeModule},
    //         { path: 'quiz-categories', component: QuizModule }
    //     ]
    // },
    //{
    //     path: '404', 
    //     component: Four04Component
    // },
    // {
    //     path: '**',
    //     redirectTo: '404'
    // }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);