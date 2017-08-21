import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from "app/shared/guards/authenticated.guard";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizListByCategoriesPageComponent } from "app/modules/quiz/pages/quiz-list/by-category/quiz-list-by-categories.page";
import { UserResultsPageComponent } from './pages/user-results/user-results.page'

const routes: Routes = [
     { 
        path: 'categories',
        component: QuizCategoriesPageComponent,
        canActivate: [AuthenticatedGuard],
        canActivateChild: [AuthenticatedGuard]
    },
       {
        path: 'quiz-list-by-categories/:id',
        component: QuizListByCategoriesPageComponent,
        canActivate: [AuthenticatedGuard],
    },
    {
        path: 'user-results',
        component: UserResultsPageComponent
        // canActivate: [AuthenticatedGuard],
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);