import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";

const routes: Routes = [
    {
        path: '',
        component: QuizCategoriesPageComponent
    },
    { 
        path: 'quiz-create',
        component: QuizCreatePageComponent,
        canActivate: [AuthenticatedGuard],
        canActivateChild: [AuthenticatedGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);