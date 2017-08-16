import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
// import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { QuizListByCategoriesPageComponent } from "app/modules/quiz/pages/quiz-list/category/quiz-list-by-categories.page";

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";

const routes: Routes = [
    {
        path: 'categories',
        component: QuizCategoriesPageComponent,
        canActivate: [AuthenticatedGuard]
    },
    // {
    //     path: 'quiz-create',
    //     component: QuizCreatePageComponent,
    //     canActivate: [AuthenticatedGuard],
    // },
    // {
    //     path: 'quiz-solve/:id',
    //     component: QuizSolvePageComponent,
    //     canActivate: [AuthenticatedGuard],
    // },
       {
        path: 'quiz-list-by-categories/:id',
        component: QuizListByCategoriesPageComponent,
        canActivate: [AuthenticatedGuard],
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);