import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { environment } from '../environments/environment';
import { DataLaunchModule } from '@spacex/launch/data/data-launch';
import { SPACEX_API_BASE_URL } from '@spacex/shared/data/data-common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataRouteHistoryModule } from '@spacex/shared/data/data-route-history';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@spacex/launch-timeline/features/lazy/launch-timeline').then(
            (module) => module.LaunchTimelineModule
          ),
      },
    ]),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    DataLaunchModule,
    DataRouteHistoryModule,
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
