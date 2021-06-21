import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { DataLaunchModule } from '@spacex/launch/data/data-launch';
import { SPACEX_API_BASE_URL } from '@spacex/shared/data/data-common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    DataLaunchModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: SPACEX_API_BASE_URL,
      useValue: 'https://api.spacexdata.com/v4',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
