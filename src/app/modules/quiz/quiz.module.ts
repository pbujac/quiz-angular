import { QuizService } from './quiz.service';
import { NgModule, Input, Output } from '@angular/core';
import { routing } from 'app/modules/quiz/quiz.routes';

import { MdRadioModule, MdCardModule, MdButtonModule, MdPaginatorModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { UserResultsPageComponent } from './pages/user-results/user-results.page';
import { MdDialogModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './pages/user-results/modal-result.component';


@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        MdButtonModule,
        MdPaginatorModule,
        Ng2OrderModule,
        MdDialogModule
    ],
    declarations: [
        UserResultsPageComponent,
        DialogOverviewExampleDialog,
    ],
    providers: [
        QuizService
    ],
    entryComponents: [
        DialogOverviewExampleDialog
    ]
})
export class QuizModule {

}
