import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule, Store } from '@ngxs/store';
import { SPACEX_API_BASE_URL } from '@spacex/shared/data/data-common';
import { DataRocketModule } from '@spacex/rocket/data/data-rocket';
import { SHELL_CONFIG, ShellModule } from '@spacex/shared/features/shell';
import { environment } from '../environments/environment';
import { DataUnitModule, UnitState } from '@spacex/shared/data/data-unit';
import { UNIT$ } from '@spacex/shared/util/util-unit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'overview',
        loadChildren: () =>
          import('@spacex/rockets/features/lazy/rockets-overview').then(
            (module) => module.RocketsOverviewModule
          ),
      },
      {
        path: 'rocket',
        loadChildren: () =>
          import('@spacex/rockets/features/lazy/rocket-detail').then(
            (module) => module.RocketDetailModule
          ),
      },
      {
        path: '**',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
    ]),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    DataRocketModule,
    DataUnitModule,
    HttpClientModule,
    ShellModule,
  ],
  providers: [
    {
      provide: SPACEX_API_BASE_URL,
      useValue: 'https://api.spacexdata.com/v4',
    },
    {
      provide: SHELL_CONFIG,
      useValue: { appName: 'SpaceX Rockets' },
    },
    {
      provide: UNIT$,
      useFactory: (store: Store) => store.select(UnitState.unit),
      deps: [Store],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
