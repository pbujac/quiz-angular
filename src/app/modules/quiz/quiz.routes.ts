import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResultsPageComponent } from './pages/user-results/user-results.page'
import { AuthenticatedGuard } from 'app/shared/guards/authenticated.guard';
import { QuizzesPageComponent } from "app/modules/quiz/pages/quizzes/quizzes.page";
import { DialogOverviewExampleDialog } from "app/modules/quiz/pages/quizzes/quizzes.page";

const routes: Routes = [
    // {
    //     path: '',
    //     component: UserResultsPageComponent,
    //     canActivate: [AuthenticatedGuard]
    // },
    {
        path: 'user-results',
        component: UserResultsPageComponent,
        // canActivate: [AuthenticatedGuard],
    },
    {
        path: 'quizzes',
        component: QuizzesPageComponent,
        canActivate: [AuthenticatedGuard],
    },
    {
        path: 'quizzes',
        component: DialogOverviewExampleDialog,
        canActivate: [AuthenticatedGuard],
    }


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);