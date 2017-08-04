import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, Injector } from '@angular/core';

import { HttpModule, Http }  from '@angular/http';

import { ApiService } from './services/api.service';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        SharedModule
    ],
    declarations: [],
    exports: [
        HttpModule
    ],
    providers: [
        ApiService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}