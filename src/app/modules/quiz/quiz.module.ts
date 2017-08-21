import { QuizService } from './quiz.service';
import { NgModule, Input, Output } from '@angular/core';
import { routing } from 'app/modules/quiz/quiz.routes';

import {MdRadioModule,MdCardModule, MdButtonModule, MdPaginatorModule,MdIconModule,MdDialogModule} from '@angular/material';
import { UserResultsPageComponent } from './pages/user-results/user-results.page'
import { QuizzesPageComponent } from "app/modules/quiz/pages/quizzes/quizzes.page";
import { QuizDialogComponent } from './pages/quizzes/modal-quiz/modal-quiz.component';
import { QuizComponent } from './pages/quizzes/quiz/quiz.component';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        MdButtonModule,
        MdPaginatorModule,
        Ng2OrderModule,
        MdIconModule,
        MdDialogModule
    ],
    declarations: [
        UserResultsPageComponent,
        QuizzesPageComponent,
        QuizDialogComponent,
        QuizComponent
        
    ],
    providers: [
        QuizService 
    ],
    entryComponents: [
        QuizDialogComponent
    ]

})
export class QuizModule {

}
