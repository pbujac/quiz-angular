import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ApiService} from './services/api.service';
import {SharedModule} from "app/shared/shared.module";

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

  /**
   * @param {CoreModule} parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
