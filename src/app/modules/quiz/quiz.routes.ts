import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserResultsPageComponent} from './pages/user-results/user-results.page'
import {AuthenticatedGuard} from 'app/shared/guards/authenticated.guard';
import {QuizSolveComponent} from "./pages/quiz-solve/quiz-solve.page";

const routes: Routes = [
  {
    path: 'user-results',
    component: UserResultsPageComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'quiz-solve/:id',
    component: QuizSolveComponent,
    canActivate: [AuthenticatedGuard],
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
