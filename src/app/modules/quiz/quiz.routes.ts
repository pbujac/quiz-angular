import { QuizCompletedPageComponent } from './pages/quiz-completed/quiz-completed.page';
import { QuizSolvePageComponent } from './pages/quiz-solve/quiz-solve.page';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";

const routes: Routes = [
    {
        path: '',
        component: QuizCategoriesPageComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'quiz-create',
        component: QuizCreatePageComponent,
        canActivate: [AuthenticatedGuard],
    },
    {
        path: 'quiz-solve/:id',
        component: QuizSolvePageComponent,
        canActivate: [AuthenticatedGuard],
    }
    ,
    {
        path: 'quiz-completed/:id',
        component: QuizCompletedPageComponent,
        canActivate: [AuthenticatedGuard],
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);