import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResultsPageComponent } from './pages/user-results/user-results.page'
import { AuthenticatedGuard } from 'app/shared/guards/authenticated.guard';

const routes: Routes = [
    // {
    //     path: '',
    //     component: UserResultsPageComponent,
    //     canActivate: [AuthenticatedGuard]
    // },
    {
        path: 'user-results',
        component: UserResultsPageComponent
        // canActivate: [AuthenticatedGuard],
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);