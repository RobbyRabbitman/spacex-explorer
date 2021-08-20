import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsOverviewComponent } from './pages/rockets-overview/rockets-overview.component';
import { RocketsOverviewRoutingModule } from './routes/launch-timeline-routing.module';
import { UiRocketCardModule } from '@spacex/rocket/ui/ui-rocket-card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RocketsOverviewComponent],
  imports: [
    CommonModule,
    RocketsOverviewRoutingModule,
    MatButtonModule,
    UiRocketCardModule,
  ],
})
export class RocketsOverviewModule {}
