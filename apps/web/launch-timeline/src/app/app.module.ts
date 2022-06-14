import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { DataLaunchesModule } from '@spacex/launches/data-launches';
import { SPACEX_API } from '@spacex/shared/data-common';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NgxsModule.forRoot(undefined, { developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    DataLaunchesModule,
  ],
  providers: [
    {
      provide: SPACEX_API,
      useValue: environment.spacexApi,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
