import { QuizService } from './quiz.service';
import { NgModule, Input, Output } from '@angular/core';
import { routing } from 'app/modules/quiz/quiz.routes';

import {MdRadioModule,MdCardModule, MdButtonModule, MdPaginatorModule} from '@angular/material';
import { UserResultsPageComponent } from './pages/user-results/user-results.page'

import { SharedModule } from 'app/shared/shared.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        MdButtonModule,
        // FlexLayoutModule,
        MdPaginatorModule,
        Ng2OrderModule
    ],
    declarations: [
        UserResultsPageComponent,
    ],
    providers: [
        QuizService
    ]
})
export class QuizModule {

}
