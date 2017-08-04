import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './pages/home.page';
import { routing } from "app/modules/home/home.routes";
import { HomeService } from "app/modules/home/home.service";

@NgModule({
    imports: [
         CommonModule,
         routing
    ],
    declarations: [
        HomePageComponent
    ],
    exports: [
        
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {
    
}