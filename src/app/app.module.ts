import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {routes} from './app.routes';
import {HomeModule} from './modules/home/home.module';
import {QuizModule} from './modules/quiz/quiz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    routes,
    HomeModule,
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
