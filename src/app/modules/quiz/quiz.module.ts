import { QuizService } from './quiz.service';
import { NgModule, Input, Output } from '@angular/core';
import { routing } from 'app/modules/quiz/quiz.routes';

import { MdRadioModule, MdCardModule, MdButtonModule, MdPaginatorModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { UserResultsPageComponent } from './pages/user-results/user-results.page';
import { MdDialogModule } from '@angular/material';
import { DialogComponent } from './pages/user-results/modal-result/modal-result.component';
import { ResultComponent } from './pages/user-results/result/result.component';


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
        DialogComponent,
        ResultComponent
    ],
    providers: [
        QuizService
    ],
    entryComponents: [
        DialogComponent
    ]
})
export class QuizModule {

}
