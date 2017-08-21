import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserResultsPageComponent} from './pages/user-results/user-results.page'
import {AuthenticatedGuard} from 'app/shared/guards/authenticated.guard';
import {QuizzesPageComponent} from "app/modules/quiz/pages/quizzes/quizzes.page";
import {QuizCategoriesPageComponent} from "./pages/quiz-categories/quiz-categories.page";
import {QuizListByCategoriesPageComponent} from "./pages/quiz-list/by-category/quiz-list-by-categories.page";

const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesPageComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'user-results',
    component: UserResultsPageComponent,
    canActivate: [AuthenticatedGuard]
  },
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
