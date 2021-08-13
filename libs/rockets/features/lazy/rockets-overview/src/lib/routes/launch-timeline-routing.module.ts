import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RocketsOverviewComponent } from '../pages/rockets-overview/rockets-overview.component';
import { PAGE_ROCKETS_OVERVIEW } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: PAGE_ROCKETS_OVERVIEW, component: RocketsOverviewComponent },
      { path: '**', redirectTo: PAGE_ROCKETS_OVERVIEW, pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class RocketsOverviewRoutingModule {}
