import { QuizService } from './quiz.service';
import { NgModule, Input, Output } from '@angular/core';
import { routing } from 'app/modules/quiz/quiz.routes';

import { MdRadioModule,MdCardModule, MdButtonModule, MdPaginatorModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { UserResultsPageComponent } from './pages/user-results/user-results.page';
import { NgbdModalContent } from './pages/user-results/modal-component';

// import * as jQuery from 'jquery/dist/jquery';


// import { NgbdModalContent, NgbdModalComponent } from './components/modal-result.component'


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        MdButtonModule,
        MdPaginatorModule,
        Ng2OrderModule,
        NgbModule.forRoot()
        // jQuery
    ],
    declarations: [
        UserResultsPageComponent,
        NgbdModalContent
    ],
    providers: [
        QuizService
    ],
      entryComponents: [NgbdModalContent]
})
export class QuizModule {

}
